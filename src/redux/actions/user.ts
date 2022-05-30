import { LOGOUT, LogoutAction, SET_USER, UserAC } from "../types";

export const setUser:UserAC = (data) => ({
  type: SET_USER,
  payload: data
})

export const setLogout:LogoutAction = {
  type: LOGOUT,
  payload: null,
}