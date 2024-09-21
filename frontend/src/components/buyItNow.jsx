// import React from 'react';

// const BuyItNow = () => {
//   return (
//     <div className="next-process-screen">
//       <div className="container">
//         <h1 className="title">Confirm Your Purchase</h1>

//         <div className="product-details">
//           <div className="product-image">
//             <img src="https://via.placeholder.com/150" alt="Product" />
//           </div>
//           <div className="product-info">
//             <h2 className="product-name">Product Name</h2>
//             <p className="product-description">This is a brief description of the product being purchased.</p>
//             <p className="product-price">$199.99</p>
//           </div>
//         </div>

//         <div className="summary">
//           <h3 className="summary-title">Order Summary</h3>
//           <div className="summary-details">
//             <p>Subtotal: <span>$199.99</span></p>
//             <p>Shipping: <span>$10.00</span></p>
//             <p>Total: <span>$209.99</span></p>
//           </div>
//         </div>

//         <button className="btn_proceed">Proceed to Payment</button>
//       </div>
//     </div>
//   );
// };

// export default BuyItNow;
import img1 from "../assets/img1.webp";
import p13_img from "../assets/product_13.png";

import React from "react";
import { useNavigate } from "react-router-dom";

const BuyItNow = ({ product = {
  id: 13,
  name: "Men Green Solid Colored Half Sleeve T-Shirt",
  category: "men",
  updatedImg : img1,
  image: p13_img,
  new_price: 85.0,
  old_price: 120.5,
},}) => {
  const navigate = useNavigate();
  console.log(product )
  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Confirm Your Purchase</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Product Details */}
          <div className="flex-1">
            <div className="flex items-center justify-center mb-6">
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-64 h-64 object-cover rounded-md shadow-md"
              />
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.name}</p>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Order Summary</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">Subtotal:</p>
                <p className="text-lg font-semibold text-gray-800">${product.new_price || "199.99"}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">Shipping:</p>
                <p className="text-lg font-semibold text-gray-800">$10.00</p>
              </div>

              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-xl font-bold text-gray-700">Total:</p>
                <p className="text-xl font-bold text-gray-900">${(product.new_price || 199.99) + 10.00}</p>
              </div>
            </div>

            {/* Proceed to Payment Button */}
            <div className="mt-6">
              <button
                onClick={handleProceedToPayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyItNow;
