import React from 'react'

import DirLogo from '../../../../assets/img/dir.svg'
import FileLogo from '../../../../assets/img/file.svg'
import useTypedDispatch from '../../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../../hooks/useTypedSelector'
import { deleteFile, downloadFile, pushToStack, setCurrentDir } from '../../../../redux/actions/file'
import { IFile } from '../../../../redux/types'

import './File.scss'

type Props = {
  file: IFile
}

const File:React.FC<Props> = React.memo((props) => {
  const {
    file
  } = props

  const {
    name,
    type,
    size,
    date,
    _id,
  } = file

  const dispatch = useTypedDispatch()
  const currentDir = useTypedSelector(({file}) => file.currentDir)

  const openDirHandler = () => {
    dispatch(pushToStack(currentDir))
    dispatch(setCurrentDir(_id))
  }

  const downloadClickHandler:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    downloadFile(file)
  }

  const deleteFileClickHandler:React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    dispatch(deleteFile(file))
  }

  return (
    <div className='file' onClick={type === 'dir' ? openDirHandler : undefined}>
      <img 
        src={ type === 'dir' ? DirLogo : FileLogo } 
        alt={ type === 'dir' ? 'DirLogo' : 'FileLogo' } 
        className="file__icon" 
      />
      <div className="file__name">{name}</div>
      <div className="file__date">{date.slice(0, 10)}</div>
      <div className="file__size">{size}</div>
      {type !== 'dir' && <button className="file__btn file__download" onClick={downloadClickHandler}>download</button>}
      <button className="file__btn file__delete" onClick={deleteFileClickHandler}>delete</button>
    </div>
  )
})

export default File