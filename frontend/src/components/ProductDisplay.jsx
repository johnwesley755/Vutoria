import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [currentImg, setCurrentImg] = useState(product.image);
  const navigate = useNavigate();

  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
    } else {
      setSizeError(false);
      addToCart(product.id);
      toast.success("Product Added to Cart Successfully!", {
        onClick: () => {
          navigate("/cart");
        },
        autoClose: 3000,
        pauseOnHover: true,
        closeOnClick: true,
      });
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImg(product.updatedImg); // Change to updatedImg after 5 seconds
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, [product.updatedImg]);

  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* Left side */}
        <div className="flex gap-x-2 xl:flex-1">
          <div className="w-full max-w-[800px]">
            <img src={currentImg} alt="Product" className="w-full" /> {/* Show the current image */}
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
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                      selectedSize === size ? "ring-slate-900" : "ring-slate-900/10"
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </div>
                ))}
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
                  onClick={() => navigate("/BuyProcess", { state: { product } })}
                  className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest"
                >
                  Buy it now
                </button>
              </div>
              <p>
                <span className="medium-16 text-tertiary">Category:</span> Women | Jacket | Winter
              </p>
              <p>
                <span className="medium-16 text-tertiary">Category:</span> Modern | Latest
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
