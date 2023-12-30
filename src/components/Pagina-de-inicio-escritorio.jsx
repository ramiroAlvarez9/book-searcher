import React from 'react';
import { Icon } from '@iconify/react';
import '../assets/styles/pagina-de-inicio.scss';
import {Link} from 'react-router-dom';

const PaginaDeInicioEscritorio = () => {
    return (
        <>
            <section id="section__desktop">
                <h1 className="title__desktop">BIENVENIDO</h1>
                <p className="title__desktop--p">Integer pretium, risus nec accumsan condimentum, leo dui scelerisque erat, vel facilisis urna tellus eget mi.</p>
                <Link to = '/libros'className='title__desktop--button'>
                    Empieza aquí
                </Link>

                <footer className='footer'>
                    <div className="footer__socialNetworks--container">
                        <Icon icon="akar-icons:instagram-fill" color="#6904a0" width="30" height="30" inline={true} className='footer__socialNetworks--container--icons' />
                        <Icon icon="ant-design:facebook-filled" color="#6904a0" width="32" height="32" inline={true} className='footer__socialNetworks--container--icons' />
                        <Icon icon="dashicons:youtube" color="#6904a0" width="35" height="32" inline={true} className='footer__socialNetworks--container--icons' />
                    </div>

                </footer>
            </section>





        </>
    );
}

export default PaginaDeInicioEscritorio;