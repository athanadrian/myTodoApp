import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyTodoApp } from './app.component';
import { HomePage, EditTodoPage } from '../pages/pages';

import { Storage } from '@ionic/Storage';

import { DataService } from '../providers/data-service';

@NgModule({
  declarations: [
    MyTodoApp,
    HomePage,EditTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyTodoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyTodoApp,
    HomePage,EditTodoPage
  ],
  providers: [DataService, Storage]
})
export class AppModule {}
