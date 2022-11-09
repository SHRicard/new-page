import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="footer">
        <div className="row ">
          <div className="col-4 text-center">
            <div className="logo pt-3 ">
              <small className="mx-5 fs-3">
                <small className="logoR">{"RR"}</small>
                {"code"}
              </small>
            </div>
            <small className="parrafo ">
              Dame la oportunidad, aun que sea un desarrollador junior
              <br /> me sobran ganas de aprender , se que puedo aportar mucho.
              <br />
              Dame ese desafio que estoy buscando.&nbsp;&nbsp;&nbsp;&nbsp;{"=)"}
            </small>
            <br />
            <br />
            <small className="parrafo ">
              Entérate de todas mis proyectos en <br />
              mi Redes y de paso Seguime :
            </small>
            <div
              className="row gropoIcons pt-2 pb-2 d-flex
                        justify-content-center
                        "
            >
              <div className="col-auto">
                <i class="bi bi-youtube" />
              </div>
              <div className="col-auto">
                <i class="bi bi-linkedin" />
              </div>
              <div className="col-auto">
                <i class="bi bi-whatsapp" />
              </div>
              <div className="col-auto">
                <i class="bi bi-facebook" />
              </div>
            </div>
          </div>
          <div className="col-auto pt-3  text-center">
            <div className="row ">
              <div className="col-12 pb-2 ">
                <h2 className="title-tec">Tecnologías</h2>
              </div>
              <div
                className="d-flex 
                            justify-content-center
                            "
              >
                <div className="col-5 box-color-tec text-start  ">
                  <small className="javaScript">&nbsp;&nbsp;</small>
                  &nbsp;<small>JavaScript</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="sequelize">&nbsp;&nbsp;</small>
                  &nbsp;<small>Sequelize</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="redux">&nbsp;&nbsp;</small>
                  &nbsp;<small>Redux</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="react">&nbsp;&nbsp;</small>
                  &nbsp;<small>React</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="react-hooks">&nbsp;&nbsp;</small>
                  &nbsp;<small>React Hooks</small>
                  &nbsp;&nbsp;<i class="bi bi-check2"></i>
                  <br />
                  <small className="bootstrap">&nbsp;&nbsp;</small>
                  &nbsp;<small>bootstrap</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="posgreSQL">&nbsp;&nbsp;</small>
                  &nbsp;<small>Styled Components</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                </div>
                <div className="col-5  box-color-tec text-start">
                  <small className="nodeJs">&nbsp;&nbsp;</small>
                  &nbsp;<small>NodeJs</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="css">&nbsp;&nbsp;</small>
                  &nbsp;<small>Css</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="html">&nbsp;&nbsp;</small>
                  &nbsp;<small>Html</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-chp-0 m-0eck2" />
                  <br />
                  <small className="posgreSQL">&nbsp;&nbsp;</small>
                  &nbsp;<small>PosgreSQL</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="sass">&nbsp;&nbsp;</small>
                  &nbsp;<small>Sass</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="git">&nbsp;&nbsp;</small>
                  &nbsp;<small>GitHup</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-check2" />
                  <br />
                  <small className="aprediendo">&nbsp;&nbsp;</small>
                  &nbsp;<small className="apredis">Aprediendo</small>
                  &nbsp;&nbsp;
                  <i class="bi bi-infinity" />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-2 pt-2">
            <h3 className="title-tec">Estudios realizados</h3>
            <small className="parrafo">
              Te invito a que veas mis certificados de estudios
            </small>
            <button type="button" className="btn btn btn-sm">
              <small>Certificados</small>
              &nbsp;&nbsp;
            </button>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-12 text-center Arg  pb-3 pt-3">
            <small>
              De Argentina con&nbsp;
              <i class="bi bi-suit-heart-fill" />
              &nbsp;Para todo el Mundo!!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
