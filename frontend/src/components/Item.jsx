import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      {/* Updated Link to wrap the entire product card */}
      <Link
        to={`/product/${id}`}
        className="block group overflow-hidden transition-all duration-100"
        onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
      >
        <div className="relative flexCenter group overflow-hidden transition-all duration-100">
          {/* Clickable image */}
          <img
            src={image}
            alt={name}
            className="w-full block object-cover group-hover:scale-110 transition-all duration-1000"
          />
        </div>
        <div className="p-4 overflow-hidden">
          <h4 className="my-[6px] mediuim-16 line-clamp-2 text-gray-30">
            {name}
          </h4>
          <div className="flex gap-5">
            <div className="bold-16">₹{new_price}.00</div>
            <div className="text-secondary bold-16 line-through">
              ₹{old_price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
