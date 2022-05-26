import React, { MouseEventHandler } from 'react'

import './Button.scss';

type Props = {
  type?: 'button' | 'reset' | 'submit',
  children?: React.ReactNode | React.ReactNode[],
  className?: string,
  outlined?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

const Button:React.FC<Props> = React.memo((props) => {
  const {
    type = 'button',
    children,
    className = '',
    outlined,

    onClick,
  } = props

  return (
    <button 
      type={type} 
      className={`button ${className} ${outlined ? 'outlined' : ''}`} 
      onClick={onClick}
    >
      {children}
    </button>
  )
})

export default Button