import React, { MouseEventHandler } from 'react'

import { registration } from '../../api/user';
import { Input, Button } from '..';

import './index.scss';

type Props = {}

const Registration:React.FC<Props> = (props) => {
  const [ email, setEmail ] = React.useState<string>('')
  const [ password, setPassword ] = React.useState<string>('')

  const emailChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  }

  const registrationClickHandler:MouseEventHandler<HTMLButtonElement> = () => {
    if (!email && !password) return

    registration(email, password)
  }

  return (
    <div className='authorization__wrapper'>
      <div className='authorization'>
        <p className='authorization__header'>Регистрация</p>
        <Input value={email} onChange={emailChangeHandler} placeholder='Email' />
        <Input value={password} onChange={passwordChangeHandler} type='password' placeholder='Password' />
        <Button onClick={registrationClickHandler}>Зарегистрироваться</Button>
      </div>
    </div>
  )
}

export default Registration