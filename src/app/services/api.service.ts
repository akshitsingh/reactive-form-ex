import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _dataSource: BehaviorSubject<any> = new BehaviorSubject({});
  usersData:Observable<any> = this._dataSource.asObservable();


  constructor(private http: HttpClient) { }

  /**set profile data */
  setUserProfileData(user : any) {
     this._dataSource.next(user)
}

 /**Get all users */
  getAllUsers():Observable<User>{
    return this.http.get<User>('http://localhost:3000/users')
  }

}
