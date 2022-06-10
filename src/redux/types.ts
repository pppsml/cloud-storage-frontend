import { ThunkAction } from "redux-thunk"

// *state

// FILE
export interface IFile {
	name: string,
	type: string,
	accessLink?: string,
	size: number,
  date: string,
	path: string,
	user: string,
	parent: string,
	children: string[],
  _id: string,
}
export type Files = IFile[]
export type CurrentDir = string | null

export interface IFileState {
  files: Files,
  currentDir: CurrentDir,
  dirStack: CurrentDir[],
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
export const ADD_FILE = 'ADD_FILE'
export const PUSH_TO_STACK = 'PUSH_TO_STACK'
export const DELETE_FILE = 'DELETE_FILE'

export type FilesAction = _MyAction<typeof SET_FILES, Files>
export type CurrentDirAction = _MyAction<typeof SET_CURRENT_DIR, CurrentDir>
export type AddFileAction = _MyAction<typeof ADD_FILE, IFile>
export type PushToStackAction = _MyAction<typeof PUSH_TO_STACK, CurrentDir>
export type DeleteFileAction = _MyAction<typeof DELETE_FILE, string>



export type AppActions = 
  // USER
  UserAction
  | LogoutAction
  //FILE
  | FilesAction
  | CurrentDirAction
  | AddFileAction
  | PushToStackAction
  | DeleteFileAction

export type MyThunkAction = ThunkAction<Promise<void>, IAppState, unknown, AppActions>


// *action creators

// USER
export type UserAC = (data:IUserState) => UserAction

//FILE
export type FilesAC = (files:Files) => FilesAction
export type CurrentDirAC = (currentDir:CurrentDir) => CurrentDirAction
export type AddFileAC = (file: IFile) => AddFileAction
export type PushToStateAC = (dir: CurrentDir) => PushToStackAction
export type DeleteFileAC = (id: string) => DeleteFileAction