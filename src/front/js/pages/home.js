import React, { useContext } from "react";
import { Footer } from "../component/footer.js";
import InspiredFavorites from "../component/inspiredFavorites.js";
import RecentlyViewed from "../component/recentlyViewed.js";
import MoreRented from "../component/moreRented.js";
import Offers from "../component/offers.js";
import "../../styles/home.css";

//create your first component
export const Home = () => {
  return (
    <div className="">
      <div className="mx-5">
        <div className="text-center mt-5">
          <img
            src="https://uploads-ssl.webflow.com/5c471c24395cd54f559228e5/5d1623691e99cd415d15fc95_Page-under-construction_kompuestos.gif"
            alt=""
          />
        </div>

        {/* card Ofertas */}
        <div className="container-fluid row g-4 my-2 d-flex justify-content-center">
          <div className="col-8">
            <Offers />
          </div>
        </div>

        {/* titulo inspirado en tus favoritos */}
        <div className="d-flex pt-0">
          <div className="p-1 flex-fill">
            <h1 className="border-white p-1 border ">
              <strong>Insipirado en tus favoritos!</strong>
            </h1>
          </div>
          <div className="p-2 flex-fill">
            <u className="border-white p-1 border ">
              EXPLORA TODOS LOS PRODUCTOS
            </u>
          </div>
        </div>
        {/* card inspirado en tus favoritos */}
        <div className="container-fluid row g-4 my-2 ">
          <div className="col-3">
            <InspiredFavorites />
          </div>
          <div className="col-3">
            <InspiredFavorites />
          </div>
          <div className="col-3">
            <InspiredFavorites />
          </div>
          <div className="col-3">
            <InspiredFavorites />
          </div>
        </div>
        {/* titulo vistos recientemente */}
        <div className="d-flex mt-5">
          <div className="p-1 flex-fill">
            <h1 className="border-white p-1 border ">
              <strong>Visto recientemente</strong>
            </h1>
          </div>
        </div>

        {/* Vistos Recientemente */}
        <div className="container-fluid row g-4 my-2">
          <div className="col-3">
            <RecentlyViewed />
          </div>
          <div className="col-3">
            <RecentlyViewed />
          </div>
          <div className="col-3">
            <RecentlyViewed />
          </div>
          <div className="col-3">
            <RecentlyViewed />
          </div>
        </div>

        {/* titulo inspirado en tus favoritos */}
        <div className="d-flex pt-0">
          <div className="p-1 flex-fill">
            <h1 className="border-white p-1 border ">
              <strong>Mas alquilado en tu zona!</strong>
            </h1>
          </div>
          <div className="p-2 flex-fill">
            <u className="border-white p-1 border ">
              EXPLORA TODOS LOS PRODUCTOS
            </u>
          </div>
        </div>
        {/* card inspirado en tus favoritos */}
        <div className="container-fluid row g-4 my-2 ">
          <div className="col-3">
            <MoreRented />
          </div>
          <div className="col-3">
            <MoreRented />
          </div>
          <div className="col-3">
            <MoreRented />
          </div>
          <div className="col-3">
            <MoreRented />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
