import React, { useContext, useEffect } from "react";
import ProductDetails from "../component/productDetails.jsx";
import RelatedProduct from "../component/relatedProduct.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Maps } from "../component/maps.jsx";
import VendorReviews from "../component/vendorReviews.jsx";
import "leaflet/dist/leaflet.css";

//create your first component
const ViewProductDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getProductsDetail(params.costumer_id, params.id);
    console.log(store.productsDetail);
  }, []);

  return (
    <div>
      <div className="mx-5">
        {store.productsDetail.map((cadaProducto, index) => (
          <ProductDetails
            key={index}
            id={cadaProducto.id}
            name={cadaProducto.name}
            price={cadaProducto.price}
            description={cadaProducto.description}
            image={cadaProducto.image}
            image2={cadaProducto.image2}
            image3={cadaProducto.image3}
            image4={cadaProducto.image4}
            costumer_id={cadaProducto.costumer_id}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewProductDetails;
