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
          <div className="dato">
            <div
              className="row text-center d-flex
                justify-content-center"
            >
              <div className="col-12 text-center  ">
                <h3 className="titleName fs-2"> Ricardo</h3>
                <small>Desarrollador Back-End / Front-End</small>
              </div>
              <div className="col-auto ">
                <span>500</span>
                <br />
                <small>commits</small>
              </div>
              <div className="col-auto">
                <span>500</span>
                <br />
                <small>commits</small>
              </div>
              <div className="col-auto">
                <span>500</span>
                <br />
                <small>commits</small>
              </div>
              <div className="col-6 ">
                <button type="button" class="btn btn-secondary btn-sm">
                  Follow
                </button>
              </div>
              <div className="col-6 ">
                <button type="button" class="btn btn-secondary btn-sm">
                  Message&nbsp;&nbsp;
                  <i class="bi bi-whatsapp" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
