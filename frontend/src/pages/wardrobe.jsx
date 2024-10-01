// import React, { useState } from "react";
// import all_products from "../assets/all_products";
// import Item from "../components/Item";
// import { toast, ToastContainer } from "react-toastify";
// import { FaPlusCircle } from "react-icons/fa"; // Add an icon
// import "react-toastify/dist/ReactToastify.css";

// const Wardrobe = () => {
//   const [selectedShirt, setSelectedShirt] = useState(null);
//   const [selectedPant, setSelectedPant] = useState(null);
  
//   const filteredProducts = all_products.filter((item) => item.wardrobe);

//   const handleSelectItem = (item) => {
//     if (item.type === "shirt") {
//       setSelectedShirt(item);
//       toast.success(`${item.name} selected as shirt!`);
//     // } else(item.type === "pant") {
//     }else{
//       setSelectedPant(item);
//       toast.success(`${item.name} selected as pant!`);
//     }
//   };

//   const clearOutfit = () => {
//     setSelectedShirt(null);
//     setSelectedPant(null);
//     toast.info("Outfit cleared!");
//   };

//   return (
//     <section className="max_padd_container py-12 xl:py-28">
//       <div className="flex flex-col md:flex-row gap-8">
        

//         {/* Wardrobe Product Grid */}
//         <div className="w-full md:w-2/3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((item) => (
//             <div
//               key={item.id}
//               className="relative cursor-pointer group"
//             >
//               <Item
//                 id={item.id}
//                 image={item.image}
//                 name={item.name}
//                 new_price={item.new_price}
//                 old_price={item.old_price}
//               />
//               {/* Add icon in the top-right corner */}
//               <div
//                 className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg group-hover:scale-110 transition-transform"
//                 onClick={() => handleSelectItem(item)}
//               >
//                 <FaPlusCircle className="text-xl text-green-500" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Virtual Try-On Area */}
//         <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">Try-On Preview</h2>
//           <div className="w-full h-96 bg-white border rounded-lg flex items-center justify-center">
//             {/* Placeholder for virtual mannequin or user silhouette */}
//             <div className="w-full h-full flex flex-col items-center justify-center">
//               {selectedShirt ? (
//                 <img
//                   src={selectedShirt.image}
//                   alt={selectedShirt.name}
//                   className="h-32 mb-4"
//                 />
//               ) : (
//                 <div className="text-gray-500">No shirt selected</div>
//               )}
//               {selectedPant ? (
//                 <img
//                   src={selectedPant.image}
//                   alt={selectedPant.name}
//                   className="h-32"
//                 />
//               ) : (
//                 <div className="text-gray-500">No pants selected</div>
//               )}
//             </div>
//           </div>
//           <button
//             className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
//             onClick={clearOutfit}
//           >
//             Clear Outfit
//           </button>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default Wardrobe;

import product_13_50 from "./wardrobe/product_13_50.webp";
import product_13_51 from "./wardrobe/product_13_51.webp";
import product_13_52 from "./wardrobe/product_13_52.webp";
import product_15_50 from "./wardrobe/product_15_50.webp";
import product_15_51 from "./wardrobe/product_15_51.webp";
import product_15_52 from "./wardrobe/product_15_52.webp";
import product_16_50 from "./wardrobe/product_16_50.webp";
import product_16_51 from "./wardrobe/product_16_51.webp";
import product_16_52 from "./wardrobe/product_16_52.webp";

import React, { useState } from "react";
import all_products from "../assets/all_products";
import Item from "../components/Item";
import { toast, ToastContainer } from "react-toastify";
import { FaPlusCircle } from "react-icons/fa"; // Add an icon
import "react-toastify/dist/ReactToastify.css";

const Wardrobe = () => {
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedPant, setSelectedPant] = useState(null);
  
  const filteredProducts = all_products.filter((item) => item.wardrobe);

  const handleSelectItem = (item) => {
    if (item.type === "shirt") {
      setSelectedShirt(item);
      toast.success(`${item.name} selected as shirt!`);
    } else {
      setSelectedPant(item);
      toast.success(`${item.name} selected as pant!`);
    }
  };

  const clearOutfit = () => {
    setSelectedShirt(null);
    setSelectedPant(null);
    toast.info("Outfit cleared!");
  };

  // Dynamically generate the virtual try-on image name
  let virtualImageName = null;
  let virtualImage = null;
  if (selectedShirt && selectedPant) {
    virtualImageName = `product_${selectedShirt.id}_${selectedPant.id}`;
    console.log("Virtual Try-On Image Name:", virtualImageName);
    if(selectedShirt.id == 13 && selectedPant.id == 50){
        virtualImage = product_13_50;
    }else if(selectedShirt.id == 13 && selectedPant.id == 51){
        virtualImage = product_13_51;
    }else if(selectedShirt.id == 13 && selectedPant.id == 52){
        virtualImage = product_13_52;
    }else if(selectedShirt.id == 15 && selectedPant.id == 50){
        virtualImage = product_15_50;
    }else if(selectedShirt.id == 15 && selectedPant.id == 51){
        virtualImage = product_15_51;
    }else if(selectedShirt.id == 15&& selectedPant.id == 52){
        virtualImage = product_15_52;
    }else if(selectedShirt.id == 16 && selectedPant.id == 50){
        virtualImage = product_16_50;
    }else if(selectedShirt.id == 16 && selectedPant.id == 51){
        virtualImage = product_16_51;
    }else if(selectedShirt.id == 16 && selectedPant.id == 52){
        virtualImage = product_16_52;
    }else{
        virtualImage = product_13_50;
    }
  }

  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Wardrobe Product Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer group"
            >
              <Item
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
              {/* Add icon in the top-right corner */}
              <div
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg group-hover:scale-110 transition-transform"
                onClick={() => handleSelectItem(item)}
              >
                <FaPlusCircle className="text-xl text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Try-On Area */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Try-On Preview</h2>
          {/* <div className="w-full h-96 bg-white border rounded-lg flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
              {virtualImageName ? (
                <img
                src = {virtualImage}  
                alt="Virtual Try-On"
                  className="h-64"
                />
              ) : (
                <div className="text-gray-500">
                  {selectedShirt && !selectedPant
                    ? "No pant selected"
                    : !selectedShirt && selectedPant
                    ? "No shirt selected"
                    : "No shirt and pant selected"}
                </div>
              )}
            </div>
          </div> */}

<div className="w-full h-[700px] bg-white border rounded-lg flex items-center justify-center">
  <div className="w-full h-full flex flex-col items-center justify-center">
    {virtualImageName ? (
      <img
        src={virtualImage}
        alt="Virtual Try-On"
        className="h-full w-auto object-contain" // Ensure the image fits while maintaining aspect ratio
      />
    ) : (
      <div className="text-gray-500">
        {selectedShirt && !selectedPant
          ? "No pant selected"
          : !selectedShirt && selectedPant
          ? "No shirt selected"
          : "No shirt and pant selected"}
      </div>
    )}
  </div>
</div>

          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={clearOutfit}
          >
            Clear Outfit
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Wardrobe;
