import React from 'react'
import useTypedSelector from '../../../hooks/useTypedSelector'
import File from './File'

import './FileList.scss'

type Props = {}

const FileList:React.FC<Props> = (props) => {
  const files = useTypedSelector(({file}) => file.files)

  return (
    <div className='filelist'>
      <div className="filelist__header">
        <div className="filelist__name">Название</div>
        <div className="filelist__date">Дата</div>
        <div className="filelist__size">Размер</div>
      </div>
      {
        files 
        && files.map(file => <File key={file._id} {...file} />)
      }
    </div>
  )
}

export default FileList