import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import Diseño from "../../img/Diseño.png";
import { useParams } from "react-router-dom";
import "../../styles/cardscatalogo.css";

const Jumbotroncatalogo = function (props) {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    actions.getCategory();
    console.log();
  }, []);
  console.log(store.category);
  console.log(store.category[props.id - 1]);
  return (
    <>
      <div className="card text-bg-dark d-flex border border-dark">
        <a href={`/category/${props.id}/`}>
          <img
            src={store?.category[props.id - 1]?.image}
            className="card-img w-100"
            alt=""
          />
        </a>
        <div className="card-img-overlay flex-column d-flex align-items-start">
          <a className="card-text btn text-white" href="/" id="bottondetalless">
            ←Pantalla de Inicio{" "}
          </a>
          <h1 className="card-title text-white">
            {" "}
            {store?.category[props.id - 1]?.name}{" "}
          </h1>
        </div>
        {/* {store.category.map((item, index) => (
          <>
            <a href={`/category/${item.id}/`}>
              <img src={item.image} className="card-img w-100" alt="" />
            </a>
            <div className="card-img-overlay flex-column d-flex align-items-start">
              <a className="card-text btn text-white" href="/">
                ←Pantalla de Inicio{" "}
              </a>
              <h1 className="card-title text-white"> {item.name} </h1>
            </div>
          </>
        ))} */}
      </div>{" "}
    </>
  );
};

export default Jumbotroncatalogo;
