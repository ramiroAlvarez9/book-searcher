import React from 'react';
import './app.scss'
import Menu from './componentes/menu';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './pages/pagina-de-inicio';


import Ciclo1 from './pages/ciclobasico'
import Ciclo2 from './pages/ciclo2'
import Ciclo3 from './pages/ciclo3'
import Ciclo4 from './pages/ciclo4'

import CicloBasicoLibros from './componentes/ciclobasico-libros';


function App() {
  return (
    <>

      <Menu />


      <Routes>

        <Route exact path="/" element={<Welcomepage />} />

        {/*ciclobasico page*/}

        <Route exact path="/ciclobasico" element={<Ciclo1 />} />
        <Route exact path="/ciclobasico-libros" element={<CicloBasicoLibros />} />

        {/*------------------*/}



        <Route exact path="/ciclo2" element={<Ciclo2 />} />

        <Route exact path="/ciclo3" element={<Ciclo3 />} />

        <Route exact path="/ciclo4" element={<Ciclo4 />} />


      </Routes>

    </>
  );
}


export default App;
