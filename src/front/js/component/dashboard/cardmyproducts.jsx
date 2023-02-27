import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import "../../../styles/dashboard.css";
//create your first component
const CardProduct = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProductsDetails();
  }, []);

  return (
    <div className="card-dashboard">
      <div className="mails">
        <img src={props.image} />
        <div className="mail-names">{props.name}</div>
      </div>
      <div className="mail-info">{props.description}</div>
      <div className="mail-info">${props.price}</div>
      <div></div>
      <div className="bottom-info">
        <div className="check1">
          <div>
            <button
              className="btn"
              type="button"
              id="enviar"
              onClick={() => actions.delProduct(props.costumer_id, props.id)}
            >
              <i className="fa fa-solid fa-trash"></i>
            </button>
            <Link
              to={"/product/" + props.id}
              className="btn me-3 fa fa-solid fa-pen"
            />
          </div>
        </div>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default CardProduct;
