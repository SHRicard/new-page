import React from "react";
import Entrada from "../Components/Entrada.js";
import { Link, Outlet } from "react-router-dom";

const MenuTwo = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Entrada />
      </div>
      <div
        className="col-12 bg-dark d-flex justify-content-center
"
      >
        <div className="MenuTwo">
          <div className="navigation">
            <Link to="/home">
              <span className="icon">
                <i class="bi bi-house-fill" />
              </span>
              <span className="text">Home</span>
            </Link>

            <Link to="sobre#">
              <span className="icon">
                <i class="bi bi-person-fill" />
              </span>
              <span className="text">Sobre Mi</span>
            </Link>

            <Link to="contacto">
              <span className="icon">
                <i class="bi bi-chat" />
              </span>
              <span className="text">Contacto</span>
            </Link>

            <Link to="proyectos">
              <span className="icon">
                <i class="bi bi-terminal-dash" />
              </span>
              <span className="text">Proyectos</span>
            </Link>

            <div className="indicador"></div>
          </div>
        </div>
      </div>
      <section className="col-12">
        <Outlet />
      </section>
    </div>
  );
};

export default MenuTwo;
