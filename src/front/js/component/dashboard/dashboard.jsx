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
            <button className="btn-dashboard buton1">
              {" "}
              Important
              <span className="tag">
                <img src="https://i.ibb.co/Zdx3jGx/tag.png" />
              </span>
            </button>

            <button className="btn-dashboard buton2">
              {" "}
              New
              <span className="tag">
                <img src="https://i.ibb.co/N1SMfgQ/tag.png" />
              </span>
            </button>
          </div>
          <div className="section2">
            <button className="btn-dashboard buton3">
              {" "}
              Old
              <span className="tag">
                <img src="https://i.ibb.co/C5q0MDM/tag.png" />
              </span>
            </button>
            <button className="btn-dashboard buton4">
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
  );
};

export default Dashboard;
