import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//create your first component
const CardProduct = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProductsDetails();
  }, []);

  return (
    <div className="card">
      <div className="mails">
        <img src={props.image} />
        <div className="mail-names">{props.name}</div>
      </div>
      <div className="mail-info">{props.description}</div>
      <div></div>
      <div className="bottom-info">
        <div className="check1">
          <i className="fa fa-solid fa-pen"></i>
          <div>
            <button
              className="btn"
              type="button"
              id="enviar"
              onClick={() =>
                actions.delProduct(props.costumer_id, props.id)
              }
            >
              <i className="fa fa-solid fa-trash"></i>
            </button>
          </div>
          <div className="star">
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default CardProduct;
