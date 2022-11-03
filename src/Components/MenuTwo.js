import React from "react";

const MenuTwo = () => {
  return (
    <div className="MenuTwo">
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <i class="bi bi-house-fill" />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <i class="bi bi-person-fill" />
              </span>
              <span className="text">Sobre Mi</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <i class="bi bi-chat" />
              </span>
              <span className="text">Contacto</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <i class="bi bi-terminal-dash" />
              </span>
              <span className="text">Proyectos</span>
            </a>
          </li>
          <div className="indicador"></div>
        </ul>
      </div>
    </div>
  );
};

export default MenuTwo;
