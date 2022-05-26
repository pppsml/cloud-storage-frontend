// action vars
export const SET_USER = 'SET_USER'



interface MyAction<T, P> {
  type: T,
  payload?: P,
}

export type UserState = {
  currentUser: Object | null,
  isAuth: boolean,
}

export type SetUserAction = MyAction<typeof SET_USER, UserState>

export type AppActions = SetUserAction

export type AppState = {
  user: UserState,
}