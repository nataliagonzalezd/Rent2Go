import React from "react";

import { Footer } from "../component/footer.js";
import Jumbotroncatalogo from "../component/jumbotroncatalogo.js";
import Filtroscatalogo from "../component/filtroscatalogo.js";
import Cardscatalogo from "../component/cardscatalogo.js";

//create your first component
const CatalogoVista = () => {
  return (
    <div className="text-center bg-light bg-gradient">
      <Jumbotroncatalogo className="" />
      <div className="mx-5 mt-5">
        <Filtroscatalogo />
      </div>
      <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
        <div className="col-18">
          <Cardscatalogo />
        </div>
      </div>
    </div>
  );
};

export default CatalogoVista;
