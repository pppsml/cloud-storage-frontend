import React, { MouseEventHandler } from 'react'

import { login } from '../../api/user';
import { Input, Button } from '..';

import './index.scss';

import useTypedDispatch from '../../hooks/useTypedDispatch';

type Props = {}
const Login:React.FC<Props> = (props) => {
  const dispatch = useTypedDispatch()

  const [ email, setEmail ] = React.useState<string>('')
  const [ password, setPassword ] = React.useState<string>('')

  const emailChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  const loginClickHandler:MouseEventHandler<HTMLButtonElement> = () => {
    if (!email && !password) return

    dispatch(login(email, password))
  }

  return (
    <div className='authorization__wrapper'>
      <div className='authorization'>
        <p className='authorization__header'>Авторизация</p>
        <Input name='email' value={email} onChange={emailChangeHandler} placeholder='Email' />
        <Input name='password' value={password} onChange={passwordChangeHandler} type='password' placeholder='Password' />
        <Button onClick={loginClickHandler}>Войти</Button>
      </div>
    </div>
  )
}

export default Login