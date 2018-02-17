import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase-service.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  emps: any[];

  constructor(private firebaseService: FirebaseService, private router: Router) {

  }
  ngOnInit() {
  this.firebaseService.getDataList().subscribe(items => { this.emps = items;
  });

}
delPeople(data){
  console.log(data);
  this.firebaseService.removeData(data.key)
}
editPeople(data) {
  console.log(data);
this.router.navigate([`/editPeople/${data.key}`]);
}
}
