import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Navigate } from "react-router-dom";
import Favorites from "../component/favorites.jsx";

const ViewFavorites = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getFavorites(localStorage.getItem("costumer_id"));
    }, []);


    return localStorage.getItem("costumer_id") === null ? (
        <Navigate to="/login" />
    ) : (
        <div className="card mx-5 my-5">
            <h2 className="mx-3 my-3 fw-bold  fs-2 text-dark"> Mis favoritos </h2>{" "}
            {store.productsFavorites.map((cadaProducto, index) => (
                <Favorites
                    key={index}
                    id={cadaProducto.productinfo.id}
                    name={cadaProducto.productinfo.name}
                    price={cadaProducto.productinfo.price}
                    description={cadaProducto.productinfo.description}
                    image={cadaProducto.productinfo.image}
                    costumer_id={cadaProducto.productinfo.costumer_id}
                />
            ))}{" "}
            <button
                className="btn"
                type="button"
                id="enviar"
                onClick={() =>
                    actions.delAllFavorites(localStorage.getItem("costumer_id"))
                }
            >Eliminar todos
            </button>
        </div>
    );
};

export default ViewFavorites;
