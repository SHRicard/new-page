import React, { useContext } from "react";
import Perfil from "../Components/Perfil.js";
import ThemeContext from "../Context/ThemeContext.js";

const Contenido = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="container-fluid pt-5">
        <div className=" row">
          <div className="col-auto ">
            <Perfil />
          </div>
          <div className="col bg-danger"></div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
