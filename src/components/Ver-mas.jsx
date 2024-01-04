import React from 'react';
import { Icon } from '@iconify/react';
import '../assets/styles/global.scss';
import { Button } from '@mui/material';



const VerMas = ({ dynamicShowingBook, dynamicHiddingBook, titulo, autor, imagen, sinopsis}) => {
    /* 
    
        <h2 className="section__gallery--showing--the--book--title">{titulo}</h2>
        <h3 className="section__gallery--showing--the--book--sub--title">{autor}</h3>
    
    
    */

    return (

        <section className="section__gallery--showing--the--book" style={{
            transform: `translate(${dynamicShowingBook})`,
            
        }}>


            <div className="section__gallery--showing--the--book--container">
               
                

                <div className='section__gallery--showing--the--book--container--img--buttons-titles'>
                <div className='button__container'>
                <Button 
                    size='small'
                    onClick = {dynamicHiddingBook}

                >Volver a la busqueda</Button>
                </div>
                    <img className="section__gallery--showing--the--book--img" src={imagen} alt="pilares" />
                    <div className='section__gallery--showing--the--book--container--titles'>   
                        <div id='buttons'>
                            <Button variant="outlined" size = 'small' >COMPRAR EDICIÓN DIGITAL</Button>
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