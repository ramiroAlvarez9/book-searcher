import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import '../assets/styles/global.scss';


const PaginaDeInicioEscritorio = () => {
  return (
    <>
      <section id="section__desktop">
        
        <h1 className="title__desktop">BIENVENIDO</h1>
        <p className="title__desktop--p">
          Integer pretium, risus nec accumsan condimentum, leo dui scelerisque
          erat, vel facilisis urna tellus eget mi.
        </p>

        <div className="button__container">
          <Link to="/libros" className="title__desktop--button">
            Empieza aquí
          </Link>
        </div>

        <footer className="footer">
          <div className="footer__socialNetworks--container">
            <Icon
              icon="akar-icons:instagram-fill"
              color="#04006C"
              width="30"
              height="30"
              inline={true}
              className="footer__socialNetworks--container--icons"
            />
            <Icon
              icon="ant-design:facebook-filled"
              color="#04006C"
              width="32"
              height="32"
              inline={true}
              className="footer__socialNetworks--container--icons"
            />
            <Icon
              icon="dashicons:youtube"
              color="#04006C"
              width="35"
              height="32"
              inline={true}
              className="footer__socialNetworks--container--icons"
            />
          </div>
        </footer>
      </section>
    </>
  );
};

export default PaginaDeInicioEscritorio;
