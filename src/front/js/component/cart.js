import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Navigate } from "react-router-dom";


const Cart = function (props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const days=props.quantity
  const price=props.price

  return (
    <>
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={props.image}
                      className="img-fluid rounded-start ms-4"
                      style={{
                        width: 150,
                        height: 230,
                      }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-"> </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">
                        <strong>{props.name} </strong>{" "}
                      </h5>{" "}
                      <p className="card-text">{props.description}</p>{" "}
                      <p className="card-text">
                        <small className="text-muted">
                          {" "}
                          Envío: 2 - 4 semanas{" "}
                        </small>{" "}
                      </p>{" "}
                      <div className="ui-quantity-selector__container">
                        <input
                          type="submit"
                          defaultValue="-"
                          className="cu-button-reset ui-quantity-selector__button"
                          style={{
                            width: 30,
                          }}
                        />{" "}
                        <input
                          type="tel"
                          defaultValue="1"
                          className="u-button-reset ui-quantity-selector__input"
                          style={{
                            width: 30,
                          }}
                        />{" "}
                        <input
                          type="submit"
                          defaultValue="+"
                          className="cu-button-reset ui-quantity-selector__button"
                          style={{
                            width: 30,
                          }}
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="col-md-3"> </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-end flex-column">
                      <div className="p-2">
                        {" "}
                        <button
                          className="btn"
                          type="button"
                          id="enviar"
                          onClick={() =>
                            actions.delCart(props.costumer_id, props.id)
                          }
                        >
                          <i className="fa fa-solid fa-trash"></i> Eliminar
                        </button>
                      </div>
                      <div className="mt-auto p-2"> {days} </div>{" "}
                      <div className="mt-auto p-2"> {price}  </div>{" "}

                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">$ {days*price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
