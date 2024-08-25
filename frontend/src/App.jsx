import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
    <Navbar/>
    
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
