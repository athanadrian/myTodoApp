import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data-service';

/*
  Generated class for the EditTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html'
})
export class EditTodoPage {

  todo: any;
  title: any;
  description: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, private dataService:DataService) {
    this.todo = {
      title: '',
      description: ''
    }
  }

  ionViewDidLoad() {
    let todo = this.navParams.get('todo');

    //check if it is a todo for sure!
    if (typeof (todo) !== "undefined") {
      //u can do like that
      this.todo = todo;
      //or do like this
      //this.todo.title = todo.title;
      //this.todo.description = todo.description;
    }    
  }

  save() {
    console.log('saving todo.....');
    this.dataService.save(this.todo);
    this.navCtrl.pop();
  }
}
