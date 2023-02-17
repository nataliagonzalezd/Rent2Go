import React, { useContext, useEffect } from "react";
import { Navbar } from "reactstrap";
import ProductDetails from "../component/productDetails.jsx";
import RelatedProduct from "../component/relatedProduct.jsx";
import VendorReviews from "../component/vendorReviews.jsx";
import { Footer } from "../component/footer.js";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

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
      <Navbar />
      <div className="mx-5">
        {store.productsDetail.map((cadaProducto, index) => (
          <ProductDetails
            key={index}
            id={cadaProducto.id}
            name={cadaProducto.name}
            price={cadaProducto.price}
            description={cadaProducto.description}
            image={cadaProducto.image}
            costumer_id={cadaProducto.costumer_id}
          />
        ))}
        <div className="card mx-1 my-5">
          <h3 className="text-start mx-3 mt-2"> Productos Relacionados </h3>{" "}
          <div className="container-fluid row g-4 my-2">
            <div className="col-3">
              <RelatedProduct />
            </div>{" "}
            <div className="col-3">
              <RelatedProduct />
            </div>{" "}
            <div className="col-3">
              <RelatedProduct />
            </div>{" "}
            <div className="col-3">
              <RelatedProduct />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <VendorReviews />
      </div>{" "}
      {/* <Footer /> */}
    </div>
  );
};

export default ViewProductDetails;
