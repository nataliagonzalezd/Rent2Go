import React from "react";

const Offers = function () {
  return (
    <>
      <div className="card text-bg-dark">
        <img
          src="https://www.charruastore.com.uy/fotos/productos/56442.jpg"
          width="650"
          height="500"
          className="card-img "
          alt="..."
        />
        <div className="card-img-overlay">
          <h1 className="card-title text-dark">
            {" "}
            <strong> Publique hoy y alquile al instante </strong>{" "}
          </h1>
          <h5 className="card-title text-dark"> Promo Verano </h5>{" "}
          <p className="card-text text-dark">
            {" "}
            This is a wider card with supporting text below as a natural lead -
            in to additional content.This content is a little bit longer.{" "}
          </p>{" "}
          <p className="card-text text-dark">
            {" "}
            <small> ALQUILE AHORA </small>
          </p>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Offers;
