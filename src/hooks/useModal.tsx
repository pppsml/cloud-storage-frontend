import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import './Modal.scss'

const ModalRootEl = document.getElementById('modal')

type Props = {
  children?: React.ReactNode | React.ReactNode[],
  onClose: () => void,
}

const Modal:React.FC<Props> = React.memo((props) => {
  const {
    onClose,
    children
  } = props

  const [ container ] = useState(document.createElement('div'))

  useEffect(() => {
    ModalRootEl?.appendChild(container)
    
    return () => {
      ModalRootEl?.removeChild(container)
    }
  }, [])

  return createPortal(
    <div className="modal__wrapper">
      <div className="modal__wrapper--closer" onClick={onClose}></div>
      <div className="modal">
        <span className="modal__closebtn" onClick={onClose}>X</span>
        {children}
      </div>
    </div>,
    container,
  )
})


interface IReturnType {
  Modal: React.FC<Props>,
  isOpened: boolean,
  close: () => void,
  open: () => void,
}

const useModal = ():IReturnType => {
  const [ isOpened, setIsOpened ] = useState<boolean>(false)

  const close = ():void => {
    setIsOpened(false)
  }

  const open = ():void => {
    setIsOpened(true)
  }

  return {
    Modal,
    isOpened,
    close,
    open,
  }
}

export default useModal