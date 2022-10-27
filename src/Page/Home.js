import React from "react";
import Entrada from "../Components/Entrada";
import Menu from "../Components/Menu.js";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="container-fluid">
      <Entrada />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
