import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Perfil from "./Perfil.js";

const Menu = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto  mb-lg-0 font-Roboto  ">
            <li className="nav-item ">
              <a className="nav-link active  " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactame
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proyectos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Pokemon
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Pais
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    E-Commerce
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <input type="radio" name="theme" id="light" value="light" />
          <label htmlFor="light">Claro</label>
          <input type="radio" name="theme" id="dark" value="dark" />
          <label htmlFor="dark">Oscuro</label>
          <select className="font-Roboto">
            <option>ES</option>
            <option>EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
