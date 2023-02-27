import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Jumbotroncatalogo from "../component/jumbotroncatalogo.js";
import Filtroscatalogo from "../component/filtroscatalogo.js";
import Cardscatalogo from "../component/cardscatalogo.js";
import { useParams } from "react-router-dom";

//create your first component
const CatalogoVista = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getProductsCategory(params.category_id);
    console.log(store.productsCategory);
  }, []);

  return (
    <div className="text-center bg-light bg-gradient">
      <Jumbotroncatalogo id={params.category_id} />
      <div className="mx-5 mt-5"></div>
      <br />
      <div className="">
        <div className="col-12  d-flex flex-wrap justify-content-center">
          {store.categoryproducts.map((cadaProducto, index) => (
            <Cardscatalogo
              key={index}
              id={cadaProducto.id}
              name={cadaProducto.name}
              price={cadaProducto.price}
              description={cadaProducto.description}
              image={cadaProducto.image}
              costumer_id={cadaProducto.costumer_id}
              category_id={cadaProducto.category_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoVista;
