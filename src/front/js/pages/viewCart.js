import React, { useContext, useEffect } from "react";
import Cart from "../component/cart.js";
import { Footer } from "../component/footer.js";
import { Context } from "../store/appContext.js";
import { Link, useParams, Navigate } from "react-router-dom";


//create your first component
const ViewCart = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

const prices=[];
const days=[];
const totalPriceYaDeTodo=[];

  let finalPrice = 0;
  
  for (let i = 0; i < store.productsCart.length; i++) {
    prices.push(store.productsCart[i].productinfo.price) ;
  }

  for (let i = 0; i < store.productsCart.length; i++) {
    days.push(store.productsCart[i].quantity) ;
  }

  for (let i = 0; i < store.productsCart.length; i++) {
     totalPriceYaDeTodo.push(prices[i]*days[i])
  }

  for (let i = 0; i < store.productsCart.length; i++) {
    finalPrice +=totalPriceYaDeTodo[i] ;
  }

  const alquilar = async () => {
    let total = finalPrice * 1.22 ;
    console.log(total);
    await actions.pagoMercadoPago(total);
    let direccion = await store.mercadoPago.init_point;
    window.location.replace(direccion);
  };

  useEffect(() => {
    actions.getCart(localStorage.getItem("costumer_id"));
  }, [store.productsCart]);

  return localStorage.getItem("costumer_id") === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="">
      <div className="text-center mt-5">
        <div>
          <h1>
            <strong> Carro de la compra </strong>{" "}
          </h1>{" "}
        </div>{" "}
        <div>
          <h3>
            Los gastos de envío y los códigos de descuento se confirman al
            finalizar la compra.{" "}
          </h3>{" "}
        </div>{" "}
      </div>{" "}
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
      quantity={cadaProducto.quantity}
    />
  ))}
  <div className="row my-3">
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Subtotal</h5>
          <h5 className="card-title">Impuestos</h5>
          <h1 className="card-title">Total</h1>
        </div>
        
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">$ {finalPrice}</h5>
          <h5 className="card-title">$ {finalPrice * 0.22}</h5>
          <h1 className="card-title">$  {finalPrice * 1.22}</h1>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-sm btn-primary rounded-1 m-3 px-3"
        onClick={alquilar}
      >
        Alquilar
      </button>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <button
        className="btn btn-danger"
        type="button"
        id="enviar"
        onClick={() =>
          actions.delAllCart(localStorage.getItem("costumer_id"))
        }
      >
        Eliminar todos
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default ViewCart;
