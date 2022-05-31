import React, { useEffect } from 'react'
import useTypedDispatch from '../../hooks/useTypedDispatch'
import useTypedSelector from '../../hooks/useTypedSelector'
import { getFiles } from '../../redux/actions/file'

type Props = {}

const Disk:React.FC<Props> = (props) => {
  const currentDir = useTypedSelector(({file}) => file.currentDir)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [ currentDir ])

  return (
    <div>Disk</div>
  )
}

export default Disk