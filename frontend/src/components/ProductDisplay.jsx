import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import all_products from "../assets/all_products";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  const navigate = useNavigate(); // For programmatic navigation
  //Add to Wardrobe
const addToWardrobe = (productId) => {
  const productIndex = all_products.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    // Update the product's wardrobe status to true
    all_products[productIndex].wardrobe = true;

    // Show success toast notification
    toast.success("Your order has been placed and added to your wardrobe!");

    // Log the updated product
    console.log(`Added to wardrobe:`, all_products[productIndex]);
  } else {
    toast.error("Product not found!");
  }
};
  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true); // Show error if size not selected
    } else {
      setSizeError(false);
      addToCart(product.id);

      // Show the toast and navigate to cart on click
      toast.success("Product Added to Cart Successfully!", {
        onClick: () => {
          navigate("/cart"); // Redirect to cart when toast is clicked
        },
        autoClose: 3000, // Auto close the toast after 3 seconds
        pauseOnHover: true, // Pause on hover
        closeOnClick: true, // Close toast on click
      });
    }
  };
  const realImg = product.image;
  console.log(product.id);
  const updatedImg = product.updatedImg;
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size
  };

  return (
    <section className="">
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* Left side */}
        <div className="flex gap-x-2 xl:flex-1">
          {/* <div className="flex flex-col gap-[7px] flex-wrap">
            <img src={product_rt_1} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_2} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_3} alt="prdctImg" className="max-h-[99px]" />
            <img src={product_rt_4} alt="prdctImg" className="max-h-[99px]" />
          </div> */}
          <div  className="w-full max-w-[800px]">
            {/* <img src={product.image} alt="" /> */}

    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={realImg} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={updatedImg} alt="Image two" />}
    />

          </div>
        </div>

        {/* Right side */}
        <div className="flex-col flex xl:flex-[1.7]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>{111}</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4">
            <div className="line-through">{product.old_price}</div>
            <div className="text-secondary">{product.new_price}</div>
            <div className="mb-4">
              <h4 className="bold-16">Select Size:</h4>
              <div className="flex gap-3 my-3">
                <div
                  className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                    selectedSize === "S"
                      ? "ring-slate-900"
                      : "ring-slate-900/10"
                  }`}
                  onClick={() => handleSizeClick("S")}
                >
                  S
                </div>
                <div
                  className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                    selectedSize === "M"
                      ? "ring-slate-900"
                      : "ring-slate-900/10"
                  }`}
                  onClick={() => handleSizeClick("M")}
                >
                  M
                </div>
                <div
                  className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                    selectedSize === "L"
                      ? "ring-slate-900"
                      : "ring-slate-900/10"
                  }`}
                  onClick={() => handleSizeClick("L")}
                >
                  L
                </div>
                <div
                  className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                    selectedSize === "XL"
                      ? "ring-slate-900"
                      : "ring-slate-900/10"
                  }`}
                  onClick={() => handleSizeClick("XL")}
                >
                  XL
                </div>
              </div>

              {sizeError && (
                <p className="text-red-500">Please select a size!</p>
              )}

              <div className="flex flex-col gap-y-3 mb-4 max-2-[555px]">
                <button
                  onClick={handleAddToCart}
                  className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
                >
                  Add to cart
                </button>
                <button
                onClick={() => addToWardrobe(product.id)}
                className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">
                  Buy it now
                </button>
              </div>
              <p>
                <span className="medium-16 text-tertiary">Category:</span> Women
                | Jacket | Winter
              </p>
              <p>
                <span className="medium-16 text-tertiary">Category:</span>{" "}
                Modern | Latest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" />
    </section>
  );
};

export default ProductDisplay;