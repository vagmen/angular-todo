import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../content/content.component";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.less"],
})
export class TaskComponent {
  constructor(private todoService: TodoService) {}
  @Input() task: Task;

  selectedTask: Task;

  isWarning() {
    return true;
  }

  isError() {
    return true;
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  // deleteHandler(id: number) {
  //   this.todoService.deleteTask(id);
  // }
}
