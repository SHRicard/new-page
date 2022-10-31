import React from "react";

const Perfil = () => {
  return (
    <div className="container">
      <div className="card d-flex align-items-center">
        <div className="imgBox ">
          <img src="#" alt="noImg" />
        </div>
        <div className="content">
          <div className="details font-Roboto">
            <h2 className="name  ">Ramirez Ricardo</h2>
            <span className="web font-Roboto">
              Desarrollador Junior <br />
              <span className="font-Racing fs-5"> Front-End / Back-End</span>
            </span>
            <div className="data row">
              <div className="col-4 ">
                <h3 className="number font-Roboto">5</h3>

                <span className="span-opa font-Roboto ">Proyectos</span>
              </div>
              <div className="col-4">
                <h3 className="number font-Roboto ">50</h3>

                <span className=" span-opa font-Roboto p-0">Repositorio</span>
              </div>
              <div className="col-4">
                <h3 className="number font-Roboto">500</h3>

                <span className=" span-opa  font-Roboto">Commits</span>
              </div>
            </div>
            <div className="row ">
              <div className="col-6 pt-3">
                <button type="button" class="btn btn-dark btn-sm">
                  Follow
                </button>
              </div>
              <div className="col-6 pt-3">
                <button type="button" class="btn btn-dark btn-sm">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
