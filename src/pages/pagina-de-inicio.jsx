import React from 'react';
import WelcomePageMobile from '../components/Pagina-de-inicio-mobile'
import WelcomePageDesktop from '../components/Pagina-de-inicio-escritorio';

const WelcomePage = () => {
    return (
        <>
            <WelcomePageMobile />
            <WelcomePageDesktop />
        </>

    );
}

export default WelcomePage;