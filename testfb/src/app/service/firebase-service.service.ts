import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  dataList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
  this.dataList = db.list('DB');
}
getDataList(): Observable<any[]> {
return this.dataList.snapshotChanges().map(actions => {
return actions.map(action => ({ key: action.key, value: action.payload.val() }));
});
}
getDataByID(id):Observable<any[]> {
  return this.db.object('DB/' + id).snapshotChanges().map(res => {
  return res.payload.val();
});
}
removeData(id): void {
this.dataList.remove(id);
}
addData(data){
  return this.dataList.push(data);
}
editData(id, data) {
   return this.dataList.update(id, data);
 }

}
