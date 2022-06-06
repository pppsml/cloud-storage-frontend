import React from 'react'

import DirLogo from '../../../../assets/img/dir.svg'
import FileLogo from '../../../../assets/img/file.svg'
import { IFile } from '../../../../redux/types'

import './File.scss'

const File:React.FC<IFile> = React.memo((props) => {
  const {
    name,
    type,
    size,
    date,
    _id,
  } = props

  return (
    <div className='file'>
      <img 
        src={ type === 'dir' ? DirLogo : FileLogo } 
        alt={ type === 'dir' ? 'DirLogo' : 'FileLogo' } 
        className="file__icon" 
      />
      <div className="file__name">{name}</div>
      <div className="file__date">{date.slice(0, 10)}</div>
      <div className="file__size">{size}</div>
    </div>
  )
})

export default File