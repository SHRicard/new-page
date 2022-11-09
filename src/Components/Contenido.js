import React, { useContext } from "react";
import Perfil from "../Components/Perfil.js";
import ThemeContext from "../Context/ThemeContext.js";
import { Outlet } from "react-router-dom";

const Contenido = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className=" row">
        <div className="col bg-danger mx-2 ">
          awd
          {/* <section>
              <Outlet />
            </section> */}
        </div>
      </div>
    </div>
  );
};

export default Contenido;
