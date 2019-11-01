import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;
  @Input() isComplete: boolean;

  @Output() onToDoRemoved: EventEmitter<any> = new EventEmitter();
  @Output() onToDoFinished: EventEmitter<any> = new EventEmitter();

  constructor() {}

  toDoRemoved(id: string) {
    this.onToDoRemoved.emit(id);
  }

  updateTodo(id: string, isComplete: boolean) {
    console.log(`${isComplete}`);
    this.onToDoFinished.emit({ id: id, isComplete: isComplete });
  }

  ngOnInit() {}
}
