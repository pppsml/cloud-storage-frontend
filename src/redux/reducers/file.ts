import { AppActions, IFileState, SET_CURRENT_DIR, SET_FILES } from "../types"

const initState:IFileState = {
  files: null,
  currentDir: null,
}

const fileReducer = (state = initState, action:AppActions):IFileState => {
  switch (action.type) {
    case SET_FILES: 
      return {
        ...state,
        files: action.payload,
      }

    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: action.payload,
      }

    default :
      return state
  }
}

export default fileReducer