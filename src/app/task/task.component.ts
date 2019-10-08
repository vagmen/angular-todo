import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../content/content.component";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.less"],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  selectedTask: Task;

  isWarning() {
    return true;
  }

  isError() {
    return true;
  }

  ngOnInit() {}

  onSelect(task: Task) {
    this.selectedTask = task;
  }
}
