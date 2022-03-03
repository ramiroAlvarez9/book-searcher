import React from 'react';
import { Link } from 'react-router-dom';



const CicloDiversificado = () => {
    return (
        <>
            <section className="section">

                <h1 className="section__title">CICLO DIVERSIFICADO</h1>
                <p className="section__paragraph"><i>Nulla ut efficitur ex. Etiam non hendrerit eros. Vivamus in euismod mi. Morbi posuere dictum dolor quis varius. Proin non interdum metus. <br /> Nulla eget mattis lectus. Phasellus eget mattis sapien, eu consequat nunc. <br />Donec et gravida urna, sit amet volutpat lacus. Curabitur mauris erat, condimentum ac efficitur scelerisque, rutrum a leo. Donec tincidunt nibh at enim volutpat pretium. Duis viverra dictum mauris eu cursus “eu consequat nunc. Donec et gravida urna, sit amet volutpat lacus. Curabitur mauris erat, condimentum ac efficitur scelerisque, rutrum a”.</i></p>
                <p className="section__paragraph" id="author">Autor - Titulo del libro</p>
                <Link to="/ciclodiversificado-libros" className='section__link'>Ver todos los libros del ciclo</Link>

            </section>

        </>

    );
}

export default CicloDiversificado;