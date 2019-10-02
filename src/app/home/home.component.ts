import { Component, OnInit } from "@angular/core";
import todoItem from "../constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  list: todoItem[] = [{ title: "Buy Milk" }, { title: "Buy Bread" }, { title: "Buy Bread" }];

  constructor() {}

  ngOnInit() {}
}
