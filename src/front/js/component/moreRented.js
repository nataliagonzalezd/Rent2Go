import React from "react";

const MoreRented = function () {
  return (
    <div className="card">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_812123-MLU48849214145_012022-O.jpg"
        width="500"
        height="350"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> Sobre de dormir </h5>{" "}
        <p className="card-text"> Sobre, azul. </p>{" "}
        <p className="card-text"> 100 $. </p>{" "}
      </div>{" "}
      <div className="card-footer">
        <a href="#" className="btn btn-primary">
          {" "}
          Find Out More!{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default MoreRented;
