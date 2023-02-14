import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer.js";
import Jumbotroncatalogo from "../component/jumbotroncatalogo.js";
import Filtroscatalogo from "../component/filtroscatalogo.js";
import Cardscatalogo from "../component/cardscatalogo.js";

//create your first component
const CatalogoVista = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center bg-light bg-gradient">
      <Jumbotroncatalogo className="" />
      <div className="mx-5 mt-5">
        <Filtroscatalogo />
      </div>
      <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
        <div className="col-12">
          {store.products.map((cadaProducto, index) => (
            <Cardscatalogo
              key={index}
              id={index + 1}
              name={cadaProducto.name}
              price={cadaProducto.price}
              description={cadaProducto.description}
              image={cadaProducto.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoVista;
