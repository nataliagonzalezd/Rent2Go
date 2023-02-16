import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home.js";
import ViewCart from "./pages/viewCart";
import ViewProductDetails from "./pages/viewProductDetails.js";
import ViewFavorites from "./pages/viewFavorites.js";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login.js";
import { Register } from "./component/register";
import { ToRent } from "./component/torent";
import CatalogoVista from "./pages/catalogoVista";
import { Profile } from "./component/profile.jsx";
import ViewEditProfile from "./pages/viewEditProfile.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<CatalogoVista />} path="/catalogoVista" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Register />} path="/register" />
            <Route element={<ToRent />} path="/torent" />
            <Route element={<ViewCart />} path="/costumer/:costumer_id/product/:id" />
            <Route
              element={<ViewProductDetails />}
              path="/viewProductDetails"
            />
            <Route element={<ViewFavorites />} path="/viewFavorites" />
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />
            <Route element={<ViewEditProfile />} path="/editprofile" />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
