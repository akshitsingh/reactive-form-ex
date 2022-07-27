import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _dataSource: BehaviorSubject<any> = new BehaviorSubject({});
  usersData:Observable<any> = this._dataSource.asObservable();


  constructor() { }

  /**set profile data */
  setUserProfileData(user : any) {
     this._dataSource.next(user)
}
}
