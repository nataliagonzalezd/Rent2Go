import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Myrents from "../component/myrents";
import { useParams } from "react-router-dom";

//create your first component
const MyRent = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOrderItem(params.product_id);
    actions.getProductsDetail(params.costumer_id, params.id);
  }, []);

  return (
    <>
      <br></br>
      <br />
      <div className="text-center bg-light bg-gradient">
        <div className="mx-5 mt-5"></div>
        <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
          <div className="col-12">
            {store.orderitem.map((cadaProducto, index) => (
              <Myrents
                key={index}
                id={cadaProducto.id}
                quantity={cadaProducto.quantity}
                price={cadaProducto.price}
                product_id={cadaProducto.product_id}
                name={cadaProducto.productinfo.name}
                description={cadaProducto.productinfo.description}
                image={cadaProducto.productinfo.image}
                order_id={cadaProducto.order_id}
                costumer_id={cadaProducto.orderinfo.costumer_id}
                username={cadaProducto.customerinfo.username}
                phone={cadaProducto.customerinfo.phone}
                email={cadaProducto.customerinfo.email}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRent;
