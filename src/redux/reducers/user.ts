import { action, userState } from "../types"

const initState:userState = {
  currentUser: null,
  isAuth: false,
}

const userReducer = (state:userState = initState, action:action) => {
  switch (action.type) {
    default :
      return state
  }
}

export default userReducer