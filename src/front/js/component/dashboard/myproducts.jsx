import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/dashboard.css";
import MyCardsView from "../../pages/cardProduct.jsx";
import { useParams } from "react-router-dom";
import Dashboard from "./dashboard.jsx";

const MyProducts = function () {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const params = useParams();

  useEffect(() => {
    actions.getProductsDetails();
    console.log(store.products);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    actions.updateProduct(params.id, name, description, price);
  };

  return (
    <>
      <div className="dashboard">
        <Dashboard />
        <div className="right-side">
          <div className="right-header">
            <div className="top-bar">
              <div className="top-bar-justify">
                <div className="big-inbox">Productos</div>
              </div>
            </div>
            <hr className="new-hr" />
            <div className="right-bottom">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" />
                </label>
                <button
                  className="btn-dashboard"
                  type="button"
                  id="enviar"
                  onClick={() =>
                    actions.delAllProducts(localStorage.getItem("costumer_id"))
                  }
                >
                  Eliminar todos
                </button>
                <div className="down-arrow">
                  <img src="https://i.ibb.co/WDqrXj6/drop-down-arrow.png" />
                </div>
              </div>
              <div className="search-arrow">
                <img src="https://i.ibb.co/cx2t05H/scroll-arrows.png" />
              </div>
            </div>
          </div>
          <div className="right-body">
            <div className="scroll-cards">
              <MyCardsView />
            </div>
            <div className="message">
              <div className="mes-date"></div>
              <div className="message-from"></div>
              <form onSubmit={handleFormSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Description:
                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Price:
                  <input
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </label>
                <button type="submit">Update Product</button>
              </form>
              <div className="attachment-last">
                <img src="https://i.ibb.co/FW9tsHK/attachment.png" />
                <div className="att-write">Attachment (80MB)</div>
                <button className="btn1 buton0">
                  {" "}
                  View All
                  <span className="tag" />
                </button>
                <button className="btn1 buton9"> Download All</button>
              </div>
              <div className="son-images">
                <div className="inside-img">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                </div>
                <button className="son-buton"> 20+</button>
              </div>
              <button className="btn2 butona">
                {" "}
                Reply
                <span className="tag">
                  <img src="https://i.ibb.co/GQf8frw/reply.png" />
                </span>
              </button>

              <button className="btn2 butonb">
                {" "}
                Forward
                <span className="tag">
                  <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
