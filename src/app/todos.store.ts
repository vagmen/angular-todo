import { observable, computed, action, autorun, toJS } from "mobx";
import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

export class Task {
  @observable completed = false;
  @observable title: string;
  @observable description: string;
  @observable date: Date;

  constructor({ title, description, completed, date }) {
    this.completed = completed;
    this.title = title;
    this.description = description;
    this.date = date;
  }

  @action setCompleted(value) {
    this.completed = value;
  }
}

@Injectable()
export class TodosStore {
  @observable tasks = [];
  @observable completedTasks = [];
  @observable title: string;
  @observable description: string;
  @observable date: Date;
  @observable selectedTask: Task;

  constructor() {
    this.resetForm();
  }

  resetForm() {
    this.title = "";
    this.description = "";
    this.date = new Date();
  }

  @action addTask({ title, completed = false, date }) {
    if (this.title.length > 0) {
      this.tasks.push(new Task({ title: this.title, description: this.description, completed, date: this.date }));
      this.resetForm();
    }
  }

  @action removeTask(task: Task) {
    if (task.completed) {
      const index = this.completedTasks.indexOf(task);
      this.completedTasks.splice(index, 1);
    } else {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  }

  @action complete(task: Task) {
    if (task.completed) {
      const index = this.completedTasks.indexOf(task);
      this.completedTasks.splice(index, 1);
      this.tasks.push(task);
    } else {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.completedTasks.push(task);
    }
    task.completed = !task.completed;
  }

  @action drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === "list-one") {
        this.tasks[event.currentIndex].completed = false;
      }
      this.completedTasks[event.currentIndex].completed = true;
    }
  }

  @action setCompleteAll(value) {
    this.tasks.forEach(task => task.setCompleted(value));
  }
}
