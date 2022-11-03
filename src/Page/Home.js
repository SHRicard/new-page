import React from "react";
import { ThemeProvaider } from "../Context/ThemeContext";
import Entrada from "../Components/Entrada";
import Menu from "../Components/Menu.js";
import MenuTwo from "../Components/MenuTwo.js";
import Contenido from "../Components/Contenido.js";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <ThemeProvaider>
      <div className="container-fluid">
        <div className="row">
          <Entrada />
          <div className="p-0">
            <Menu />
          </div>
          <div>
            <MenuTwo />
          </div>
          <div className="p-0">
            <Contenido />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvaider>
  );
};

export default Home;
