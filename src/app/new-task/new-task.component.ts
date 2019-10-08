import { Component, OnInit } from "@angular/core";
import { TodosStore } from "../todos.store";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.less"],
})
export class NewTaskComponent implements OnInit {
  constructor(public todosStore: TodosStore) {}

  ngOnInit() {}
}
