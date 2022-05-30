import { IUserState, AppActions, SET_USER, LOGOUT } from "../types"

const initState:IUserState = {
  currentUser: null,
  isAuth: false,
}

const userReducer = (state = initState, action:AppActions):IUserState => {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        currentUser: {
          ...action.payload
        },
        isAuth: true,
      }
    case LOGOUT: 
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: null,
        isAuth: false,
      }

    default :
      return state
  }
}

export default userReducer