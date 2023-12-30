import React from 'react';
import '../assets/styles/ciclobasico-libros.scss';
import VerMas from './Ver-mas';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Img from "react-cool-img";




const Libros = () => {

    //data to hide or show the book info
    const [dynamicShowingBook, setDynamicShowingBook] = useState('-110%');
    //data to the books, from the API
    const [booksData, setBooksData] = useState([]);
    //data for 'VER MAS'
    const [booksDataKey, setBooksDataKey] = useState(0);

    //data from the input
    const [searchTerm, setSearchTerm] = useState('');

    //animation to show the book info
    const showTheBooks = () => setDynamicShowingBook('0%');

    //animation to hide the book info
    const dynamicHiddingBook = () => setDynamicShowingBook('-110%');

    const fetchTheBookApi = async () => {
        const api = await fetch('https://metafisica-libros.herokuapp.com/api/ciclobasico-libros');
        const books = await api.json();
        setBooksData(books.data)
    };

    useEffect(  () =>  fetchTheBookApi() , []);

    return (

        <>
            <section id="basicCicleBooks">

                <input type="text" placeholder="Buscar por titulo" onChange={e => {

                    setSearchTerm(e.target.value)
                }}

                />
                <div className="section__buttons">

                    <button type="button">MOSTRAR SOLO DISPONIBLES</button>

                </div>


                <section className="section__gallery">

                    {
                        //if the data is not available
                        booksData === undefined ?
                            <>

                                <img src="https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif" alt="loading screen" />

                            </>

                            :

                            //when the data it's available

                            booksData.filter((val, key) => {
                                if (searchTerm === '') {
                                    return val;


                                } else if (booksData[key].attributes.titulo.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                    return val;
                                }

                            }).map((val, key) => {

                                if (val.id === parseInt(booksDataKey)) {

                                 

                                    return <>

                                        <div className='section__gallery--container'>
                                            <Link className="section__gallery--container--link" to='' onClick={() => setBooksDataKey(`${val.id}`)}>
                                                <Img
                                                    onClick={showTheBooks}
                                                    className="section__gallery--container--img"
                                                    src={val.attributes.imagen}
                                                    alt="REACT COOL IMG"
                                                />
                                            </Link>


                                            <h3 className="section__gallery--container--title">{val.attributes.titulo}</h3>

                                            <Link className="section__gallery--container--link" to='' onClick={() => setBooksDataKey(`${val.id}`)}>

                                                <span onClick={showTheBooks} className="section__gallery--container--link">VER MÁS</span>

                                            </Link>


                                        </div>



                                        <VerMas

                                            dynamicShowingBook={dynamicShowingBook}
                                            dynamicHiddingBook={dynamicHiddingBook}
                                            titulo={val.attributes.titulo}
                                            autor={val.attributes.autor}
                                            imagen={val.attributes.imagen}
                                            sinopsis={val.attributes.sinopsis}
                                        />
                                    </>


                                }
                                {/* */ }
                                return <>

                                    <div className='section__gallery--container'>
                                        <Link className="section__gallery--container--link" to='' onClick={() => setBooksDataKey(`${val.id}`)}>
                                            <Img
                                                onClick={showTheBooks}
                                                className="section__gallery--container--img"
                                                src={val.attributes.imagen}
                                                alt="REACT COOL IMG"
                                            />
                                        </Link>

                                        <h3 className="section__gallery--container--title">{val.attributes.titulo}</h3>

                                        <Link className="section__gallery--container--link" to='' onClick={() => setBooksDataKey(`${val.id}`)}>

                                            <span onClick={showTheBooks} className="section__gallery--container--link">VER MÁS</span>

                                        </Link>

                                        {/* 
                                        <VerMas

                                            dynamicShowingBook={dynamicShowingBook}
                                            dynamicHiddingBook={dynamicHiddingBook}
                                            titulo={val.attributes.titulo}
                                            autor={val.attributes.autor}
                                            imagen={val.attributes.imagen}
                                            sinopsis={val.attributes.sinopsis}
                                        />
                                    */}

                                    </div>
                                </>
                            })
                    }
                </section>
            </section>
        </>

    );
}

export default Libros;