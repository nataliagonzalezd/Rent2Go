import React from "react";
import "../../../styles/dashboard.css";

const Dashboard = function () {
  return (
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
  );
};

export default Dashboard;
