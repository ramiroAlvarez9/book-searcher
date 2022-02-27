import React from 'react';
import { Icon } from '@iconify/react';
import WelcomePageMobile from '../componentes/componentes - mobile/pagina-de-inicio-mobile'
import WelcomePageDesktop from '../componentes/pagina-de-inicio-escritorio';

const Welcomepage = () => {
    return (
        <>

            <WelcomePageMobile />

            <WelcomePageDesktop />


        </>



    );
}

export default Welcomepage;