import React from "react";
import { Link } from "react-router-dom";

import { render } from "react-dom";

export const Register = () => {
  return (
    //NO FUNCIONA TODAVIA SOLO ESTETICO

    //Boton del Register
    <>
      <button
        type="button"
        class="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Register
      </button>
      //Modal del register
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content d-flex justify-content-center">
            <div class="modal-header bg-light d-flex justify-content-center">
              <h1
                class="modal-title fs-3  d-flex justify-content-center"
                id="exampleModalLabel"
              >
                Registrate
              </h1>
            </div>
            <div class="d-flex justify-content-center">
              <a class="form-text d-flex justify-content-center">
                Registrate con tu correo electronico
              </a>
            </div>
            <div class="modal-body">
              <div class="">
                <div
                  id="emailHelp"
                  class="form-text d-flex justify-content-start"
                >
                  Correo Electronico
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="example@gmail.com"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div class="">
                <div
                  id="emailHelp"
                  class="form-text d-flex justify-content-start"
                >
                  Nombre de Usuario
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre de usuario"
                  aria-label="Username"
                  id="Username"
                ></input>
              </div>
              <div class="">
                <div
                  id="emailHelp"
                  class="form-text d-flex justify-content-start"
                >
                  Contraseña
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  id="exampleInputPassword1"
                ></input>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <div
                id="emailHelp"
                class="form-text d-flex justify-content-start"
              >
                Al hacer clic en Crear nueva cuenta, aceptas los Términos y
                condiciones de uso.
              </div>
              <button
                type="button"
                class="btn btn-outline-dark d-flex justify-content-center"
                data-bs-dismiss="modal"
              >
                Crear nueva cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
