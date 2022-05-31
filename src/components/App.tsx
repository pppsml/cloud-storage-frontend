import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss'
import { Navbar, Registration, Login, Disk } from '.'
import { auth } from '../redux/actions/user';
import useTypedSelector from '../hooks/useTypedSelector';
import useTypedDispatch from '../hooks/useTypedDispatch';

type Props = {

}

const App:React.FC<Props> = () => {
  const isAuth = useTypedSelector(({user}) => user.isAuth)
  const dispatch = useTypedDispatch()
  
  React.useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        {
          !isAuth 
          ? <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>

          : <Routes>
            <Route path='/' element={<Disk />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
