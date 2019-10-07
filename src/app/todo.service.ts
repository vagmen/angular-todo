import { Injectable } from "@angular/core";
import { Task } from "./content/content.component";
import { Observable, of } from "rxjs";
import { Todo } from "./todo.store";

@Injectable()
export class TodoService {
  constructor() {}

  // tasks: Task[] = [
  //   { title: "Задача1", description: "Описание", date: new Date(), completed: false, id: 1 },
  //   { title: "Задача2", description: "Описание", date: new Date(), completed: false, id: 2 },
  //   { title: "Задача3", description: "Описание", date: new Date(), completed: false, id: 3 },
  //   { title: "Задача4", description: "Описание", date: new Date(), completed: false, id: 4 },
  //   { title: "Задача5", description: "Описание", date: new Date(), completed: false, id: 5 },
  // ];

  // completedTasks: Task[] = [
  //   { title: "Задача1", description: "Описание", date: new Date(), completed: true, id: 6 },
  //   { title: "Задача2", description: "Описание", date: new Date(), completed: true, id: 7 },
  //   { title: "Задача3", description: "Описание", date: new Date(), completed: true, id: 8 },
  //   { title: "Задача4", description: "Описание", date: new Date(), completed: true, id: 9 },
  //   { title: "Задача5", description: "Описание", date: new Date(), completed: true, id: 10 },
  // ];

  // deleteTask(id: number): Observable<Task> {
  //   const task = this.tasks.find(t => t.id === id);
  //   this.tasks.splice(task.id, 1);
  //   return of(task);
  // }

  // getTasks(): Observable<Task[]> {
  //   return of(this.tasks);
  // }

  getTasks() {
    return new Promise<Todo[]>(funStuff => {
      setTimeout(() => {
        funStuff([new Todo({ title: "Learn Mobx" })]);
      }, 1000);
    });
  }
}
