import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img
        src="https://uploads-ssl.webflow.com/5c471c24395cd54f559228e5/5d1623691e99cd415d15fc95_Page-under-construction_kompuestos.gif"
        alt=""
      />
    </div>
  );
};
