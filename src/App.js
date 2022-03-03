import React from 'react';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './pages/pagina-de-inicio';
import CicloBasico from './pages/ciclobasico';
import CicloEsoterico from './pages/cicloesoterico';
import CicloDiversificado from './pages/ciclodiversificado';
import CicloMetafisicaCristiana from './pages/ciclometafisica-cristiana';
import CicloBasicoLibros from './components/Ciclobasico-libros';
import CicloDiversificadoLibros from './components/Ciclodiversificado-libros';
import CicloEsotericoLibros from './components/Cicloesoterico-libros';
import CicloMetafisicaCristianaLibros from './components/Ciclometafisica-cristiana-libros';


function App() {
  return (
    <>

      <Menu />


      <Routes>

        <Route exact path="/" element={<Welcomepage />} />

        {/*ciclobasico page*/}

        <Route exact path="/ciclobasico" element={<CicloBasico />} />

        <Route exact path="/ciclobasico-libros" element={<CicloBasicoLibros />} />

        {/*------------------*/}


        {/*cicloesoterico page*/}

        <Route exact path="/cicloesoterico" element={<CicloEsoterico />} />

        <Route exact path="/cicloesoterico-libros" element={<CicloEsotericoLibros />} />

        {/*------------------*/}

        {/*ciclodiversificado page*/}

        <Route exact path="/ciclodiversificado" element={<CicloDiversificado />} />

        <Route exact path="/ciclodiversificado-libros" element={<CicloDiversificadoLibros />} />

        {/*------------------*/}

        {/*ciclodiversificado page*/}

        <Route exact path="/ciclometafisica-cristiana" element={<CicloMetafisicaCristiana />} />

        <Route exact path="/ciclometafisica-cristiana-libros" element={<CicloMetafisicaCristianaLibros />} />

        {/*------------------*/}

      </Routes>

    </>
  );
}


export default App;
