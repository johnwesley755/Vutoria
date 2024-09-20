import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Footer from "./components/Footer";

// Import banner images
import bannerimg from "./assets/bannermens.png";
import womenImg from "./assets/bannerwomens.png";
import kidsImg from "./assets/bannerkids.png";

const App = () => {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="men" banner={bannerimg} />}
          />
          <Route
            path="/womens"
            element={<Category category="women" banner={womenImg} />}
          />
          <Route
            path="/kids"
            element={<Category category="kid" banner={kidsImg} />}
          />
          {/* Use a dynamic route to load products */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
