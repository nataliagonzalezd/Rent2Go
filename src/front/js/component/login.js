import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import "../../styles/register.css";

export const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignUpClick = () => {
    setShowSignIn(false);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const { store, actions } = useContext(Context);

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Por favor ingrese una contrasena";
    } else if (values.password.length < 5) {
      errors.password = "La contrasena debe tener mas de 5 caracteres";
    }

    if (!values.email) {
      errors.email = "Por favor ingrese correo electronico";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Por favor ingrese una direccion de correo valida";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      actions.login(formik.values.email, formik.values.password);
      console.log("acalogin");
    },
  });

  return store.auth === true ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className={`container${showSignIn ? "" : " right-panel-active"}`}>
        <div
          className={`container__form container--signup${
            showSignIn ? "hidden" : ""
          }`}
        >
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Registro</h2>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="input"
              id="username"
            />{" "}
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <button className="btn" type="submit">
              Crear Cuenta
            </button>
          </form>
        </div>
        <div
          className={`container__form container--signin${
            showSignIn ? "" : "hidden"
          }`}
        >
          <form
            action="#"
            className="form"
            id="form2"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="form__title">Iniciar Sesion</h2>
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              placeholder="Contraseña"
              className="input"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <a href="/forgotpassword" className="link">
              Olvidaste tu contraseña?
            </a>
            <button className="btn" type="submit">
              Ingresar
            </button>
          </form>
        </div>
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <a className="btn" id="signIn" onClick={handleSignInClick}>
                Iniciar Sesion
              </a>
            </div>
            <div className="overlay__panel overlay--right">
              <a
                className="btn"
                id="signUp"
                onClick={handleSignUpClick}
                href="/register"
              >
                Registro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
