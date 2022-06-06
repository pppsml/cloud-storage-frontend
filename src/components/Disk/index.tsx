import React, { useEffect, useRef, useState } from 'react'

import useTypedDispatch from '../../hooks/useTypedDispatch'
import useTypedSelector from '../../hooks/useTypedSelector'
import useModal from '../../hooks/useModal'

import { createDir, getFiles } from '../../redux/actions/file'

import { Button, Input } from '..'
import FileList from './FileList'

import './Disk.scss';

type Props = {}

const Disk:React.FC<Props> = (props) => {
  const currentDir = useTypedSelector(({file}) => file.currentDir)
  const dispatch = useTypedDispatch()

  const [ dirName, setDirName ] = useState<string>('')
  const { Modal, isOpened, open, close } = useModal()

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [ currentDir ])

  const createDirHandler = () => {
    dispatch(createDir(currentDir, dirName))
    close()
    setDirName('')
  }

  const dirNameInputHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDirName(e.target.value)
  }

  return (
    <div className="_container">
      <div className="disk">
        <div className="disk__btns">
          <Button className="disk__back">Назад</Button>
          <Button className="disk__create" onClick={open}>Создать папку</Button>
        </div>
          <FileList />
          {
            isOpened
            ? <Modal onClose={close}>
              <form onSubmit={createDirHandler}>
                <h2>Создать новую папку</h2>
                <Input value={dirName} onChange={dirNameInputHandler} placeholder='Введите название папки' />
                <Button type='submit' >Создать папку</Button>
              </form>
            </Modal>
            : null
          }
      </div>
    </div>
  )
}

export default Disk