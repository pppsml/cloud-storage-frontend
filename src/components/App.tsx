import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss'
import { Navbar, Registration, Login } from '.'

type Props = {

}

const App:React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
