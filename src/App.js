import React from 'react';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './pages/pagina-de-inicio';
import Libros from './components/Libros';


function App() {
  return (
    <>

      <Menu />

      <Routes>

        <Route exact path="/" element={<Welcomepage />} />

        {/*Libros component (page)*/}

        <Route exact path="/ciclobasico-libros" element={<Libros />} />

        {/*------------------*/}


      </Routes>

    </>
  );
}


export default App;
