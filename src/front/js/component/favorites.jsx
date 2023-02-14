import React from "react";

const Favorites = function () {
    return (
        <div className="card mx-3 my-3 text-dark">
            <div class="row g-0">
                <div class="col-md-3 mx-1 my-3">
                    <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-camera-icon-image_2287715.jpg" class="img-fluid rounded-start w-100 h-100" alt="..." />
                </div>
                <div class="col-md-6 mx-1 my-3">
                    <h5 class="card-title">Nombre Producto</h5>
                    <p class="card-text text-dark">Descripcion</p>

                </div>
                <div class="col-md-2 mx-1 my-3">
                    <div className="mb-3">
                        <h5 class="card-title my-0">$Precio</h5>
                        <p class="card-text"><small class="text-muted">Por dia</small></p>
                    </div>

                    <div className="align-text-bottom text-dark">
                        <a href="" className="text-dark"> <i className="fa fa-solid fa-trash"></i> Eliminar favorito </a>
                    </div>



                </div>
            </div>

        </div>

    );


};

export default Favorites;