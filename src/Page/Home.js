import React from "react";
import { ThemeProvaider } from "../Context/ThemeContext";
import Entrada from "../Components/Entrada";
import Perfil from "../Components/Perfil.js";
import Menu from "../Components/Menu.js";
import Contenido from "../Components/Contenido.js";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <ThemeProvaider>
      <>
        <div className="container-fluid p-0 m-0">
          <div className="row ">
            <div className="col-12 ">
              <Entrada />
            </div>
            <div className="col-12 ">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <Perfil />
            </div>
          </div>
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </>
    </ThemeProvaider>
  );
};

export default Home;
