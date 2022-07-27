import { Subscription } from 'rxjs';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

/** for Show the users profile data */
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit,OnDestroy {
  usersData : any ;
  userSubscription : Subscription;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData():void{
   this.userSubscription = this.api.usersData.subscribe(userData=>{
      this.usersData = userData
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
