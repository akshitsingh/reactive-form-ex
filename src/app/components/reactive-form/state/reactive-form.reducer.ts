import { User } from './../../../models/user.model';
import { userListRequestAction, userListSuccessAction, userListErrorAction, UserAddAction, UserEditAction, UserDeleteAction } from './reactive-form.action';
import { Action, createReducer,on } from "@ngrx/store";

export interface UserReducerState{
    users : User[],
    loading : boolean,
    loaded : boolean,
    error : boolean
}

const initialState:UserReducerState = {
   users : [
    {
    id : 1,
    gender: 'Male',
    address : 'Saharanpur',
    dob: '1-10-1996',
    grade: '8th Grade',
    roles : [],
    profile : { name : 'akshit',email : 'akshit48@gmail.com',password : '12345'}
   }
],
   loading : false,
   loaded : false,
   error : false
}

export const _userReducer = createReducer(
    initialState,
    on(userListRequestAction,(state)=>({...state,loading : true})),
    on(userListSuccessAction,(state,{users})=>{
        const data = state.users.concat(users);
        return {...state,users : data, loading : false,loaded : true,error:false}
    }),
    on(userListErrorAction,(state)=>{
        return {...state,error:true,loading:false}
    }),
    on(UserAddAction,(state,{user})=>{
        const data = state.users.concat(user);
        return {...state,users:data,error:false}
    }),
    on(UserEditAction,(state,{user})=>{
        const updatedUser = state.users.map(
                        elem => user.id === elem.id ? user : elem);
                        return {
                          ...state,
                          users: updatedUser
                         };
    }),
    on(UserDeleteAction,(state,{id})=>{
        console.log("userdleteion",id)
        const users = state.users.filter(item=>item.id!= id)
                return {
                    ...state,
                    users
                }
    })
    )


export function userReducer(state:any,action:Action){
    return _userReducer(state,action)
}