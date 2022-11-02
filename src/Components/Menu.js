import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  const { theme, haldleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="container-fluid menu">
        <div className="row pt-2 pb-2 ">
          <div className="col-2 d-flex">
            <div className="logo ">
              <small className="mx-5 fs-3">
                <small className="logoR">{"RR"}</small>
                {"code"}
              </small>
            </div>
          </div>

          <div className="col ">
            <ul class="nav justify-content-end d-flex">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contactos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sobre Mi
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Proyectos
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Pokemon Api
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pais Api
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ecommer
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-2 d-flex ">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-2 d-flex">
            <div className="row">
              <div className="col-auto">
                <button
                  onClick={haldleTheme}
                  id="theme-Sun"
                  value="theme-Sun"
                  name="theme"
                  type="button"
                  class="btn btn-light"
                >
                  Light
                </button>
              </div>
              <div className="col-auto mx-3">
                <button
                  name="theme"
                  onClick={haldleTheme}
                  id="theme-Moon"
                  value="theme-Moon"
                  type="button"
                  class="btn btn-dark"
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
