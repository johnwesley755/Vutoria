import React from "react";
import Slider from "react-slick"; // Import react-slick for the slider

// Import your images here
import img1 from "../assets/3.png";
import img2 from "../assets/4.png";
import img3 from "../assets/5.png";
import img4 from "../assets/6.png";

// Include slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Slider settings for customization
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop for the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatic sliding
    autoplaySpeed: 3000, // Time between automatic slide transitions (3 seconds)
    arrows: false, // No arrows for navigation
  };

  return (
    <section className="relative w-full">
      {/* Image Slider Section */}
      <section className="relative w-full mb-10 overflow-hidden mt-20">
        <Slider {...settings}>
          <div>
            <img
              src={img1}
              alt="Fashion Model 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={img2}
              alt="Fashion Model 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={img3}
              alt="Fashion Model 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={img4}
              alt="Fashion Model 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </section>

      <section className=" text-black">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Find Your Style with Vutoria
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Experience personalized fashion like never before with our virtual
            try-on feature. See how clothes fit you in real-time before making a
            purchase.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn_secondary_rounded text-white font-bold px-6 py-2 rounded-lg transition duration-300">
              Shop Now
            </button>
            <button className="border btn_dark_rounded hover:bg-white hover:text-gray-800 font-bold px-6 py-2 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;