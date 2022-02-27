import React from 'react';
import './ciclobasico-libros.scss';
import VerMas from './ver-mas';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import Img from "react-cool-img";




const CicloBasicoLibros = () => {

    //show the book or hide
    const [dynamicShowingBook, setDynamicShowingBook] = useState('-110%')
    //fetch the books from the API
    const [booksData, setBooksData] = useState()
    //data for 'VER MAS'
    const [booksDataKey, setBooksDataKey] = useState(0)


    const showTheBooks = (e) => {
        setDynamicShowingBook('0%')
    }
    const dynamicHiddingBook = () => {
        setDynamicShowingBook('-110%')
    }





    const fetchTheBookApi = async () => {
        const api = await fetch('http://localhost:1337/api/libros');
        const books = await api.json();
        //setBooksData(books)
        setBooksData(books.data)
    }

    useEffect(() => {

        fetchTheBookApi();

    }, []);

    //console.log(booksData.attributes)

    return (

        <>
            <section id="basicCicleBooks">

                <input type="text" placeholder="Buscar por titulo" />

                <div className="section__buttons">

                    <button type="button">MOSTRAR SOLO DISPONIBLES</button>

                </div>

                <section className="section__gallery">

                    {
                        //if the data is not available
                        booksData == undefined ?
                            <>
                                <img src="https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif" alt="loading screen" />
                            </>

                            :

                            //when the data it's available
                            booksData.map((val, key) => {

                                return <>
                                    <div className='section__gallery--container'>

                                        <Img
                                            onClick={showTheBooks}
                                            className="section__gallery--container--img"
                                            src={val.attributes.imagen}
                                            alt="REACT COOL IMG"
                                        />

                                        <h3 className="section__gallery--container--title">{val.attributes.titulo}</h3>
                                        
                                        <Link to='' onClick = { () => setBooksDataKey(`${key}`) }>
                                            
                                            <span onClick={showTheBooks} className="section__gallery--container--link">VER MÁS</span>
                                        
                                        </Link>
                                    
                                    </div>
                                </>
                            })
                    }


                    <VerMas
                        dynamicShowingBook={dynamicShowingBook}
                        dynamicHiddingBook={dynamicHiddingBook}
                        //titulo={booksData[0].attributes.titulo}
                    //autor={val.attributes.autor}
                    //imagen={val.attributes.imagen}
                    //sinopsis={val.attributes.sinopsis}
                    />

                </section>

            </section>




        </>

    );
}

export default CicloBasicoLibros;