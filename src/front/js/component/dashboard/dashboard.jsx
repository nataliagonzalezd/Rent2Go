import React from "react";
import "../../../styles/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = function () {
  return (
    <div className="left">
      <div className="navigation">
        <div className="wrapper2">
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
  );
};

export default Dashboard;
