import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditTodoPage } from '../edit-todo/edit-todo';
import { DataService } from '../../providers/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataService:DataService) {
    
  }

  ionViewDidLoad(){
    this.dataService.get();
  }

  addTodo(){
    console.log('Adding todo....');
    this.navCtrl.push(EditTodoPage);
  }

  editTodo(todo){
    console.log('Editing todo....');
    this.navCtrl.push(EditTodoPage, {todo:todo});
  }

}
