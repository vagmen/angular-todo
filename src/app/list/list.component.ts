import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../content/content.component";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent {
  @Input() tasks: Task[];
  // @Output() public deleteTask: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  // tasks: Task[];

  // getTasks() {
  //   this.todoService.getTasks().subscribe(tasks => (this.tasks = tasks));
  // }

  // tasks: Task[] = [
  //   { title: "Задача1", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача2", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача3", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача4", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача5", description: "Описание", date: new Date(), completed: false },
  // ];
}
