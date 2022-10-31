import React from "react";
import { ThemeProvaider } from "../Context/ThemeContext";
import Entrada from "../Components/Entrada";
import Menu from "../Components/Menu.js";
import Perfil from "../Components/Perfil.js";
import Contenido from "../Components/Contenido.js";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <ThemeProvaider>
      <div className="container-fluid">
        <div className="row">
          <Entrada />
          <div className="">
            <Menu />
          </div>
          <div className="col-auto bg-primary pt-5 pb-5">
            <Perfil />
          </div>
          <div className="col bg-danger">
            <Contenido />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvaider>
  );
};

export default Home;
