import { SetUserAction, SET_USER } from "../types";

export const setUser = (data:any):SetUserAction => ({
  type: SET_USER,
  payload: data
})