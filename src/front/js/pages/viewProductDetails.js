import React from "react";
import { Navbar } from "reactstrap";
import ProductDetails from "../component/productDetails.jsx";
import RelatedProduct from "../component/relatedProduct.jsx";
import VendorReviews from "../component/vendorReviews.jsx";
import { Footer } from "../component/footer.js";

//create your first component
const ViewProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5">
        <ProductDetails />
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
      <Footer />
    </div>
  );
};

export default ViewProductDetails;
