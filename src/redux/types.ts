// actions
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'



interface _MyAction<T, P> {
  type: T,
  payload?: P,
}

export type UserState = {
  currentUser: Object | null,
  isAuth: boolean,
}

export type SetUserAction = _MyAction<typeof SET_USER, UserState>
export type SetLogout = _MyAction<typeof LOGOUT, null | undefined>

export type AppActions = SetUserAction | SetLogout

export type AppState = {
  user: UserState,
}