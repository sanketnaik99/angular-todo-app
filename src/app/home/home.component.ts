import { Component, OnInit } from "@angular/core";
import todoItem from "../constants";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../auth.service";

const BASE_URL = "https://serverless-api-822f7.web.app/api/v1";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  list: any;
  noDataPresent: boolean = false;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private afs: AngularFirestore, private auth: AuthService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.isLoading = true;
    this.afs
      .collection("users")
      .doc(this.auth.currentUser.email)
      .collection("tasks")
      .valueChanges()
      .subscribe(res => {
        if (res.length == 0) {
          this.noDataPresent = true;
          this.isLoading = false;
        } else {
          this.list = res;
          this.noDataPresent = false;
          this.isLoading = false;
        }
      });
  }

  addToDo(todo: string) {
    this.isLoading = true;
    console.log(`Todo Added : ${todo}`);
    let id = Date.now().toString();
    console.log(id);
    this.afs
      .collection("users")
      .doc(this.auth.currentUser.email)
      .collection("tasks")
      .doc(id)
      .set({
        title: todo,
        id: id,
        isComplete: false
      });
    //this.getTasks();
  }

  removeToDo(id: string) {
    this.isLoading = true;
    console.log(`Todo Removed: ${id}`);
    this.afs
      .collection("users")
      .doc(this.auth.currentUser.email)
      .collection("tasks")
      .doc(id)
      .delete();
  }

  finishToDo(data) {
    this.isLoading = true;
    let id = data["id"];
    let isComplete = data["isComplete"];
    console.log(`Todo Finished: ${id}`);

    let val = isComplete ? false : true;
    console.log(String(val));
    this.afs
      .collection("users")
      .doc(this.auth.currentUser.email)
      .collection("tasks")
      .doc(id)
      .update({
        isComplete: val
      });
  }
}
