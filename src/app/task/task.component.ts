import { Component, OnInit, Input } from "@angular/core";
import { Task, TodosStore } from "../todos.store";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.less"],
})
export class TaskComponent implements OnInit {
  constructor(public todosStore: TodosStore) {}
  @Input() task: Task;

  // selectedTask: Task;

  isWarning() {
    return true;
  }

  isError() {
    return true;
  }

  ngOnInit() {}

  // onSelect(task: Task) {
  //   this.selectedTask = task;
  // }
}
