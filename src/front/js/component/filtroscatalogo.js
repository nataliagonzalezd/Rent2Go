import React from "react";

const Filtroscatalogo = function () {
  return (
    <>
      <div className="d-flex align-items-center grid gap-3">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtrado por
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SubCategorias
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" className="btn btn-outline-dark">
            Nuevos
          </button>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" className="btn btn-outline-dark">
            Ofertas
          </button>
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Color
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tamaño
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Marca
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" className="btn btn-outline-dark">
            Todos los filtros⚙️
          </button>
        </div>
      </div>
    </>
  );
};

export default Filtroscatalogo;
