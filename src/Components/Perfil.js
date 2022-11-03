import React, { useContext } from "react";
import RRaamirez from "../Img/RRamirez.png";
import ThemeContext from "../Context/ThemeContext.js";

const Perfil = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="container-card pt-2">
        <div className="card">
          <div className="boxImg">
            <img src="..." className=" rounded float-start" alt="..." />
          </div>
          <div className="datos">
            <div
              className="row text-center d-flex
                justify-content-center"
            >
              <div className="col-12 text-center pb-3 ">
                <h3 className="titleName fs-2"> Ricardo</h3>
                <small className="dato ">
                  Desarrollador Back-End / Front-End
                </small>
              </div>
              <div className="col-12 pb-4">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto gitDatos  ">
                    500 <br />
                    <small>Commits</small>
                  </div>
                  <div className="col-auto gitDatos">
                    50 <br />
                    <small>Repositorios</small>
                  </div>
                  <div className="col-auto gitDatos ">
                    <small>5</small>
                    <br />
                    <small>Proyectos</small>
                  </div>
                </div>
              </div>
              <div className=" grupoButton">
                <div className="row">
                  <div className="col-6  ">
                    <button type="button" className="btn btn  btn-sm">
                      <small> Follow</small>
                    </button>
                  </div>
                  <div className="col-6 ">
                    <button type="button" className="btn btn btn-sm">
                      <small>Message</small>
                      &nbsp;&nbsp;
                      <i className="bi bi-whatsapp" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
