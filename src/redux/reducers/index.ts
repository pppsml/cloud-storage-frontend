import { combineReducers } from 'redux'
import fileReducer from './file'
import userReducer from './user'

const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
})

export default rootReducer