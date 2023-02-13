import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import "../../styles/register.css";

export const Register = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const { store, actions } = useContext(Context);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Nombre de usuario requerido";
    } else if (values.username.length > 10) {
      errors.username = "Nombre de usuario debe ser menor a 10 caracteres";
    }

    if (!values.password) {
      errors.password = "Por favor ingrese una contraseña";
    } else if (values.password.length < 5) {
      errors.password = "La contraseña debe tener mas de 5 caracteres";
    }

    if (!values.email) {
      errors.email = "Por favor ingrese su correo electronico";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Por favor ingrese una dirección de correo valida";
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
      actions.register(
        formik.values.email,
        formik.values.username,
        formik.values.password
      );
      actions.login(formik.values.email, formik.values.password);
      console.log("acaDATAREGISTER");
    },
  });

  return store.auth === true ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className={`container${showSignUp ? " right-panel-active" : ""}`}>
        <div
          className={`container__form container--signup${
            showSignUp ? "" : " hidden"
          }`}
        >
          <form
            action="#"
            className="form"
            id="form1"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="form__title">Registro</h2>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="input"
              id="username"
              name="username"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />{" "}
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <input
              type="email"
              placeholder="Email"
              className="input"
              id="email"
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
              id="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <button className="btn" type="submit">
              Crear Cuenta
            </button>
          </form>
        </div>
        <div
          className={`container__form container--signin${
            showSignUp ? "hidden" : ""
          }`}
        >
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Iniciar Sesion</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <a href="#" className="link">
              Olvidaste tu contraseña?
            </a>
            <button className="btn">Ingresar</button>
          </form>
        </div>
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <a
                className="btn"
                id="signIn"
                onClick={handleSignInClick}
                href="/login"
              >
                Iniciar Sesion
              </a>
            </div>
            <div className="overlay__panel overlay--right">
              <a className="btn" id="signUp" onClick={handleSignUpClick}>
                Registro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
