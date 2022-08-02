// import { User } from './../models/user.model';
import { createAction, props } from "@ngrx/store"
import { User } from "src/app/models/user.model"
import { USER_ADD, USER_DELETE, USER_DETAIL, USER_EDIT, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "./reactive-form.type"

export const userListRequestAction = createAction(
    USER_LIST_REQUEST
)

export const userListSuccessAction = createAction(
    USER_LIST_SUCCESS,
    props<{users : User}>()
)

export const userListErrorAction = createAction(
    USER_LIST_ERROR
)

export const UserDeleteAction = createAction(
    USER_DELETE,
    props<{ id : number }>()
  );

  export const UserAddAction = createAction(
    USER_ADD,
    props<{ user : User }>()
  );

  export const UserEditAction = createAction(
    USER_EDIT,
    props<{ user : User }>()
  );