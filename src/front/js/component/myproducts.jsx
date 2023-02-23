import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

// import "../../styles/dashboard.css";

import MyCardsView from "../pages/cardProduct.jsx";

const MyProducts = function () {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.products[0].name);
  const [description, setDescription] = useState(store.products[0].description);
  const [price, setPrice] = useState(store.products[0].price);

  useEffect(() => {
    actions.getProductsDetails();
    console.log(store.products);
    actions.updateProduct(params.id);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="dashboard">
      <div className="left">
        <div className="navigation">
          <div className="wrapper2">
            <div className="abilan"></div>
            <a className="compose" href="/newProduct">
              Añadir Producto
              <span className="plus"></span>
            </a>
            <div className="folders">Dashboard</div>
            <div className="folder-icons">
              <div className="icon1">
                <img src="https://i.ibb.co/qdgf3TJ/envelope.png" />
              </div>
              <div className="icon-name1">Inbox</div>
            </div>
            <div className="folder-icons">
              <div className="icon1">
                <i className="fa fa-duotone fa-folder-open"></i>
              </div>
              <div className="icon-name">Mis Rentas</div>
            </div>
            <div className="folder-icons">
              <div className="icon1">
                <i className="fa fa-solid fa-box-open"></i>
              </div>
              <div className="icon-name">Productos</div>
            </div>
            <div className="folder-icons">
              <div className="icon1">
                <i className="fa fa-solid fa-users"></i>
              </div>
              <div className="icon-name">Clientes</div>
            </div>
            <div className="folder-icons">
              <div className="icon1">
                <i className="fa fa-solid fa-user"></i>
              </div>
              <div className="icon-name">Mi Perfil</div>
            </div>
            <div className="folder-icons">
              <div className="icon1">
                <i className="fa fa-regular fa-cart-arrow-down"></i>
              </div>
              <div className="icon-name">Carrito</div>
            </div>
            <div className="folders">Clientes</div>
            <div className="folder-icons">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" />
              </div>
              <div className="names">Don Allen</div>
            </div>
            <div className="folder-icons">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/women/71.jpg" />
              </div>
              <div className="names">Aaron Tim</div>
            </div>
            <div className="folder-icons">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" />
              </div>
              <div className="names">Jack Joe</div>
            </div>
            <div className="folders">Labels</div>
            <div className="section1">
              <button className="btn buton1">
                {" "}
                Important
                <span className="tag">
                  <img src="https://i.ibb.co/Zdx3jGx/tag.png" />
                </span>
              </button>

              <button className="btn buton2">
                {" "}
                New
                <span className="tag">
                  <img src="https://i.ibb.co/N1SMfgQ/tag.png" />
                </span>
              </button>
            </div>
            <div className="section2">
              <button className="btn buton3">
                {" "}
                Old
                <span className="tag">
                  <img src="https://i.ibb.co/C5q0MDM/tag.png" />
                </span>
              </button>
              <button className="btn buton4">
                {" "}
                Priority
                <span className="tag">
                  <img src="https://i.ibb.co/DMmSZW0/tag.png" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <br />
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
  );
};

export default MyProducts;
