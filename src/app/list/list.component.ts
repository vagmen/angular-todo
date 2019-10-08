import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../content/content.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent {
  @Input() tasks: Task[];
  @Output() public deleteTask: EventEmitter<any> = new EventEmitter();

  // tasks: Task[] = [
  //   { title: "Задача1", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача2", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача3", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача4", description: "Описание", date: new Date(), completed: false },
  //   { title: "Задача5", description: "Описание", date: new Date(), completed: false },
  // ];
}
