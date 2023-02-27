import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Cart = function (props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const days = props.quantity;
  const price = props.price;

  return (
    <div className="card mb-4" style={{ backgroundColor: "#daf0f4" }}>
      <div className="row g-0">
        <div className="col-md-6 image-container-especial">
          <img
            src={props.image}
            className="img-fluid rounded-start"
            alt={props.name}
          />
        </div>
        <div className="col-md-6">
        <div className="d-flex align-items-end justify-content-between p-3">
            <div>
              <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                <strong>Producto:</strong> {props.name}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                <strong>description:</strong> {props.description}
              </p>
            </div>
            </div>

          <div className="d-flex align-items-end justify-content-between p-3">
            <div>
              <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                <strong>Cantidad:</strong> {days}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                <strong>Precio por día:</strong> ${price}
              </p>
              <h5 style={{ fontSize: "24px", marginBottom: "0px", color: "#07859c" }}>
                <strong>Total:</strong> ${days * price}
              </h5>
            </div>
            <button
              className="btn btn-outline-danger align-self-start"
              type="button"
              onClick={() => actions.delCart(props.costumer_id, props.id)}
              style={{ backgroundColor: "#3cb4c4", borderColor: "#3cb4c4" }}
            >
              <i className="fas fa-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;