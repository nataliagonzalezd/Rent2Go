import React from "react";

const VendorReviews = function () {
    return (

        <div className="card my-5">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" className="img-fluid rounded-start mw-50 mh-50" alt="..." />
                    <div className="text-center">
                        <p> Nombre Vendedor</p>
                        <p><i className="fa fa-solid fa-star text-start"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-duotone fa-star-half"></i> (3)</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body text-start">
                        <div>
                            <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto.</p>
                        </div>
                        <hr />
                        <div>
                            <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto.</p>
                        </div>
                        <hr />
                        <div>
                            <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto.</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <img src="https://previews.123rf.com/images/shmel/shmel1705/shmel170500013/78207687-2d-viaje-y-planificaci%C3%B3n-de-navegaci%C3%B3n-pin-con-el-icono-de-mapa-.jpg" alt="..." className="mw-100 mh-100" />
                    </div>
                </div>
            </div>
        </div>

    );


};

export default VendorReviews;