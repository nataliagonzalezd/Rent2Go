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

  // let subtotal = 0;
  let finalPrice = 0;

  // for (let i = 0; i < store.productsCart.length; i++) {
  //   subtotal += store.productsCart[i].productinfo.price;
  // }

  for (let i = 0; i < store.productsCart.length; i++) {
    prices.push(store.productsCart[i].productinfo.price) ;
  }

  for (let i = 0; i < store.productsCart.length; i++) {
    days.push(store.productsCart[i].quantity) ;
  }

  for (let i = 0; i < store.productsCart.length; i++) {
     totalPriceYaDeTodo.push(prices[i]*days[i])
    // console.log(totalPriceYaDeTodo)
    // console.log(days[i])
    // console.log(prices[i])
    
  }

  for (let i = 0; i < store.productsCart.length; i++) {
    finalPrice +=totalPriceYaDeTodo[i] ;
  }

  const alquilar = async () => {
    let total = finalPrice * 1.22 ;
    console.log(total);
    await actions.pagoMercadoPago(total);
    let direccion = await store.mercadoPago.init_point;
    // console.log(direccion);
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
        {" "}
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
        ))}{" "}
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title"> subtotal </h5>{" "}
                  <h5 className="card-title"> impuestos </h5>{" "}
                  <h1 className="card-title"> TOTAL </h1>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title"> {finalPrice} </h5>{" "}
                  <h5 className="card-title"> {finalPrice * 0.22} </h5>{" "}
                  <h1 className="card-title"> {finalPrice * 1.22} </h1>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-12">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-sm rounded-1 m-3 px-3"
                onClick={alquilar}
              >
                Alquilar{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <button
          className="btn"
          type="button"
          id="enviar"
          onClick={() =>
            actions.delAllCart(localStorage.getItem("costumer_id"))
          }
        >
          Eliminar todos{" "}
        </button>{" "}
      </div>{" "}
      {/* <Footer /> */}{" "}
    </div>
  );
};

export default ViewCart;
