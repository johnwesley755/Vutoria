import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";
//import images
import bannerimg from "./assets/bannermens.png";
import womenImg from "./assets/bannerwomens.png";
import kidsImg from "./assets/bannerkids.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyItNow from "./components/buyItNow";


const App = () => {
  return (
    <main className="bg-primary text-tertiary">
      <ToastContainer></ToastContainer>
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
          <Route path='/product' element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/BuyProcess" element={<BuyItNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
