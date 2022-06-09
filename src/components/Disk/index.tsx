import React, { useEffect, useRef, useState } from 'react'

import useTypedDispatch from '../../hooks/useTypedDispatch'
import useTypedSelector from '../../hooks/useTypedSelector'
import useModal from '../../hooks/useModal'

import { createDir, getFiles, setCurrentDir, uploadFile } from '../../redux/actions/file'

import { Button, Input } from '..'
import FileList from './FileList'

import './Disk.scss';

type Props = {}

const Disk:React.FC<Props> = (props) => {
  const dispatch = useTypedDispatch()
  const currentDir = useTypedSelector(({file}) => file.currentDir)
  const dirStack = useTypedSelector(({file}) => file.dirStack)

  const [ isDragEnter, setDragEnter ] = useState<boolean>(false)
  const [ dirName, setDirName ] = useState<string>('')
  const { Modal, isOpened, open, close } = useModal()



  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [ currentDir ])



  const onCloseHandler = () => {
    close()
    setDirName('')
  }

  const createDirSubmitHandler:React.FormEventHandler<HTMLFormElement> = () => {
    dispatch(createDir(currentDir, dirName))
    onCloseHandler()
  }

  const dirNameChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDirName(e.target.value)
  }

  const backDirClickHandler:React.MouseEventHandler<HTMLButtonElement> = () => {
    const backDirId = dirStack.pop()
    if (backDirId !== undefined) dispatch(setCurrentDir(backDirId))
  }

  const fileUploadHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = Array.from(event.target.files!)
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }


// drag event handlers
  const dragEnterHandler:React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  const dragLeaveHandler:React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }

  const dropHandler:React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const files = Array.from(event.dataTransfer.files)
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
    setDragEnter(false)
  }


  return (
    !isDragEnter
    ?
    <div className="_container">
      <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
        <div className="disk__btns">
          <Button className="disk__back" onClick={backDirClickHandler}>Назад</Button>
          <Button className="disk__create" onClick={open}>Создать папку</Button>
          <div className="disk__upload">
            <label className='disk__upload--label'>
              Загрузить файлы
              <input onChange={fileUploadHandler} className='disk__upload--input' type='file' multiple />
            </label>
          </div>
        </div>
          <FileList />
          {
            isOpened
            ? <Modal onClose={onCloseHandler}>
              <form onSubmit={createDirSubmitHandler}>
                <h2>Создать новую папку</h2>
                <Input value={dirName} onChange={dirNameChangeHandler} placeholder='Введите название папки' />
                <Button type='submit' >Создать папку</Button>
              </form>
            </Modal>
            : null
          }
      </div>
    </div>
    :
    <div className="_container">
      <div className='drop-area' onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
        Перетащите файлы сюда
      </div>
    </div>
  )
}

export default Disk