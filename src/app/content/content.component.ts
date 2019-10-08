import { Component, OnInit } from "@angular/core";

export interface Task {
  title: string;
  description: string;
  date: Date;
  completed: boolean;
  id: number;
}

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.less"],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tasks: Task[] = [
    { title: "Задача1", description: "Описание", date: new Date(), completed: false, id: 1 },
    { title: "Задача2", description: "Описание", date: new Date(), completed: false, id: 2 },
    { title: "Задача3", description: "Описание", date: new Date(), completed: false, id: 3 },
    { title: "Задача4", description: "Описание", date: new Date(), completed: false, id: 4 },
    { title: "Задача5", description: "Описание", date: new Date(), completed: false, id: 5 },
  ];

  completedTasks: Task[] = [
    { title: "Задача1", description: "Описание", date: new Date(), completed: true, id: 6 },
    { title: "Задача2", description: "Описание", date: new Date(), completed: true, id: 7 },
    { title: "Задача3", description: "Описание", date: new Date(), completed: true, id: 8 },
    { title: "Задача4", description: "Описание", date: new Date(), completed: true, id: 9 },
    { title: "Задача5", description: "Описание", date: new Date(), completed: true, id: 10 },
  ];

  deleteTask(id) {
    this.tasks.filter((task) => task.id !== id);
  }
}
