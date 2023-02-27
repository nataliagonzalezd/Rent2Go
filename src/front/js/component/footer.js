import React, { Component } from "react";
import "../../styles/footer.css";
import Diseño from "../../img/Diseño.png";

export const Footer = () => (
  <>
    <div className="border-bottom border-dark footer-css bg-white m-footer"></div>
    <footer className="footer navbar-expand-lg sticky-bottom " id="footer">
      <br />
      <div className="navbar navbar-expand-lg ">
        <div className="border-top border-dark footer-css bg-black m-footer"></div>
        <div className="">
          <div className="">
            <div className="row">
              <div className="col-3">
                <h3 className="text-light">Serivicios</h3>
                <ul className="list-group list-group-flush bg-black">
                  <li className="list-group-item" id="footer">
                    <a href=""></a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="" className="link-light text-light">
                      Web design
                    </a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="" className="link-light">
                      Development
                    </a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="" className="link-light">
                      Hosting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h3 className="text-light">Sobre Nosotros</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" id="footer">
                    <a href=""></a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="#" className="link-light">
                      Rent2Go
                    </a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="#" className="link-light">
                      Team
                    </a>
                  </li>
                  <li className="list-group-item" id="footer">
                    <a href="#" className="link-light">
                      Apoyo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h3 className="text-light">Rent2GO</h3>
                <h2 className="text-light">
                  "Alquila lo que necesitas, cuando lo necesitas: encuentra todo
                  en un solo lugar."
                </h2>
              </div>
            </div>
            <br />
            <br />
            <h4 className="copyright d-flex justify-content-center text-light align-items-center">
              <a className="navbar-brand text-light fs-4" href="/">
                {" "}
                <img
                  src={Diseño}
                  width="30"
                  height="30"
                  className="border-roudend"
                  id="footer"
                  alt=""
                />
              </a>
              Rent2Go © 2023
            </h4>
          </div>
        </div>
      </div>
    </footer>
  </>
);
