import { Component } from "@angular/core";
import { TodosStore } from "../todos.store";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.less"],
})
export class ContentComponent {
  constructor(public todosStore: TodosStore) {}
}
