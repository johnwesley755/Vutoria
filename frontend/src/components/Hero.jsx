import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import bnrImg from "../assets/banner-image.png";

const Hero = () => {
  return (
    <section className="relative bg-violet-200 min-h-screen w-full">
      {/* The section will expand based on content in mobile view */}
      <div className="max_padd_container flex flex-col mt-10 lg:flex-row items-center justify-between gap-10 py-16 lg:py-32">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h1 className="h1 capitalize max-w-[37rem]">
            Find the clothes that match your style
          </h1>
          <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">
            Virtual try-on for effortless, personalized, innovative fashion
            shopping
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-x-4 my-5">
            <div className="flex items-center gap-x-3 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="bold-16 sm:bold-20">
              176k
              <span className="regular-16 sm:regular-20">
                {" "}
                Excellent Reviews
              </span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex max-xs:flex-col gap-2">
            <NavLink to={"/"} className="btn_dark_rounded flexCenter">
              Shop now
            </NavLink>
            <NavLink to={""} className="btn_dark_rounded flexCenter gap-x-2">
              <MdOutlineLocalOffer className="text-2xl" />
              Offer
            </NavLink>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 mt-8 lg:mt-0 w-full">
          <img
            src={bnrImg}
            alt="Fashion Model"
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
