import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-body-tertiary mb-0 mt-0 bg-black ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Rent2Go
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Marcas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Marcas
              </a>
            </li>
  
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success text-light"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
