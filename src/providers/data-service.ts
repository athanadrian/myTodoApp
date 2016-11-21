import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/Storage';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

  todos: any = [];

  constructor(public http: Http, private storage: Storage) {

  }

  get() {
    //promise is async so we have to check when data loaded
    return new Promise(resolve => {
      //check if data loaded
      if (this.todos.length > 0) {
        resolve(this.todos);
      } else {
        this.storage.get('todoData')
          .then((todos) => {
            if (todos && typeof (todos) !== 'undefined') {
              this.todos = todos;
            }
            resolve(this.todos);
          })
      }

    });
  }

  save(todo) {
    //get the index of the todo to check if it is a new one
    let index = this.todos.indexOf(todo);
    //if new (-1)
    if (index === -1) {
      //put it in todos array
      this.todos.push(todo);
      //if index exists
    } else {
      //replace the data of todo with this index
      this.todos[index] = todo;
    }
    //save it to storage
    this.storage.set('todoData', this.todos);
  }


}
