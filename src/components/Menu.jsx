import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import '../assets/styles/menu.scss';
import Img from "react-cool-img";
import Logo from '../assets/BL.png';

const Menu = () => {

    //this state determines the open or close menu by a number in a translate property.
    const [dynamicMenu, setDynamicMenu] = useState(-100)

    const openMenu = () => {
        setDynamicMenu(0)
    }
    const closeMenu = () => {
        setDynamicMenu(-100)
    }

    return (
        <>
            {/*mobile design*/}
            <header className='header'>
                <nav className="nav ">
                    {/*Open nav icon - display when the nav is closed*/}

                    <div className='nav__icon'>
                        <Icon icon="ant-design:menu-outlined" color="#17054f" width="56" height="50" onClick={openMenu} className="nav__icon--menuButton" />
                    </div>


                    {/*Display with the nav is open*/}
                    <div className="nav__unfolded" style={{

                        transform: `translate(${dynamicMenu}%)`,

                    }} >
                        <div className="nav__unfolded--icon">
                            <Icon icon="ant-design:close-square-filled" color="#0f0333" width="56" height="50" className="nav__div--icon" onClick={closeMenu} />
                        </div>
                        <div className="nav__unfolded--text--logo">
                            <Link to='/' className="nav__unfolded--text--logo--img">
                                <Img

                                    onClick={closeMenu}
                                    className="nav__unfolded--text--logo--img"
                                    src= {Logo}
                                    alt="Logo"
                                />
                            </Link>

                            <h2 className="nav__unfolded--text--logo--h2" >
                                Buscar por ciclo o catedra
                            </h2>
                        </div>

                        <Link to="/libros" className='nav__links' onClick={closeMenu}>LIBROS</Link>
                        
                    </div>


                </nav>
            </header >




            {/*desktop - tablet design*/}
            <header className="header">

                <nav className="nav__desktop">
                    <div className="header__desktop--logo">
                        <Link to='/'>
                            <Img
                                className="header__desktop--logo--image"
                                src= {Logo}
                                alt="REACT COOL IMG"
                            />
                        </Link>


                    </div>

                </nav>
            </header>

        </>
    );
}

export default Menu;




