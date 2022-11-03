import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="footer">
        <div className="row">
          <div className="col-4 ">
            <div className="logo ">
              <small className="mx-5 fs-3">
                <small className="logoR">{"RR"}</small>
                {"code"}
              </small>
            </div>
            <small>
              Dame la oportunidad, aun que sea un desarrollador junior me sobran
              ganas de aprender , se que puedo aportar mucho. Dame ese desafio
              que estoy buscando.&nbsp;&nbsp;&nbsp;&nbsp;{"=)"}
            </small>
            <br />
            <small>
              Entérate de todas mis proyectos en mi Redes y de paso Seguime :
            </small>
            <div className="gropoIcons">
              <i class="bi bi-youtube"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-whatsapp"></i>
            </div>
          </div>
          <div className="col-4 bg-dark">asd</div>
          <div className="col-4 bg-dark">asd</div>
        </div>
        <div className="row">
          <div className="col-12 text-center bg-primary pb-2 pt-2">
            De Argentina Para todo el Mundo!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
