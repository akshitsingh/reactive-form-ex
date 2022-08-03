import { userListErrorAction, userListRequestAction, userListSuccessAction } from './reactive-form.action';
import { ApiService } from './../../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions,createEffect, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

  
 
@Injectable()
export class ReactiveFormEffects {


    constructor(private actions$: Actions,private api : ApiService) {}

    loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userListRequestAction),
      switchMap(() => this.api.getAllUsers().pipe(
        map(users => userListSuccessAction({users})),
        catchError(() => of(userListErrorAction()))
      ))
    )
  );
}