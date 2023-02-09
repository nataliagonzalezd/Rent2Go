import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function data(e) {
    e.preventDefault();
    actions.register(email, username, password);
    actions.login(email, password);
    setEmail("");
    setUserName("");
    setPassword("");
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <form className="w-50 mx-auto" onSubmit={data}>
          <button
            type="button"
            className="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register
          </button>
          //Modal del registerr
          <div
            className="modal fade "
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content d-flex justify-content-center">
                <div className="modal-header bg-light d-flex justify-content-center">
                  <h1
                    className="modal-title fs-3  d-flex justify-content-center"
                    id="exampleModalLabel"
                  >
                    Registrate
                  </h1>
                </div>
                <div className="d-flex justify-content-center">
                  <a className="form-text d-flex justify-content-center">
                    Registrate con tu correo electronico aqui
                  </a>
                </div>
                <div className="modal-body">
                  <div className="">
                    <div
                      id="emailHelp"
                      className="form-text d-flex justify-content-start"
                    >
                      Correo Electronico
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="ejemplo@gmail.com"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="">
                    <div
                      id="emailHelp"
                      className="form-text d-flex justify-content-start"
                    >
                      Nombre de Usuario
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de usuario"
                      aria-label="Username"
                      id="Username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                  </div>
                  <div className="">
                    <div
                      id="emailHelp"
                      className="form-text d-flex justify-content-start"
                    >
                      Contraseña
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <div
                    id="emailHelp"
                    className="form-text d-flex justify-content-start"
                  >
                    Al hacer clic en Crear nueva cuenta, aceptas los Términos y
                    condiciones de uso.
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark d-flex justify-content-center"
                    data-bs-dismiss="modal"
                  >
                    Crear nueva cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Register;
