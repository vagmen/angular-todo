import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MobxAngularModule } from "mobx-angular";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from "@angular/material/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { ListComponent } from "./list/list.component";
import { TaskComponent, EditTaskDialog } from "./task/task.component";
import { TodosStore } from "./todos.store";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CompletedListComponent } from "./completed-list/completed-list.component";

registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    CompletedListComponent,
    TaskComponent,
    NewTaskComponent,
    EditTaskDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MobxAngularModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatDialogModule,
  ],
  providers: [TodosStore, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [EditTaskDialog],
})
export class AppModule {}
