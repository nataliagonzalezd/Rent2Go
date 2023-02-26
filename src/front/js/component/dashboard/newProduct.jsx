import React, { Component, useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import "../../../styles/newProduct.css";
import "../../../styles/uploadImage.css";
import { Link } from "react-router-dom";
import anime from "animejs";
import Swal from "sweetalert2";

export const NewProduct = () => {
  const { actions, store } = useContext(Context);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [imagesCloudinary, setImagesCloudinary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  // console.log(images);
  // console.log(imagesCloudinary[0]);

  function productAdded() {
    if (store?.mensajeNuevoProducto != "Producto creado correctamente") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: '<a href="">Completa todos los campos requeridos</a>',
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Producto creado con éxito",
        confirmButtonColor: "#2e2c3c",
      });
    }
  }

  function help() {
    Swal.fire({
      title: "<strong>Información</strong>",
      icon: "info",
      html: "<b>Completa el formulario</b>",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }

  function datas(e) {
    e.preventDefault();
    actions.addProduct(productName, description, price, imagesCloudinary);
    setProductName("");
    setDescription("");
    setPrice("");
    setImages("");
  }

  const uploadImage = async (e) => {
    e.preventDefault();
    const form = new FormData();
    const files = e.target.files;
    try {
      const filesArray = Object.values(files);
      // console.log(files);
      // console.log(filesArray);
      setLoading(true);

      const response = await Promise.all(
        filesArray.map((file) => {
          form.append(`file`, file);
          form.append("upload_preset", "cloudy");
          return fetch(
            "https://api.cloudinary.com/v1_1/dxhknbsqr/image/upload",
            {
              method: "POST",
              body: form,
            }
          ).then((res) => res.json());
        })
      );

      const Urls = response.map((res) => res.secure_url);

      setImagesCloudinary(Urls);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAnimation = (target, offsetValue) => {
    if (currentAnimation) {
      currentAnimation.pause();
    }

    setCurrentAnimation(
      anime({
        targets: target,
        strokeDashoffset: {
          value: offsetValue,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      })
    );
  };

  return (
    <>
      <div className="left">
        <div className="navigation">
          <div className="wrapper2-newproduct">
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
      <div className="page">
        <div className="container">
          <div className="left-new">
            <div className="product">Nuevo Producto</div>
            <div className="eula" onClick={help}>
              Ayuda
            </div>
          </div>
          <div className="right">
            <svg viewBox="0 0 320 300">
              <defs>
                <linearGradient
                  inkscapecollect="always"
                  id="linearGradient"
                  x1="13"
                  y1="193.49992"
                  x2="307"
                  y2="193.49992"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    style={{ stopColor: "#6c90a8" }}
                    offset="0"
                    id="stop876"
                  />
                  <stop
                    style={{ stopColor: "#36393a" }}
                    offset="1"
                    id="stop878"
                  />
                </linearGradient>
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <form action="" onSubmit={datas}>
              <div className="form-new">
                <label className="label-newproduct">Nombre del Producto</label>
                <input
                  type="text"
                  id="name"
                  onFocus={(e) => updateAnimation("path", 0)}
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
                <label className="label-newproduct">Descripcion</label>
                <input
                  type="text"
                  id="description"
                  onFocus={(e) => updateAnimation("path", -336)}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <label className="label-newproduct">Precio</label>
                <input
                  type="number"
                  id="price"
                  onFocus={(e) => updateAnimation("path", -660)}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <br />
                <div className="file-input-container">
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    className="mt-5"
                    multiple
                    onChange={(e) => uploadImage(e)}
                  />
                </div>
                <button
                  className="btn-dashboard mt-5 ms-4"
                  onClick={productAdded}
                >
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
