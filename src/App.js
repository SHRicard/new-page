import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.js";
import MenuTwo from "./Components/MenuTwo.js";
import Contacto from "./Page/Contacto.js";
import Contenido from "./Components/Contenido.js";
import "./Scss/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
