import { UserState, AppActions, SET_USER } from "../types"

const initState:UserState = {
  currentUser: null,
  isAuth: false,
}

const userReducer = (state:UserState = initState, action:AppActions) => {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        
      }
    default :
      return state
  }
}

export default userReducer