import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Cardscatalogo = function (props) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProductsDetails();
  }, []);

  return (
    <>
      <div className="row row-cols-md-5 grid gap-3 p-2 d-flex justify-content-center">
        <div className="card d-flex">
          <img
            src={props.image}
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">{props.name}</h5>
            <p className="card-text d-flex">{props.description}</p>
            <h6 className="card-text d-flex"> $ {props.price}</h6>
            <Link
              to={
                "/costumer/" + props.costumer_id + "/product/detail/" + props.id
              }
              className="btn btn-dark me-5"
            >
              Detalle
            </Link>
            <button
              className="btn btn-primary d-flex justify-content-center"
              href="viewproductdetails"
              role="button"
            >
              {" "}
              Detalles
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>Mostrando 12 de 40 Productos</p>
        <p>
          Pag{" "}
          <a
            className="link active"
            href="https://3000-nataliagonzalez-rent2go-7dnjie878bf.ws-us85.gitpod.io/CatalogoVista"
            role="button"
            aria-current="page"
          >
            1
          </a>{" "}
          de{" "}
          <a
            className="link active"
            href="https://www.youtube.com/watch?v=GuZzuQvv7uc"
            role="button"
            aria-current="page"
          >
            2
          </a>
        </p>
      </div>
    </>
  );
};

export default Cardscatalogo;
