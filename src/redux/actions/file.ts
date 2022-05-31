import axios from 'axios'
import { CurrentDir, CurrentDirAC, FilesAC, MyThunkAction, SET_CURRENT_DIR, SET_FILES } from '../types'

export const setFiles:FilesAC = ( files ) => ({
  type: SET_FILES,
  payload: files
})

export const setCurrentDir:CurrentDirAC = ( currentDir ) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir
})

export const getFiles = (dirId: CurrentDir):MyThunkAction => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:5001/api/files${ dirId ? '?parent' + dirId : '' }`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      console.log(response.data)
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}