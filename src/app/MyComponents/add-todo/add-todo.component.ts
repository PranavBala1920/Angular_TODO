import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todoModel';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() emitterAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      serialNumber: 0,
      title: this.title,
      description: this.desc,
      active: true,
    };
    this.emitterAdd.emit(todo);
  }
}
