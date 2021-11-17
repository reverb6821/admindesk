import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/todo/item';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  itemValue: string = '';
  list: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("init todo");
    this.list = [];
    this.itemValue = '';
  }

  // add
  addItem() {
    if (this.itemValue !== "") {
      const newItem: Item = {
        id: Date.now(),
        value: this.itemValue,
        isDone: false
      };
      // add newitem to the list
      this.list.push(newItem);
    }
    this.itemValue = "";
  }

  // remove
  deleteItem(id: number) {
    // filter the list
    this.list = this.list.filter(item => item.id !== id);
  }

  //done
  //when click change from false to true and then add this class "w-full line-through text-green"


}
