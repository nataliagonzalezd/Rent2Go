import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import Diseño from "../../img/Diseño.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getCategory();
  }, []);

  useEffect(() => {
    actions.getFavorites(localStorage.getItem("costumer_id"));
  }, [store.productsFavorites]);

  useEffect(() => {
    actions.getCart(localStorage.getItem("costumer_id"));
  }, [store.productsCart]);


  function handleLogout() {
    actions.logout();
    localStorage.removeItem("costumer_id");
    navigate("/login");
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      id="navbar"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-solid fa-bars"></i>
        </button>
        <a className="navbar-brand text-light fs-4" href="/">
          {" "}
          <img
            src={Diseño}
            width="38"
            height="38"
            className="border-roudend"
            alt=""
          />
          Rent2Go
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="dropdown-center">
                <a
                  className="nav-link dropdown-toggle text-light"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTOS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item-text">CATEGORIAS</span>
                  </li>
                  {store.category.map((item, index) => (
                    <li>
                      <a
                        className="dropdown-item text-black"
                        href={`/category/${item.id}/products`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}

                  {/* <li>
                    {" "}
                    <a
                      className="dropdown-item text-black"
                      href="/category/2/products"
                    >
                      Electronica
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/category/3/products"
                    >
                      Jardineria
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/category/4/products"
                    >
                      Indumentaria
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/category/5/products"
                    >
                      Musica
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/category/6/products"
                    >
                      Lectura
                    </a>
                  </li> */}
                  {/* <li>
                    <a
                      className="dropdown-item text-black"
                      href="/order_item/1"
                    >
                      Alquilando
                    </a>
                  </li> */}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                OFERTAS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/newProduct">
                Subir un producto
              </a>
            </li>
          </ul>
          <form className="d-flex mx-5" role="search">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Buscar productos.."
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div className="btn-group dropstart">
                <a
                  className="nav-link dropdown-toggle active text-light"
                  data-bs-display="static"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-regular fa-user"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Ingresa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/register">
                      Crea tu cuenta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/product">
                      Mi cuenta
                    </a>
                  </li>
                  <li>
                    {store.auth === true ? (
                      <button className="btn" onClick={handleLogout}>
                        Salir
                      </button>
                    ) : null}
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item d-flex justify-content-center ">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="cart"
              >
                <i className="fa fa-solid fa-cart-plus"></i>
              </a>
              <span className="notification">
                {store.productsCart.length}
              </span>
            </li>

            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link active text-light" href="viewfavorites">
                <i className="fa fa-regular fa-heart"></i>
              </a>
              <span className="notification">
                {store.productsFavorites.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
