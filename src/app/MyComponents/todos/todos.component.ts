import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todoModel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoList: Todo[];

  constructor() {
    const localIteam = localStorage.getItem('todoList');
    if (localIteam == null) {
      this.todoList = [];
    } else {
      this.todoList = JSON.parse(localIteam);
    }
  }

  ngOnInit(): void {}

  TodoDelete(todo: Todo) {
    console.log(todo);
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  TodoAdd(todo: Todo) {
    console.log(todo);
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
