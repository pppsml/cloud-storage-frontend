import React, { FormEventHandler, useCallback } from 'react'

import { login } from '../../redux/actions/user';
import { Input, Button } from '..';

import './index.scss';

import useTypedDispatch from '../../hooks/useTypedDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';

type Props = {}
const Login:React.FC<Props> = (props) => {
  const isAuth = useTypedSelector(({user}) => user.isAuth)
  const dispatch = useTypedDispatch()

  const [ email, setEmail ] = React.useState<string>('')
  const [ password, setPassword ] = React.useState<string>('')

  const emailChangeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setEmail(e.target.value)
  }, [])

  const passwordChangeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setPassword(e.target.value)
  }, [])

  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    if (!email && !password) return

    dispatch(login(email, password))
  }

  return <>    
    { isAuth
      ? <Navigate to='/' />
      : <div className='authorization__wrapper'>
        <form onSubmit={handleSubmit} className='authorization'>
          <p className='authorization__header'>Авторизация</p>
          <Input name='email' value={email} onChange={emailChangeHandler} placeholder='Email' />
          <Input name='password' value={password} onChange={passwordChangeHandler} type='password' placeholder='Password' />
          <Button type='submit'>Войти</Button>
        </form>
      </div>
    }
  </>
}

export default Login