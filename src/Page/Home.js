import React from "react";
import { ThemeProvaider } from "../Context/ThemeContext";
import Entrada from "../Components/Entrada";
import Menu from "../Components/Menu.js";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="container-fluid">
      <ThemeProvaider>
        <Entrada />
        <Menu />
        <Footer />
      </ThemeProvaider>
    </div>
  );
};

export default Home;
