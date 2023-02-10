import React from "react";

const ProductDetails = function () {
  return (
    <>
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
                src="https://http2.mlstatic.com/D_NQ_NP_813639-MLU53386298916_012023-O.webp"
                className="card-img my-2 img-thumbnail"
                alt="..."
              />
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_823746-MLU53386298917_012023-O.webp"
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_668156-MLU53386313895_012023-O.webp"
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_917595-MLU53386313896_012023-O.webp"
                className="card-img mb-2 img-thumbnail"
                alt="..."
              />
            </div>
          </div>
          {/* Imagen grande del producto */}
          <div className="col-md-7 my-4">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_813639-MLU53386298916_012023-O.webp"
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
                  <h2>Carpa 4 Personas</h2>
                </div>
                <div className="p-2 flex-shrink-1">
                  <button className="btn" type="button" id="enviar">
                    <i className="fa  fa-ligth fa-heart"></i>
                  </button>
                </div>
              </div>
              <p className="card-text text-start text-muted my-0">
                Impermeable Configuracion Automatica - Azul
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
                <h3 className="card-title mt-3 mb-0">$120</h3>
                <p className="text-muted">Por dia</p>
              </div>

              {/* Calendario seleccion periodo de alquiler */}
              <div className="row g-3 mb-4 d-flex justi">
                <div className="col-md-5 text-start">
                  <label for="desde" className="form-label fw-bold">
                    Desde:
                  </label>
                  <input type="date" className="form-control" id="desde" />
                </div>
                <div className="col-md-5 text-start">
                  <label for="hasta" className="form-label text-start fw-bold">
                    Hasta:
                  </label>
                  <input type="date" className="form-control" id="hasta" />
                </div>
              </div>
              {/* Seleccion de cantidad */}
              <div className="row row-cols-lg-auto g-3 mb-2">
                <div className="col-12 d-flex align-items-center">
                  <h5>Cantidad</h5>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <select className="form-select" id="inlineFormSelectPref">
                    <option selected>1 unidad</option>
                    <option value="1">1 unidad</option>
                    <option value="2">1 unidad</option>
                    <option value="3">1 unidad</option>
                  </select>
                </div>
              </div>
              {/* Stock */}
              <h6 className="card-text text-start">
                <i className="fa fa-solid fa-box mx-1"></i>Stock
              </h6>
              <div>
                <a
                  className="btn btn-info container text-light"
                  type="button"
                  href="viewcart"
                  id="enviar"
                  role="button"
                >
                  <i className="fa fa-solid fa-cart-plus mx-1"></i>Anadir al
                  carrito
                </a>
                <button
                  className="btn btn-primary container mt-3"
                  type="button"
                  id="enviar"
                >
                  Alquilar ahora
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
                <p>
                  Titulo de Catalogo Original : 4 Person Easy Pop Up Tent
                  Waterproof Automatic Setup 2 Doors-instant Family Tents For
                  Camping Hiking & Traveling Dark Blue. configuracion facil: la
                  carpa emergente instantanea con postes preensamblados se
                  configura en segundos, simplemente abra la bolsa y sueltela,
                  tan facil y agradable y configure la carpa. no hay necesidad
                  de perder un buen tiempo de campamento para instalar tiendas
                  de campaña, incluso si llueve repentinamente, no tiene que
                  estar nervioso. - disfrute de la brisa: las puertas delantera
                  y trasera de malla brindan suficiente flujo de aire para que
                  pueda disfrutar de la brisa. cerradas solo con el material de
                  la pantalla o selladas con la puerta de nailon para una
                  privacidad total, lo cual es tan conveniente que no tiene que
                  salir. afuera para cerrar las ventanas cuando llueve. - carpa
                  desplegable para 4 personas. interior espacioso: piso de 9.2 x
                  6.6 pies; la carpa emergente se adapta a 3-4 personas en saco
                  de dormir o 2-3 personas con muchos equipos de campamento;
                  altura del centro: 4,3 pies. incluye 8 estacas para tienda de
                  campaña para mantener la tienda estable, 4 cuerdas de viento
                  de 3 mm. - tienda con vestibulo: tienda de campaña familiar
                  impermeable y resistente a los desgarros, hecha de tela de
                  poliester 190t, la tela de la base es 110g pe gris. puede
                  dejar los zapatos y la ropa exterior embarrados en el
                  vestibulo y no necesita llevar suciedad a la tienda principal.
                  - disfrute de la carpa de ocio: esta carpa emergente es
                  adecuada para campamentos informales, descanso en el patio
                  trasero, festivales, actividades recreativas al aire libre,
                  exploradores de niños / niñas, mochileros y reuniones en la
                  playa. los bolsillos de almacenamiento y el gancho de la
                  linterna mantienen los articulos ordenados y organizados.
                </p>
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
