import { Component, Input } from "@angular/core";
import { TodosStore, Task } from "../todos.store";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent {
  constructor(public todosStore: TodosStore) {}
  @Input() tasks: Task[];
}
