import React, { useContext } from "react";
import { Footer } from "../component/footer.js";
import InspiredFavorites from "../component/inspiredFavorites.js";
import RecentlyViewed from "../component/recentlyViewed.js";
import MoreRented from "../component/moreRented.js";
import Offers from "../component/offers.js";
import "../../styles/home.css";
import bannersummer from "../../img/bannersummer.png";
import bannermoda from "../../img/bannermoda.png";
import bannerherramientas from "../../img/bannerherramientas.png";

//create your first component
export const Home = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={bannersummer}
              className="d-block w-100"
              width="250"
              height="550"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={bannerherramientas}
              className="d-block w-100"
              width="250"
              height="550"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={bannermoda}
              className="d-block w-100"
              width="250"
              height="550"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
