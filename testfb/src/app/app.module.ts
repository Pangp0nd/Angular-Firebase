import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddPeopleComponent } from './add-people/add-people.component';
import { ShowComponent } from './show/show.component';
import {RouterModule, Routes} from '@angular/router';

import { FirebaseService } from './service/firebase-service.service';
const routes: Routes = [
    {path: 'addPeople', component: AddPeopleComponent},
    {path: 'editPeople/:id', component: AddPeopleComponent} ,
    {path: '', component: ShowComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    AddPeopleComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
