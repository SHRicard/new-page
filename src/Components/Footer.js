import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="row d-flex justify-content-center bg-danger">
        <div className="col-4 text-center font-Roboto">
          <h3>Logo</h3>
          <p>Parrafo</p>
          <br />
          <br />
          <br />
          <h5>Seguime en mis Redes:</h5>
          <small>icons</small>
        </div>
        <div className="col-4 text-center font-Roboto">
          <h3 className="font-Roboto">Tecnologias</h3>
          <br />
          <small>JavaScript</small>
          <br />
          <small>React</small>
          <br />
          <small>NodeJs</small>
          <br />
          <small>CSS</small>
          <br />
          <small>HTML</small>
          <br />
          <small>Sass</small>
        </div>
        <div className="col-4 text-center font-Roboto">
          <small>Certificadores oficiales en tecnologías</small>
        </div>
        <div className="col-12 bg-primary pt-3 pb-3 text-center font-Roboto">
          De Argentina para todo el Mundo
        </div>
      </div>
    </div>
  );
};

export default Footer;
