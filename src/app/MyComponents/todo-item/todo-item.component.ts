import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoInput: Todo;
  @Output() emitterDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.emitterDelete.emit(this.todoInput);
    console.log('Click is triggerd');
  }
}
