import axios from 'axios'
import { LOGOUT, LogoutAction, SET_USER, UserAC, MyThunkAction } from "../types";

export const setUser:UserAC = (data) => ({
  type: SET_USER,
  payload: data
})

export const setLogout:LogoutAction = {
  type: LOGOUT,
  payload: null,
}


export const registration = async ( email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:5001/api/auth/registration', {
      email, password
    })
    alert(response.data.message)
  } catch (error:any) {
    alert(error.response.data.message)
  }
}

export const login = ( email: string, password: string):MyThunkAction => {
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email, password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error:any) {
      alert(error.response.data.message)
    }
  }
}

export const auth = ():MyThunkAction => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:5001/api/auth/auth', {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}  
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error:any) {
      console.log(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
}