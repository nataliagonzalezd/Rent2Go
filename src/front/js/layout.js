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
import CatalogoVista from "./pages/catalogoVista";
import MyRent from "./pages/myRent";
import NewProduct from "./component/newProduct.jsx";
import MyProductsView from "./pages/DashboardViews/dashboardView.jsx";
import MyDashMenuView from "./pages/DashboardViews/dashMenuView.jsx";
import ProfileView from "./pages/profileView.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route
              element={<CatalogoVista />}
              path="/category/:category_id/products"
            />
            <Route element={<MyRent />} path="/order_item/:product_id" />
            s <Route element={<Register />} path="/register" />
            <Route element={<NewProduct />} path="/newProduct" />
            <Route element={<ViewCart />} path="/cart" />
            <Route
              element={<ViewProductDetails />}
              path="/costumer/:costumer_id/product/detail/:id"
            />
            <Route element={<ViewFavorites />} path="/viewFavorites" />
            <Route element={<MyDashMenuView />} path="/product" />
            <Route element={<MyProductsView />} path="/product/:id" />
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<ProfileView />} path="/editprofile/:id" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
