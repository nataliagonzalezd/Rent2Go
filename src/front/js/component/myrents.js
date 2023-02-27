import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/myrents.css";

const Myrents = function (props) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOrderItem();
    actions.getProductsDetail();
  }, []);
  return (
    <>
      <div className="card d-flex border border-dark">
        <h4 className="card-header border-bottom border-dark" id="headmyrents">
          {props.name}
        </h4>
        <div className="card-body d-flex col-9 align-items-center">
          <h6 className="card-title col-3">
            <img
              src={props.image}
              className="card-img w-100 border border-dark"
              alt=""
            />
          </h6>
          <h6 className="card-title col-2">
            Descripcion del Producto: {props.description}
          </h6>
          <h6 className="container-fluid card-title col-2">
            Cantidad de Unidades: {props.quantity}
          </h6>
          <h6 className="card-title col-2">Precio: {props.price}</h6>
          <h6 className="card-title col-2">
            Username del arrendatario:
            <br /> {props.username}
          </h6>
          <h6 className="card-title col-2">
            Telefono del arrendatario: <br /> {props.phone}
          </h6>
          <h6 className="card-title col-2">
            Email del arrendatario:
            <br /> {props.email}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Myrents;