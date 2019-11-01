import { Component, OnInit } from "@angular/core";
import todoItem from "../constants";
import { HttpClient, HttpParams } from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.isLoading = true;
    this.http.get(`${BASE_URL}/get-tasks`).subscribe(res => {
      console.log(res);
      if (res == "NULL") {
        this.noDataPresent = true;
        this.isLoading = false;
      } else {
        this.list = res;
        this.isLoading = false;
      }
    });
  }

  addToDo(todo: string) {
    this.isLoading = true;
    console.log(`Todo Added : ${todo}`);
    const params = new HttpParams({
      fromObject: {
        title: todo
      }
    });

    this.http.post(`${BASE_URL}/add-task`, params).subscribe(res => this.getTasks());
  }

  removeToDo(id: string) {
    this.isLoading = true;
    console.log(`Todo Removed: ${id}`);

    this.http.get(`${BASE_URL}/remove-task/${id}`).subscribe(res => this.getTasks());
  }

  finishToDo(data) {
    this.isLoading = true;
    let id = data["id"];
    let isComplete = data["isComplete"];
    console.log(`Todo Finished: ${id}`);

    let val = isComplete ? false : true;
    console.log(String(val));
    this.http.post(`${BASE_URL}/update-task/${id}`, { status: val }).subscribe(res => {
      console.log(res);
      this.getTasks();
    });
  }
}
