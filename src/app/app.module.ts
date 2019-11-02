import { environment } from "./../environments/environment.prod";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MdcButtonModule, MdcTextFieldModule, MdcIconModule, MdcCardModule, MdcIconButtonModule } from "@angular-mdc/web";
import { HomeComponent } from "./home/home.component";
import { InputComponent } from "./components/input/input.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [AppComponent, HomeComponent, InputComponent, TodoListComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,

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
