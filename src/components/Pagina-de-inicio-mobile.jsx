import React from 'react';
import '../assets/styles/global.scss';
import { Link } from 'react-router-dom'

const WelcomePageMobile = () => {
    return (
        <>
            <section id="section__mobile">
                <h1 className="title__mobile">BIENVENIDO</h1>
                <p className="title__mobile--p">al buscador de libros de la enseñanza espiritual metafísica</p>
                <Link to='/libros' className='title__mobile--button'>
                    Empieza aquí
                </Link>
            </section>
        </>


    );
}

export default WelcomePageMobile;