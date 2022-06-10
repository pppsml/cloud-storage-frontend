import axios from 'axios'
import { AddFileAC, ADD_FILE, CurrentDir, CurrentDirAC, DeleteFileAC, DELETE_FILE, FilesAC, IFile, MyThunkAction, PushToStateAC, PUSH_TO_STACK, SET_CURRENT_DIR, SET_FILES } from '../types'

export const setFiles:FilesAC = ( files ) => ({
  type: SET_FILES,
  payload: files,
})

export const setCurrentDir:CurrentDirAC = ( currentDir ) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir,
})

export const addFile:AddFileAC = (file) => ({
  type: ADD_FILE,
  payload: file,
})

export const pushToStack:PushToStateAC = (dir) => ({
  type: PUSH_TO_STACK,
  payload: dir,
})

export const deleteFileAC:DeleteFileAC = (id) => ({
  type: DELETE_FILE,
  payload: id,
})


const instanseAxios = axios.create({
  baseURL: 'http://localhost:5001/api/files',
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
})

export const getFiles = (dirId: CurrentDir):MyThunkAction => {
  return async dispatch => {
    try {
      const response = await instanseAxios.get(`/${ dirId ? '?parent=' + dirId : '' }`)
      dispatch(setFiles(response.data))
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}


export const createDir = (dirId: CurrentDir, name:string):MyThunkAction => {
  return async dispatch => {
    try {
      const response = await instanseAxios.post('', 
      {
        name,
        parent: dirId,
        type: 'dir'
      })

      dispatch(addFile(response.data))
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}


export const uploadFile = (file: File, dirId: CurrentDir):MyThunkAction => {
  return async dispatch => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('fileName', file.name)

      if (dirId) {
        formData.append('parent', dirId)
      }

      const response = await instanseAxios.post('/upload',
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
          console.log('total', totalLength)

          if (totalLength) {
            let progress = Math.round((progressEvent.loaded * 100) / totalLength)
            console.log(progress)
          }
        }
      }
      )

      dispatch(addFile(response.data))
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}

export const downloadFile = async (file:IFile) => {
  const response = await instanseAxios(`/download?id=${file._id}`, {
    responseType: 'blob',
  })

  if (response.status === 200) {
    const blob = await response.data
    const downloadURL = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadURL
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}



export const deleteFile = (file: IFile):MyThunkAction => {
  return async dispatch => {
    try {
      const response = await instanseAxios.delete(`?id=${file._id}`)
      dispatch(deleteFileAC(file._id))

      alert(response.data.message)
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}