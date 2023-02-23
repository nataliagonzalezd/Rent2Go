import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Myrents = function (props) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOrderItem();
    actions.getProductsDetail();
  }, []);
  return (
    <>
      <div className="card d-flex">
        <h4 className="card-header">{props.name}</h4>
        <div className="card-body d-flex col-9">
          <h5 className="card-title col-3">
            <img src={props.image} className="card-img w-50" alt="" />
          </h5>
          <h5 className="card-title col-2">
            Descripcion del Producto: {props.description}
          </h5>
          <h5 className="container-fluid card-title col-3">
            Cantidad de Unidades: {props.quantity}
          </h5>
          <h5 className="card-title col-2">Precio: {props.price}</h5>
          <h5 className="card-title col-2">
            Username de quien alquila: {props.username}
          </h5>
          <h5 className="card-title col-2">
            Telefono de quien alquila: {props.phone}
          </h5>
          <h5 className="card-title col-2">
            Email de quien alquila: {props.email}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Myrents;
