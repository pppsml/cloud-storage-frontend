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

const instanseAxios = axios.create({
  baseURL: 'http://localhost:5001/api/auth'
})

export const registration = async ( email: string, password: string) => {
  try {
    const response = await instanseAxios.post('/registration', {
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
      const response = await instanseAxios.post('/login', {
        email, password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error:any) {
      console.log(error.response.data.message)
      alert(error.response.data.message)
    }
  }
}

export const auth = ():MyThunkAction => {
  return async dispatch => {
    try {
      const response = await instanseAxios.get('/auth', {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}  
      })
      console.log(response.data)
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error:any) {
      console.log(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
}