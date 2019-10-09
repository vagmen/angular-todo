import { Component, OnInit, Input, Inject } from "@angular/core";
import { Task, TodosStore } from "../todos.store";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.less"],
})
export class TaskComponent implements OnInit {
  constructor(public todosStore: TodosStore, public dialog: MatDialog) {}
  @Input() task: Task;

  today: Date;
  taskDate: Date;

  calcDays() {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisBetween = this.taskDate.getTime() - this.today.getTime() + 1000 * 60 * 60;
    return millisBetween / millisecondsPerDay;
  }

  isWarning() {
    const days = this.calcDays();
    return days < 3;
  }

  isError() {
    const days = this.calcDays();
    return days < 0;
  }

  ngOnInit() {
    this.today = new Date();
    this.taskDate = this.task.date;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTaskDialog, {
      width: "500px",
      data: this.task,
    });
  }
}

@Component({
  selector: "edit-task-dialog",
  templateUrl: "edit-task-dialog.html",
  styleUrls: ["./task.component.less"],
})
export class EditTaskDialog {
  constructor(public dialogRef: MatDialogRef<EditTaskDialog>, @Inject(MAT_DIALOG_DATA) public data: Task) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
