import { Injectable } from "@angular/core";
import { action, observable, computed } from "mobx";
import { TodoService } from "./todo.service";

export class Todo {
  completed = false;
  title: string;

  constructor({ title, completed = false }) {
    this.completed = completed;
    this.title = title;
  }
}

@Injectable()
export class TodoStore {
  @observable tasks: Todo[] = [];

  constructor(private _todoService: TodoService) {}

  @action async getTodos() {
    this.tasks = await this._todoService.getTasks();
  }

  @action addTodo({ title }: Partial<Todo>) {
    this.tasks = [...this.tasks, new Todo({ title })];
  }

  @action removeTodo(todo: Todo) {
    this.tasks = this.tasks.filter(currentTodo => currentTodo !== todo);
  }

  @action toggleComplete(todo: Todo) {
    this.tasks = this.tasks.map(currentTodo => {
      if (currentTodo === todo) {
        return {
          ...currentTodo,
          completed: !currentTodo.completed,
        };
      }
      return currentTodo;
    });
  }
}
