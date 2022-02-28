import React from 'react';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './pages/pagina-de-inicio';
import CicloBasico from './pages/ciclobasico'
import CicloEsoterico from './pages/cicloesoterico'
import CicloDiversificado from './pages/ciclodiversificado'
import CicloMetafisicaCristiana from './pages/ciclometafisica-cristiana'
import CicloBasicoLibros from './components/Ciclobasico-libros';


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



        <Route exact path="/cicloesoterico" element={<CicloEsoterico />} />

        <Route exact path="/ciclodiversificado" element={<CicloDiversificado />} />

        <Route exact path="/ciclometafisica-cristiana" element={<CicloMetafisicaCristiana />} />


      </Routes>

    </>
  );
}


export default App;
