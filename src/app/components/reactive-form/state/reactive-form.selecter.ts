import { UserReducerState } from './reactive-form.reducer';
import { AppState } from './../../../appstate';
import { createFeatureSelector, createSelector } from "@ngrx/store";
 

export const getUserState = createFeatureSelector<UserReducerState>('users');

export const getAllUsers = createSelector(getUserState,(state:UserReducerState)=>{
     return state.users;
})

export const getUserDetail = createSelector(getUserState,(state,props)=>{
    return state.users.find(element=> element.id==props.id)
})

export const getUserLoading = createSelector(getUserState,(state:UserReducerState)=>{
     return state.loading;
})

export const getUserLoaded = createSelector(getUserState,(state:UserReducerState)=>{
     return state.loaded;
})

export const getUserError = createSelector(getUserState,(state:UserReducerState)=>{
     return state.error;
})