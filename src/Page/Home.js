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
      <div className="row">
        <Entrada />
        <Menu />
        <div className="col-4">
          <Perfil />
        </div>
        <div className="col">
          <Contenido />
        </div>
        <Footer />
      </div>
    </ThemeProvaider>
  );
};

export default Home;
