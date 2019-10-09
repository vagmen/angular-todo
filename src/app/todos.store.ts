import { observable, computed, action, autorun, toJS } from "mobx";
import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

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
    // this.localStorageSync();
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
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  @action editTask(task: Task) {}

  @action setCompleteAll(value) {
    this.tasks.forEach(task => task.setCompleted(value));
  }

  // private localStorageSync() {
  //   const initialTasks = JSON.parse(localStorage.todos || "[]");
  //   this.tasks = initialTasks.map(todo => new Task(todo));
  //   this.filter = JSON.parse(localStorage.filter || '"SHOW_ALL"');

  //   autorun(() => {
  //     localStorage.todos = JSON.stringify(toJS(this.tasks));
  //     localStorage.filter = JSON.stringify(toJS(this.filter));
  //   });
  // }
}
