import { Component, Input } from "@angular/core";
import { TodosStore, Task } from "../todos.store";

@Component({
  selector: "app-completed-list",
  templateUrl: "./completed-list.component.html",
  styleUrls: ["./completed-list.component.less"],
})
export class CompletedListComponent {
  constructor(public todosStore: TodosStore) {}
  @Input() tasks: Task[];
}
