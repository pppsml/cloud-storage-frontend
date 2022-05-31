// *state

import { ThunkAction } from "redux-thunk"

// FILE
export type Files = any[] | null
export type CurrentDir = string | null

export interface IFileState {
  files: Files,
  currentDir: CurrentDir
}

// USER
export interface IUserState {
  currentUser: Object | null,
  isAuth: boolean,
}




export interface IAppState {
  user: IUserState,
  file: IFileState,
}



// *actions
interface _MyAction<T, P> {
  type: T,
  payload: P,
}

// USER
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'

export type UserAction = _MyAction<typeof SET_USER, IUserState>
export type LogoutAction = _MyAction<typeof LOGOUT, null>

// FILE
export const SET_FILES = 'SET_FILES'
export const SET_CURRENT_DIR = 'SET_CURRENT_DIR'

export type FilesAction = _MyAction<typeof SET_FILES, Files>
export type CurrentDirAction = _MyAction<typeof SET_CURRENT_DIR, CurrentDir>



export type AppActions = 
  UserAction
  | LogoutAction
  | FilesAction
  | CurrentDirAction

export type MyThunkAction = ThunkAction<Promise<void>, IAppState, unknown, AppActions>


// *action creators

// USER
export type UserAC = (data:IUserState) => UserAction

//FILE
export type FilesAC = (files:Files) => FilesAction
export type CurrentDirAC = (currentDir:CurrentDir) => CurrentDirAction