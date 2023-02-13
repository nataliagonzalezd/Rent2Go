import React, { useContext, useEffect }from "react";
import { Navbar } from "reactstrap";
import Cart from "../component/cart.js";
import { Footer } from "../component/footer.js";
import { Context } from "../store/appContext.js";


//create your first component
const ViewCart = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="">
      <Navbar />
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
      <div className="mx-5">
      {store.products.map((cadaProducto, index) => (
          <Cart
            key={index}
            id={index + 1}
            name={cadaProducto.name}
            price={cadaProducto.price}
            description={cadaProducto.description}
            image={cadaProducto.image}
          />
        ))}
        {/* <div className="text-center mt-5">
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
        {/* <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
          <div className="col-8">
            <Cart />
          </div>
        </div> */} 
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
