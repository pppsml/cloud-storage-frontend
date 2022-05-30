import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { setUser } from '../redux/actions/user'
import { AppActions, IAppState } from '../redux/types'

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

type MyThunkAction = ThunkAction<Promise<void>, IAppState, unknown, AppActions>

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
      alert(error.response.data.message)
      localStorage.removeItem('token')
    }
  }
}