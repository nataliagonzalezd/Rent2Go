import React, { Component, useState, useContext, useCallback } from "react";
import { Context } from "../store/appContext.js";
import { useDropzone } from "react-dropzone";
import "../../styles/newProduct.css";
import anime from "animejs";
import "../../styles/uploadImage.css";
import Swal from "sweetalert2";

export const NewProduct = () => {
  // ---> Funcion onDrop guarda archivos seleccionados

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const { actions, store } = useContext(Context);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  console.log(images);

  function productAdded() {
    if (datas) {
      Swal.fire({
        icon: "success",
        title: "Producto creado con éxito",
        confirmButtonColor: "#2e2c3c",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
        footer: '<a href="">Completa todos los campos requeridos</a>',
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
    actions.addProduct(productName, description, price, image);
    setProductName("");
    setDescription("");
    setPrice("");
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const form = new FormData();
    form.append("file", files[0]);
    form.append("upload_preset", "cloudy");
    form.append("timestamp", (Date.now() / 1000) | 0);
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxhknbsqr/image/upload",
      {
        method: "POST",
        body: form,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
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
    <div className="page">
      <div className="container">
        <div className="left">
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
              <label htmlFor="name">Nombre del Producto</label>
              <input
                type="text"
                id="name"
                onFocus={(e) => updateAnimation("path", 0)}
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                id="description"
                onFocus={(e) => updateAnimation("path", -336)}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <label htmlFor="price">Precio</label>
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
              <label htmlFor="InsertImage" className="mt-5">
                Insertar Imagenes:
              </label>
              <label className="form-label" htmlFor="customFile">
                Portada
              </label>
              <input
                type="file"
                className="form-control"
                id="customFile"
                accept="image/*"
                title="Portada"
                onChange={uploadImage}
              />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="form-label" htmlFor="customFile">
                  Insertar +
                </label>
              </div>
              <button
                className="btn btn-product mt-4 ms-4"
                onClick={productAdded}
              >
                Crear Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
