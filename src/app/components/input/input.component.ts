import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  inputText: string = "";

  @Output() onToDoAdded: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addNote() {
    this.onToDoAdded.emit(this.inputText);
  }

  ngOnInit() {}
}
