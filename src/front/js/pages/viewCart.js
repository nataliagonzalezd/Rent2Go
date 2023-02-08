import React from "react";
import { Navbar } from "reactstrap";
import Cart from "../component/cart.js";
import { Footer } from "../component/footer.js";

//create your first component
const ViewCart = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-5">
        <div className="text-center mt-5">
          <div >
            <h1>
              <strong>Carro de la compra</strong>
            </h1>
          </div>
          <div>
          <h3>
          Los gastos de envío y los códigos de descuento se confirman al finalizar la compra.
            </h3>
          </div>
        </div>

        {/* card Carrito */}
        <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
          <div className="col-8">
            <Cart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
