import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/editprofile.css";

export const EditProfile = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [rol, setRol] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  function info(e) {
    e.preventDefault();
    actions.addInfo(name, lastName, address, rol, phone, image);
    setName("");
    setLastName("");
    setAddress("");
    setRol("");
    setPhone("");
  }

  return (
    <>
      <div className="main-container">
        <div className="left-container container">
          <div className="menu-box block">
            <h2 className="titular">MENU</h2>
            <ul className="menu-box-menu">
              <li>
                <a className="menu-box-tab" href="#6">
                  <span className="icon fontawesome-envelope scnd-font-color"></span>
                  Mensajes<div className="menu-box-number">24</div>
                </a>
              </li>
              <li>
                <a className="menu-box-tab" href="#8">
                  <span className="icon entypo-paper-plane scnd-font-color"></span>
                  Mis rentas<div className="menu-box-number">3</div>
                </a>
              </li>
              <li>
                <a className="menu-box-tab" href="#10">
                  <span className="icon entypo-calendar scnd-font-color"></span>
                  Clientes
                  <div className="menu-box-number">5</div>
                </a>
              </li>
              <li>
                <a className="menu-box-tab" href="#12">
                  <span className="icon entypo-cog scnd-font-color"></span>
                  Configuracion
                </a>
              </li>
              <li>
                <a className="menu-box-tab" href="#13">
                  <span className="icon entypo-chart-line scnd-font-color"></span>
                  Estadisticas
                </a>
              </li>
              <li>
                <a className="menu-box-tab" href="/editprofile">
                  <span className="icon entypo-chart-line scnd-font-color"></span>
                  Editar mi perfil
                </a>
              </li>
            </ul>
          </div>
          <div className="line-chart-block block clear">
            <div className="line-chart">
              <div className="grafico">
                <ul className="eje-y">
                  <li data-ejey="30"></li>
                  <li data-ejey="20"></li>
                  <li data-ejey="10"></li>
                  <li data-ejey="0"></li>
                </ul>
                <ul className="eje-x">
                  <li>Apr</li>
                  <li>May</li>
                  <li>Jun</li>
                </ul>
                <span data-valor="25">
                  <span data-valor="8">
                    <span data-valor="13">
                      <span data-valor="5">
                        <span data-valor="23">
                          <span data-valor="12">
                            <span data-valor="15"></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <ul className="time-lenght horizontal-list">
              <li>
                <a className="time-lenght-btn" href="#14">
                  Week
                </a>
              </li>
              <li>
                <a className="time-lenght-btn" href="#15">
                  Month
                </a>
              </li>
              <li>
                <a className="time-lenght-btn" href="#16">
                  Year
                </a>
              </li>
            </ul>
            <ul className="month-data clear">
              <li>
                <p>
                  APR<span className="scnd-font-color"> 2013</span>
                </p>
                <p>
                  <span className="entypo-plus increment"> </span>21<sup>%</sup>
                </p>
              </li>
              <li>
                <p>
                  MAY<span className="scnd-font-color"> 2013</span>
                </p>
                <p>
                  <span className="entypo-plus increment"> </span>48<sup>%</sup>
                </p>
              </li>
              <li>
                <p>
                  JUN<span className="scnd-font-color"> 2013</span>
                </p>
                <p>
                  <span className="entypo-plus increment"> </span>35<sup>%</sup>
                </p>
              </li>
            </ul>
          </div>
          <div className="media block">
            <div id="media-display">
              <a className="media-btn play" href="#23">
                <span className="fontawesome-play"></span>
              </a>
            </div>
            <div className="media-control-bar">
              <a className="media-btn play" href="#23">
                <span className="fontawesome-play scnd-font-color"></span>
              </a>
              <p className="time-passed">
                4:15{" "}
                <span className="time-duration scnd-font-color">/ 9:23</span>
              </p>
              <a className="media-btn volume" href="#24">
                <span className="fontawesome-volume-up scnd-font-color"></span>
              </a>
              <a className="media-btn resize" href="#25">
                <span className="fontawesome-resize-full scnd-font-color"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="middle-container container">
          <div className="profile block">
            <a className="add-button" href="#28">
              <span className="icon entypo-plus scnd-font-color"></span>
            </a>
            <div className="profile-picture big-profile-picture clear">
              <img
                width="150px"
                alt="Anne Hathaway picture"
                src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
              />
            </div>
            <h1 className="user-name">Anne Hathaway</h1>
            <div className="profile-description">
              <p className="scnd-font-color">
                Lorem ipsum dolor sit amet consectetuer adipiscing
              </p>
            </div>
          </div>
          <div className="weather block clear">
            <h2 className="titular">
              <span className="icon entypo-location"></span>
              <strong>CLUJ-NAPOCA</strong>/RO
            </h2>
            <div className="current-day">
              <p className="current-day-date">FRI 29/06</p>
              <p className="current-day-temperature">
                24º<span className="icon-cloudy"></span>
              </p>
            </div>
            <ul className="next-days">
              <li>
                <a href="#43">
                  <p className="next-days-date">
                    <span className="day">SAT</span>{" "}
                    <span className="scnd-font-color">29/06</span>
                  </p>
                  <p className="next-days-temperature">
                    25º
                    <span className="icon icon-cloudy scnd-font-color"></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#44">
                  <p className="next-days-date">
                    <span className="day">SUN</span>{" "}
                    <span className="scnd-font-color">30/06</span>
                  </p>
                  <p className="next-days-temperature">
                    22º
                    <span className="icon icon-cloudy2 scnd-font-color"></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#45">
                  <p className="next-days-date">
                    <span className="day">MON</span>{" "}
                    <span className="scnd-font-color">01/07</span>
                  </p>
                  <p className="next-days-temperature">
                    24º
                    <span className="icon icon-cloudy2 scnd-font-color"></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="#46">
                  <p className="next-days-date">
                    <span className="day">TUE</span>{" "}
                    <span className="scnd-font-color">02/07</span>
                  </p>
                  <p className="next-days-temperature">
                    26º
                    <span className="icon icon-cloudy scnd-font-color"></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="">
                  <p className="next-days-date">
                    <span className="day">WED</span>{" "}
                    <span className="scnd-font-color">03/07</span>
                  </p>
                  <p className="next-days-temperature">
                    27º<span className="icon icon-sun scnd-font-color"></span>
                  </p>
                </a>
              </li>
              <li>
                <a href="">
                  <p className="next-days-date">
                    <span className="day">THU</span>{" "}
                    <span className="scnd-font-color">04/07</span>
                  </p>
                  <p className="next-days-temperature">
                    29º<span className="icon icon-sun scnd-font-color"></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="tweets block">
            <h2 className="titular">
              <span className="icon zocial-twitter"></span>LATEST TWEETS
            </h2>
            <div className="tweet first">
              <p>
                Ice-cream trucks only play music when out of ice-cream. Well
                played dad. On{" "}
                <a className="tweet-link" href="#17">
                  @Quora
                </a>
              </p>
              <p>
                <a className="time-ago scnd-font-color" href="#18">
                  3 minutes ago
                </a>
              </p>
            </div>
            <div className="tweet">
              <p>
                We are in the process of pushing out all of the new CC apps! We
                will tweet again once they are live{" "}
                <a className="tweet-link" href="#19">
                  #CreativeCloud
                </a>
              </p>
              <p>
                <a className="scnd-font-color" href="#20">
                  6 hours ago
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-container container">
          <div className="join-newsletter block">
            <h2 className="titular">Bienvenido, nombre</h2>
            <div className="input-container">
              <label htmlFor="">Nombre</label>
              <form action="" onSubmit={info}>
                <input
                  type="text"
                  placeholder=""
                  className="email text-input"
                />
                <div className="input-icon envelope-icon-newsletter">
                  <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
                <label htmlFor="">Apellido</label>
                <input
                  type="text"
                  placeholder=""
                  className="email text-input"
                />
                <div className="input-icon envelope-icon-newsletter">
                  <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
                <label htmlFor="">Direccion</label>
                <input
                  type="text"
                  placeholder=""
                  className="email text-input"
                />
                <div className="input-icon envelope-icon-newsletter">
                  <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
                <label htmlFor="">Rol</label>
                <input
                  type="text"
                  placeholder=""
                  className="email text-input"
                />
                <div className="input-icon envelope-icon-newsletter">
                  <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
                <label htmlFor="">Telefono</label>
                <input
                  type="text"
                  placeholder=""
                  className="email text-input"
                />
                <div className="input-icon envelope-icon-newsletter">
                  <span className="fontawesome-envelope scnd-font-color"></span>
                </div>
              </form>
            </div>
            <a className="subscribe button" href="#21">
              Guardar Cambios
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
