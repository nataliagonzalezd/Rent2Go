import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  function handleLogout() {
    actions.logout();
    navigate("/login");
  }
  return (
    <>
      <div className="bg-white border-bottom border-dark">
        <nav className="navbar bg-white d-flex">
          <div className="container-fluid d-flex bg-white">
            <a className="navbar-brand d-flex justify-content-start align-items-center">
              <img
                src="https://i.pinimg.com/564x/aa/80/36/aa80366b7098c9cebc7f47b7614a2176.jpg"
                className="w-25 h-25"
                alt=""
              />{" "}
              Reant2go
            </a>
            <input
              className="rounded-pill form-control w-50 mx-auto bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </div>
          <div className="d-flex justify-content-start">
            <ul className="nav grid gap-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Caregorias
                </a>
                <ul className="dropdown-menu text-black">
                  <li>
                    <a className="dropdown-item text-black" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Pintura
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Electronica
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Jardineriaa
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Indumentaria
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Musica
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/catalogovista"
                    >
                      Lectura
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider text-black"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item text-black" href="">
                      Favoritos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-black"
                  aria-current="page"
                  href=""
                >
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="">
                  Historial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/newProduct">
                  Subir un producto
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-start">
            <ul className="nav grid gap-1">
              <li className="nav-item">
                <a
                  className="nav-link active text-black"
                  aria-current="page"
                  href="/register"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-black"
                  aria-current="page"
                  href="/login"
                >
                  Login
                </a>
              </li>
              {store.auth === true ? (
                <button className="btn btn-dark" onClick={handleLogout}>
                  Logout
                </button>
              ) : null}
              <li className="nav-item">
                <button
                  className="nav-link active text-black"
                  aria-current="page"
                  href="viewcart"
                >
                  Carrito
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
