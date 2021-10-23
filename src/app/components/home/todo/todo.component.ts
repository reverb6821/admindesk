import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title = 'todo';
  filter: 'all' | 'active' | 'done' = 'all';

  constructor() { }

  ngOnInit(): void {
    console.log("init");
  }

  allItems = [
    { description: 'Meet with George at 4.30 PM', done: true },
    { description: 'Organize Shipping at 5 PM', done: false },
    { description: 'Check orders at 4 PM', done: false },
    { description: 'Destroy the Death Star', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  //done
  //when click change from false to true and then add this class "w-full line-through text-green"

  //remove
  //remove this item
}
