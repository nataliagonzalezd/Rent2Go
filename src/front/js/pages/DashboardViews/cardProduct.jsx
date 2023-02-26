import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import CardProduct from "../../component/dashboard/cardmyproducts.jsx";

const MyCardsView = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProductsDetails();
    console.log(store.products);
  }, []);

  return (
    <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
      <div className="col-12">
        {store.products.map((cadaProducto, index) => (
          <CardProduct
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

export default MyCardsView;
