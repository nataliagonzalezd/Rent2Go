import React, { useContext, useEffect } from "react";
import { Navbar } from "reactstrap";
import Cart from "../component/cart.js";
import { Footer } from "../component/footer.js";
import { Context } from "../store/appContext.js";
import { Link, useParams } from "react-router-dom";

//create your first component
const ViewCart = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getCart(params.costumer_id);
    console.log(params.costumer_id);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="text-center mt-5">
        <div>
          <h1>
            <strong>Carro de la compra</strong>
          </h1>
        </div>
        <div>
          <h3>
            Los gastos de envío y los códigos de descuento se confirman al
            finalizar la compra.
          </h3>
        </div>
      </div>
      <div className="mx-5">
        {store.productsCart.map((cadaProducto, index) => (
          <Cart
            key={index}
            id={cadaProducto.productinfo.id}
            name={cadaProducto.productinfo.name}
            price={cadaProducto.productinfo.price}
            description={cadaProducto.productinfo.description}
            image={cadaProducto.productinfo.image}
            costumer_id={cadaProducto.productinfo.costumer_id}
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
      {/* <Footer /> */}
    </div>
  );
};

export default ViewCart;
