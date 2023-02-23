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
    <div>
      <h1>{props.title}</h1>
      <h2>Precio: {props.price}</h2>
      <div>
        <h3>Selecciona las fechas:</h3>
        <div>
          Desde:
          <input type="date" value={moment(startDate).format('YYYY-MM-DD')} onChange={(event) => handleDateChange(event.target.value)} />
        </div>
        <div>
          Hasta:
          <input type="date" value={moment(endDate).format('YYYY-MM-DD')} onChange={(event) => handleDateChange(event.target.value)} />
        </div>
        <div>
          <h3>Número de días: {numDiasValue}</h3>
          <label htmlFor="numDias">Actualiza el número de días:</label>
          <input type="number" id="numDias" value={numDiasValue} onChange={handleNumDiasChange} />
        </div>
        <div>
          <h3>Costo total: {costoTotal}</h3>
        </div>
      </div>
    </div>
      {/* Detalles del producto */}
      <div className="card mx-1 my-5">
        <div className="text-start mx-3 text-muted mt-2">
          <h6>
            Categoria <i className="fa fa-solid fa-angle-right mx-1"></i>{" "}
            Camping
          </h6>
        </div>
        <div className="row g-0 mb-3">
          <div className="col-md-1 d-flex justify-content-center d-flex align-items-center">
            {/* Imagenes pequenas del producto */}
            <div className="card d-flex align-items-center mx-3 border border-0">
              <img
                src={props.image}
                className="card-img my-2 img-thumbnail"
                alt="..."
              />
              <img
                src={props.image}
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
              <img
                src={props.image}
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
              <img
                src={props.image}
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
            </div>
          </div>
          {/* Imagen grande del producto */}
          <div className="col-md-7 my-4">
            <img
              src={props.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          {/* Form con detalles del producto */}
          <div className="col-md-4 d-flex align-items-center">
            <form className="card-body mx-3 border rounded">
              {/* Nombre y descripcion */}
              <div className="d-flex my-0">
                <div className="w-100 text-start">
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
              <p className="card-text text-start text-muted my-0">
                {props.description}
              </p>
              {/* Reviews del producto */}
              <div className="text-start my-0">
                <i className="fa fa-solid fa-star text-start"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-duotone fa-star-half"></i> (3)
              </div>
              {/* Precio */}
              <div className=" text-start">
                <h3 className="card-title mt-3 mb-0"> $ {props.price}</h3>
                <p className="text-muted">Por dia</p>
              </div>

              {/* Calendario de google  */}
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Desde"
                />
                <DatePicker
                  selected={endDate}
                  onChange={handleDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Hasta"
                />
              </div>
              {/* Calendario seleccion periodo de alquiler */}
              {/* <div className="row g-3 mb-4 d-flex justi">
                <div className="col-md-5 text-start">
                  <label htmlFor="desde" className="form-label fw-bold">
                    Desde:
                  </label>
                  <input type="date" className="form-control" id="desde" />
                </div>
                <div className="col-md-5 text-start">
                  <label
                    htmlFor="hasta"
                    className="form-label text-start fw-bold"
                  >
                    Hasta:
                  </label>
                  <input type="date" className="form-control" id="hasta" />
                </div>
              </div> */}
              {/* Seleccion de cantidad */}
              <div className="row row-cols-lg-auto g-3 mb-2">
                {/* prueba */}
                <div>
                  <label htmlFor="numDias">Número de días:</label>
                  <input
                    id="numDias"
                    type="number"
                    value={numDiasValue}
                    onChange={handleNumDiasChange}
                    disabled
                  />

                  <p>Costo total de la reserva: {costoTotal}</p>
                </div>
              </div>
              {/* Stock */}
              <h6 className="card-text text-start">
                <i className="fa fa-solid fa-box mx-1"></i>Stock
              </h6>
              <div>
                <button className="btn btn-primary" type="button" id="enviar">
                  Alquilar ahora
                </button>
              </div>
            </form>
            <button
              className="btn btn-primary"
              onClick={() => {
                const funcion1 = actions.addCart(params.costumer_id, params.id);
                const funcion2 = cartAdded();
                funcion1();
                funcion2();
              }}
            >
              Anadir al carrito
            </button>
            <Link
              to={"/cart/" + props.costumer_id}
              className="btn btn-dark me-5"
            >
              Carrito
            </Link>
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
          {/* Tamano y Dimensiones */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Tamano y Dimensiones
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <ul className="text-start">
                  <li>Capacidad: 3-4 personas</li>
                  <li>Peso: 980 g</li>
                  <li>Tipo: Playera</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Opiniones del producto */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Opiniones del producto{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body text-start">
                <h5 className="mb-4">
                  {" "}
                  4.5 <i className="fa fa-solid fa-star"></i>
                  <i className="fa fa-solid fa-star"></i>
                  <i className="fa fa-solid fa-star"></i>
                  <i className="fa fa-solid fa-star"></i>
                  <i className="fa fa-duotone fa-star-half"></i> (3)
                </h5>
                <hr />
                <div>
                  <p>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore architecto, dignissimos odio aliquam, voluptates ut
                    aperiam eligendi iste quasi, asperiores molestiae
                    laudantium? Maxime quas tempora in quasi cum, similique
                    itaque!
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore architecto, dignissimos odio aliquam, voluptates ut
                    aperiam eligendi iste quasi, asperiores molestiae
                    laudantium? Maxime quas tempora in quasi cum, similique
                    itaque!
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore architecto, dignissimos odio aliquam, voluptates ut
                    aperiam eligendi iste quasi, asperiores molestiae
                    laudantium? Maxime quas tempora in quasi cum, similique
                    itaque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
