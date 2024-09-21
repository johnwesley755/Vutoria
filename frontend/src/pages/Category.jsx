// import React from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import all_products from "../assets/all_products";
// import Item from "../components/Item";

// const Category = ({ category, banner }) => {
//   // Filter products by the category prop
//   const filteredProducts = all_products.filter(
//     (item) => item.category === category
//   );

//   return (
//     <section className="max_padd_container py-12 xl:py-28">
//       <div>
//         {/* Display banner image */}
//         <div>
//           <img
//             src={banner}
//             alt={`${category} banner`}
//             className="block my-7 mx-auto"
//           />
//         </div>

//         {/* Sorting and upload image button */}
//         <div className="flexBetween my-8 mx-2">
//           <h5>
//             <span className="font-bold">
//               Showing 1-{Math.min(filteredProducts.length, 12)}
//             </span>
//             out of {filteredProducts.length} products
//           </h5>
//           <button className="btn_dark_rounded cursor-pointer max-w-screen-xs">
//             Upload your image
//           </button>
//           <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15">
//             Sort by <MdOutlineKeyboardArrowDown />
//           </div>
//         </div>

//         {/* Product grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((item) => (
//             <Item
//               key={item.id}
//               id={item.id}
//               image={item.image}
//               name={item.name}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           ))}
//         </div>

//         {/* Load more button */}
//         <div className="mt-16 text-center">
//           <button className="btn_dark_rounded">Load more</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;


import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import Item from "../components/Item";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Category = ({ category, banner }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter products by the category prop
  const filteredProducts = all_products.filter(
    (item) => item.category === category
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    toast.success("Image uploaded to the Server successfully")
    toast.info("Click an product to experience our virtual try on")
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // Create a preview URL for the selected image
      // You can add additional logic here, e.g., uploading the image to a server
    }
  };

  const triggerFileInput = () => {    
    document.getElementById("imageUploadInput").click();
    // Trigger the file input
  };

  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        {/* Display banner image */}
        <div>
          <img
            src={banner}
            alt={`${category} banner`}
            className="block my-7 mx-auto"
          />
        </div>

        {/* Sorting and upload image button */}
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span className="font-bold">
              Showing 1-{Math.min(filteredProducts.length, 12)}
            </span>
            out of {filteredProducts.length} products
          </h5>
          <button className="btn_dark_rounded cursor-pointer max-w-screen-xs" onClick={triggerFileInput}>
            Upload your image
          </button>
          <input
            type="file"
            id="imageUploadInput"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }} // Hide the file input
          />
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
