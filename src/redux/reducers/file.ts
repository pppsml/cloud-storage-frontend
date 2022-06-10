import { ADD_FILE, PUSH_TO_STACK, SET_CURRENT_DIR, SET_FILES, DELETE_FILE, AppActions, IFileState } from "../types"

const initState:IFileState = {
  files: [],
  currentDir: null,
  dirStack: [],
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

    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload]
      }

    case PUSH_TO_STACK:
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload]
      }

    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter(file => file._id !== action.payload)]
      }

    default :
      return state
  }
}

export default fileReducer