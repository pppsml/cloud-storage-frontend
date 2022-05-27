import React from 'react'

import './Input.scss'

type Props = {
  value?: string,
  className?: string,

  type?: React.HTMLInputTypeAttribute,
  placeholder?: string,
  name?: string,
  autoComplete?: 'on' | 'off',

  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input:React.FC<Props> = React.memo((props) => {
  const {
    value,
    className = '',

    type = 'text',
    placeholder,
    name = '',
    autoComplete = 'on',

    onChange,
  } = props

  return (
    <input 
      value={value} 
      className={`input ${className}`} 

      type={type} 
      placeholder={placeholder ?? ''} 
      name={name}
      autoComplete={autoComplete}

      onChange={onChange} 
    />
  )
})

export default Input