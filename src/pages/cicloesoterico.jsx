import React from 'react';
import {Link} from 'react-router-dom';



const CicloEsoterico = () => {
    return (
        <>
            <section className="section">

                <h1 className="section__title">CICLO ESOTERICO</h1>
                <p className="section__paragraph"><i>El “Ciclo Básico” de la Enseñanza Metafísica es el “Primero” no porque sea para principiantes, sino porque es primordial, para toda la vida; <br />no importa cuántos años se tenga en la Metafísica ni cuán instruido en ella se esté. <br />El incumplimiento de estos objetivos es causa de problemas, por eso no se deja de estudiarlos y los grupos de todos los Niveles deben repasarlos siempre. Conocer uno de estos temas no significa dominar su práctica. “No se persigue conocer la Enseñanza, sino practicarla”.</i></p>
                <p className="section__paragraph" id="author">Rubén Cedeño - Programa de estudios de la metafísica</p>
                <Link to="/ciclobasico-libros" className='section__link'>Ver todos los libros del ciclo</Link>


            </section>

        </>

    );
}

export default CicloEsoterico;