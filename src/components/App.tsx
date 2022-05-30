import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss'
import { Navbar, Registration, Login, Disk } from '.'
import { auth } from '../api/user';
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
          </Routes>

          : <Routes>
            <Route path='/' element={<Disk />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
