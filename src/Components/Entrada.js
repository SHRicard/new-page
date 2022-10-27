import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";

const Entrada = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="row ">
        <div className="col-12 text-center">
          <h4 className=" font-Racing fs-5 pt-2">
            {"<Front-End/>"}
            <small className="font-Ceviche  fs-3"> RRcode </small>
            {"<Back-End/>"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Entrada;
