import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/dashboard.css";
import MyCardsView from "../../pages/DashboardViews/cardProduct.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <div className="left">
          <div className="navigation">
            <div className="wrapper2-products">
              <div className="abilan"></div>
              <div className="folders"></div>
              <h5>Mi cuenta</h5>
              <div className="folder-icons">
                <div className="icon1">
                  <i className="fa fa-solid fa-upload"></i>
                </div>
                <div>
                  <Link className="icon-name btn" to={"/newProduct"}>
                    Añadir Producto
                  </Link>
                </div>
              </div>
              <div className="folder-icons">
                <div className="icon1">
                  <i className="fa fa-solid fa-box-open"></i>
                </div>
                <div>
                  <Link
                    className="icon-name btn"
                    to={"/product/" + localStorage.getItem("costumer_id")}
                  >
                    Productos
                  </Link>
                </div>
              </div>
              <div className="folder-icons">
                <div className="icon1">
                  <i className="fa fa-solid fa-users"></i>
                </div>
                <div>
                  <Link
                    className="icon-name btn"
                    to={"/editprofile/" + localStorage.getItem("costumer_id")}
                  >
                    Editar Perfil
                  </Link>
                </div>
              </div>
              <div className="folders">Clientes</div>
              <div className="folder-icons">
                <div className="avatar">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                </div>
                <div className="names">Jair Torres</div>
              </div>
              <div className="folder-icons">
                <div className="avatar">
                  <img src="https://randomuser.me/api/portraits/women/71.jpg" />
                </div>
                <div className="names">Valentina Pereyra</div>
              </div>
              <div className="folder-icons">
                <div className="avatar">
                  <img src="https://randomuser.me/api/portraits/men/54.jpg" />
                </div>
                <div className="names">Pablo Abreu</div>
              </div>
              <div className="folder-icons">
                <div className="avatar">
                  <img src="https://randomuser.me/api/portraits/men/54.jpg" />
                </div>
                <div className="names">Natalia Gonzalez</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side-products">
          <div className="right-header">
            <div className="top-bar">
              <div className="top-bar-justify">
                <div className="big-inbox">Productos</div>
              </div>
            </div>
            <hr className="new-hr" />
            <div className="right-bottom">
              <div className="check">
                <button
                  className="btn-dashboard delete-all"
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
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Nombre
                  </label>
                  <input
                    className="form-control input-products"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control input-products"
                    id="exampleInputPassword1"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label input-products"
                  >
                    Precio
                  </label>
                  <input
                    className="form-control input-products"
                    id="exampleInputPassword1"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Actualizar producto
                </button>
              </form>
              <div className="son-images">
                <div className="inside-img">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                  <img src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                </div>
                <button className="son-buton"> 3+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
