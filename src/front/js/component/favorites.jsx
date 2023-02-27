import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Navigate } from "react-router-dom";

const Favorites = function (props) {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="card mx-3 my-3 text-dark bg-form">
      <div className="row g-0">
        <div className="col-md-3 mx-1 my-3 d-flex justify-content-center align-items-center">
          <img
            src={props.image}
            className="img-fluid rounded-start w-100 h-100"
            alt="..."
          />
        </div>
        <div className="col-md-6 mx-1 my-3">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text text-dark">{props.description}</p>
        </div>
        <div className="col-md-2  my-3">
          <div className="mb-3">
            <h5 className="card-title my-0">$ {props.price}</h5>
            <p className="card-text">
              <small className="text-muted">Por dia</small>
            </p>
          </div>

          <div className="align-text-bottom d-flex justify-content-start text-dark mx-0">
            <button
              className="btn mx-0"
              type="button"
              id="enviar"
              onClick={() => actions.delFavorites(props.costumer_id, props.id)}
            >
              <i className="fa fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
