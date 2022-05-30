import { CurrentDirAC, FilesAC, SET_CURRENT_DIR, SET_FILES } from '../types'

export const setFiles:FilesAC = ( files ) => ({
  type: SET_FILES,
  payload: files
})

export const setCurrentDir:CurrentDirAC = ( currentDir ) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir
})