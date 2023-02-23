import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import MyProducts from "../component/myproducts.jsx";
import { Navigate } from "react-router-dom";

const MyProductsView = () => {
  const { store, actions } = useContext(Context);


  useEffect(() => {
    actions.getProductsDetails(localStorage.getItem("costumer_id"));
  }, [store.products]);

  return localStorage.getItem("costumer_id") === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
      <div className="col-12">
        {store.products.map((cadaProducto, index) => (
          <MyProducts
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
  );
};

export default MyProductsView;
