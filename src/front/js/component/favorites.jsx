import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


const Favorites = function (props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="card mx-3 my-3 text-dark">
            <div className="row g-0">
                <div className="col-md-3 mx-1 my-3">
                    <img src={props.image} className="img-fluid rounded-start w-100 h-100" alt="..." />
                </div>
                <div className="col-md-6 mx-1 my-3">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text text-dark">{props.description}</p>

                </div>
                <div className="col-md-2 mx-1 my-3">
                    <div className="mb-3">
                        <h5 className="card-title my-0">{props.price}</h5>
                        <p className="card-text"><small className="text-muted">Por dia</small></p>
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