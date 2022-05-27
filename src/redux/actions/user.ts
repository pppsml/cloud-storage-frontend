import { LOGOUT, SetLogout, SetUserAction, SET_USER, UserState } from "../types";

export const setUser = (data:UserState):SetUserAction => ({
  type: SET_USER,
  payload: data
})

export const setLogout:SetLogout = {
  type: LOGOUT,
}