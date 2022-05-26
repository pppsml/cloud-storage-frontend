import React from 'react'

import './Input.scss'

type Props = {
  type?: React.HTMLInputTypeAttribute,
  placeholder?: string,
  className?: string,
  value?: string,

  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input:React.FC<Props> = React.memo((props) => {
  const {
    type = 'text',
    placeholder,
    className = '',
    value,
    onChange,
  } = props

  return (
    <input 
      value={value} 
      className={`input ${className}`} 
      type={type} 
      placeholder={placeholder ?? ''} 
      onChange={onChange} 
    />
  )
})

export default Input