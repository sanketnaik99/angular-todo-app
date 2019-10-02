import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MdcButtonModule, MdcTextFieldModule, MdcIconModule, MdcCardModule, MdcIconButtonModule } from "@angular-mdc/web";
import { HomeComponent } from "./home/home.component";
import { InputComponent } from "./components/input/input.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
@NgModule({
  declarations: [AppComponent, HomeComponent, InputComponent, TodoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //MDC COMPONENTS
    MdcTextFieldModule,
    MdcButtonModule,
    MdcIconModule,
    MdcCardModule,
    MdcIconButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
