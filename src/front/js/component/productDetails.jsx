import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import moment from 'moment';
// import Moment from 'react-moment';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/productDetails.css";

// const ProductDetails = function (props) {
//   const { store, actions } = useContext(Context);

//   const params = useParams();

//   // const para el calendario
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   // const [startStore, setStartStore] = useState(null);
//   // const [endStore, setEndStore] = useState(null);

//   const [numDias, setNumDias] = useState(null); //(seteo el numero de dias)
//   const numDiasValue = numDias !== null ? numDias : '';

//   const start = new Date(startDate);
//   const end = new Date(endDate);

//   // setStartStore(start)
//   // setEndStore(end)

//   const oneDay = 24 * 60 * 60 * 1000;
//   const days = Math.round(Math.abs((end - start) / oneDay));
//   const precioProducto = props.price;
//   const costoTotal = numDias * precioProducto;

//   const handleDateChange = (date) => {
//     if (!startDate || (startDate && endDate)) {
//       setStartDate(date);
//       setEndDate(null);
//     } else if (startDate && !endDate) {
//       if (date >= startDate) {
//         setEndDate(date);
//       } else {
//         setEndDate(startDate);
//         setStartDate(date);
//       }
//     }
//     // Guardar fechas en localStorage
//     localStorage.setItem('startDate', startDate);
//     localStorage.setItem('endDate', endDate);
//   };
//   // Este useEffect no anda <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// useEffect(() => {
//   const storedStartDate = localStorage.getItem('startDate');
//   const storedEndDate = localStorage.getItem('endDate');

//   if (storedStartDate && moment(storedStartDate).isValid()) {
//     setStartDate(new Date(storedStartDate));
//   }
//   if (storedEndDate && moment(storedEndDate).isValid()) {
//     setEndDate(new Date(storedEndDate));
//   }
// }, []);

//   // useEffect para el calendario
//   useEffect(() => {
//     setNumDias(days);
//     console.log(days);
//   }, [days]);

//   // Funcion para actualizar el estado de los dias
//   function handleNumDiasChange(event) {
//     setNumDias(event.target.value); // Actualizamos el estado de numDias
//   }
//       // useEffect para el calendario y flux
//       useEffect(() => {
//         actions.costoTotalFlux(costoTotal)
//      console.log(store.costoTotalStore)
//       }, [costoTotal]);
//   // fin calendario --------------- 

//   useEffect(() => {
//     console.log(params.costumer_id, params.id);
//     console.log(store.cart);
//     // actions.addCart(params.costumer_id, params.id);
//   }, []);

//   function cartAdded() {
//     Swal.fire({
//       icon: "success",
//       title: "Añadido al carrito ",
//       confirmButtonColor: "#2e2c3c",
//     });
//   }

const ProductDetails = function (props) {
  const { store, actions } = useContext(Context);

  const params = useParams();

  // const para el calendario
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [numDias, setNumDias] = useState(null); //(seteo el numero de dias)
  const numDiasValue = numDias !== null ? numDias : '';

  useEffect(() => {
    const storedStartDate = localStorage.getItem('startDate');
    const storedEndDate = localStorage.getItem('endDate');

    if (storedStartDate && moment(storedStartDate).isValid()) {
      setStartDate(moment(storedStartDate)._d);
    }
    if (storedEndDate && moment(storedEndDate).isValid()) {
      setEndDate(moment(storedEndDate)._d);
    }
  }, []);

  useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.round(Math.abs((end - start) / oneDay));
    setNumDias(days);
  }, [startDate, endDate]);

  const precioProducto = props.price;
  const costoTotal = numDias * precioProducto;

  const handleDateChange = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date >= startDate) {
        setEndDate(date);
      } else {
        setEndDate(startDate);
        setStartDate(date);
      }
    }
    // Guardar fechas en localStorage
    localStorage.setItem('startDate', date);
    localStorage.setItem('endDate', endDate);
  };

  // useEffect para el calculo del costo total
  useEffect(() => {
    actions.costoTotalFlux(costoTotal)
  }, [costoTotal]);

  // Funcion para actualizar el estado de los dias
  function handleNumDiasChange(event) {
    setNumDias(event.target.value); // Actualizamos el estado de numDias
  }

  // fin calendario --------------- 

  useEffect(() => {
    console.log(params.costumer_id, params.id);
    console.log(store.cart);
    // actions.addCart(params.costumer_id, params.id);
  }, []);

  function cartAdded() {
    Swal.fire({
      icon: "success",
      title: "Añadido al carrito ",
      confirmButtonColor: "#2e2c3c",
    });
  }

  return (
    <>
      {/* Detalles del producto */}
<div className="card mx-1 my-5 bg-form">
  <div className="row g-0 mb-3">
  <div className="col-md-8 my-4">
            {/* <img
              src={props.image}
              className="img-fluid rounded-start"
              alt="..."
            /> */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade ">
              <div className="carousel-inner d-flex justify-content-center d-flex align-items-center">
                <div className="carousel-item active d-flex justify-content-center d-flex align-items-center">
                  <img src={props.image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item d-flex justify-content-center d-flex align-items-center">
                  <img src={props.image2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-itemd-flex justify-content-center d-flex align-items-center">
                  <img src={props.image3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* Form con detalles el producto */}
          <div className="col-md-4 d-flex align-items-center mt-3 my-3">
            <form className="card-body mx-3 ">
              {/* Nombre y descripcion */}
              <div className="d-flex my-0">
                <div className="w-100 text-start fs-3">
                  <h2>{props.name}</h2>
                </div>
                <div className="p-2 flex-shrink-1">
                  <button
                    className="btn"
                    type="button"
                    id="enviar"
                    onClick={() =>
                      actions.addFavorites(params.costumer_id, params.id)
                    }
                  >
                    <i className="fa  fa-ligth fa-heart"></i>
                  </button>
                </div>
              </div>

              {/* Precio */}
              <div className=" text-start">
                <h3 className="card-title mt-3 mb-0"> $ {props.price}</h3>
                <p className="text-muted">Por dia</p>
              </div>

              {/* Calendario de google  */}
              <div className="text-dark d-flex justify-content-start">
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Desde"
                    className="text-dark"
                  />
                </div>

                <div>
                  <DatePicker
                    selected={endDate}
                    onChange={handleDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Hasta"
                    className="text-dark"
                  />
                </div>

              </div>
              {/* Seleccion de cantidad */}
              <div className="row row-cols-lg-auto g-3 mb-2 mt-2 fs-5">
                {/* prueba */}
                <div>
                  <div className="">
                    <label htmlFor="numDias" className="text-dark fs-5">Número de días:</label>
                    <span><input
                      className="text-dark text-start fw-bold"
                      id="numDias"
                      type="number"
                      value={numDiasValue}
                      onChange={handleNumDiasChange}
                      disabled
                    />
                    </span>
                  </div>



                  <p className="text-dark mt-2 fw-bold">Costo total: ${costoTotal}</p>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-dashboard-detalles"
                  onClick={() => {
                    const funcion1 = actions.addCart(params.costumer_id, params.id, numDias);
                    const funcion2 = cartAdded();
                    funcion1();
                    funcion2();
                  }}
                >
                  <i className="fa fa-solid fa-cart-plus"></i> Anadir al carrito
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="accordion row g-0" id="accordionPanelsStayOpenExample">
          {/* Texto descriptivo del producto */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Descripción del producto
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body text-start">
                <p>{props.description}</p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default ProductDetails;
