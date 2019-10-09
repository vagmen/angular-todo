import { observable, computed, action, autorun, toJS } from "mobx";
import { Injectable } from "@angular/core";

export class Task {
  @observable completed = false;
  @observable title: string;
  @observable date: Date;

  constructor({ title, completed, date }) {
    this.completed = completed;
    this.title = title;
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
  @observable title = "";
  @observable date = new Date();

  constructor() {
    // this.localStorageSync();
  }

  @action addTask({ title, completed = false, date }) {
    if (this.title.length > 0) {
      this.tasks.push(new Task({ title: this.title, completed, date: this.date }));
      this.title = "";
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

  // @action showAll() {
  //   this.filter = "SHOW_ALL";
  // }
  // @action showCompleted() {
  //   this.filter = "COMPLETED";
  // }
  // @action showActive() {
  //   this.filter = "ACTIVE";
  // }

  // @action clearCompleted() {
  //   this.tasks = this._filter(this.tasks, "ACTIVE");
  // }

  @action setCompleteAll(value) {
    this.tasks.forEach((task) => task.setCompleted(value));
  }

  // @computed get filteredTodos() {
  //   return this.filter !== "SHOW_ALL" ? this._filter(this.tasks, this.filter) : this.tasks;
  // }

  // @computed get uncompletedItems() {
  //   return this._filter(this.tasks, false).length;
  // }

  // @computed get allComplete() {
  //   return this.uncompletedItems === 0;
  // }

  // private _filter(todos, value) {
  //   return todos.filter(todo => (value === "COMPLETED" ? todo.completed : !todo.completed));
  // }

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
