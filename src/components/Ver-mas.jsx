import React from 'react';
import { Icon } from '@iconify/react';
import '../assets/styles/ver-mas.scss';


const VerMas = ({ dynamicShowingBook, dynamicHiddingBook, titulo, autor, imagen, sinopsis}) => {
    //console.log(titulo)

    return (

        <section className="section__gallery--showing--the--book" style={{
            transform: `translate(${dynamicShowingBook})`,
            
        }}>


            <div className="section__gallery--showing--the--book--container">
               
                <Icon icon="ant-design:close-square-filled" color="#0f0333" width="56" height="50" className='section__gallery--showing--the--book--icon'

                onClick = {dynamicHiddingBook}
                
                
                />

                <div className='section__gallery--showing--the--book--container--img--buttons-titles'>
                    <img className="section__gallery--showing--the--book--img" src={imagen} alt="pilares" />
                    <div className='section__gallery--showing--the--book--container--titles'>
                        <h2 className="section__gallery--showing--the--book--title">{titulo}</h2>
                        <h3 className="section__gallery--showing--the--book--sub--title">{autor}</h3>
                        <div id='buttons'>
                            <button type="button">COMPRAR EDICIÓN DIGITAL</button>
                            <button type="button">VER EN YOUTUBE</button>
                            <button type="button">COMPRAR EDICIÓN FÍSICA</button>
                            <button type="button">VER EDITORIAL</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section__gallery--showing--the--book--sub--synopsys--container">

                <h4 className="section__gallery--showing--the--book--sub--synopsys--container--h4">{titulo}</h4>
                <p className="section__gallery--showing--the--book--sub--synopsys--container--p">{sinopsis}</p>

            </div>


        </section>



    );
}

export default VerMas;