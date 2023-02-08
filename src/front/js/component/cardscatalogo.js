import React, { useEffect, useState } from "react";

const Cardscatalogo = function () {
  return (
    <>
      <div className="row row-cols-md-5 grid gap-3 p-2 d-flex justify-content-center">
        <div className="card d-flex">
          <img
            src="https://www.mapa.com.uy/imgs/productos/216919010.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card d-flex">
          <img
            src="https://cifer.com.uy/wp-content/uploads/2018/10/466-0112.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_929544-MLU31383067570_072019-O.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_639703-MLU46737535753_072021-O.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://dentalvita.com/uploads/producto/importar_imaxes/20846.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_600244-MLM49671970146_042022-O.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/564x/43/49/8f/43498f7ac6377b5e212b470b5d16946f.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/564x/0e/41/3f/0e413fb3a0e3d79b489d4fb620f1f1bb.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://f.fcdn.app/imgs/2c10e2/www.kroser.com.uy/krosuy/51f4/original/catalogo/86200703_1/460x460/pincel-cerda-blanca-1-kroser-pincel-cerda-blanca-1-kroser.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.saul.com.uy/content/images/thumbs/0025646_set-de-pinceles-para-unas-x-8-unidades-evok-650_450.jpeg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://aprendoendigital.com/wp-content/uploads/2020/09/BOSOBO-Juego-de-2-pinceles-de-pintura-de-punta-redonda-para-pinturas-de-nailon-para-artistas-de-pintura-acrilica-acuarela-a-854x1024.jpg"
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src={Image}
            width="500"
            height="250"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title d-flex">Nombre del producto</h5>
            <p className="card-text d-flex">Descripcion del producto</p>
            <h6 className="card-text d-flex">Precio: $99</h6>
            <button type="button" class="btn btn-primary d-flex">
              Detalles
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>Mostrando 12 de 40 Productos</p>
        <p>
          Pag{" "}
          <a
            className="link active"
            href="https://3000-nataliagonzalez-rent2go-7dnjie878bf.ws-us85.gitpod.io/CatalogoVista"
            role="button"
            aria-current="page"
          >
            1
          </a>{" "}
          de{" "}
          <a
            className="link active"
            href="https://www.youtube.com/watch?v=GuZzuQvv7uc"
            role="button"
            aria-current="page"
          >
            2
          </a>
        </p>
      </div>
    </>
  );
};

export default Cardscatalogo;
