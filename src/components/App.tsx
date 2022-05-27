import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss'
import { Navbar, Registration, Login } from '.'
import { useSelector } from 'react-redux';
import { AppState } from '../redux/types';

type Props = {

}

const App:React.FC<Props> = () => {
  const isAuth = useSelector<AppState>(({user}) => user.isAuth)

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        {
          !isAuth 
          && <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
