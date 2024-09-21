import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
const ProductDescription = () => {
  return (
    <div className="mt-20 flex-wrap">
      <div className="flex gap-3 mb-4 xs:flex-wrap">
        <p className="font-bold text-black text-xl">Influencer affiliaton</p>
      </div>
      <div className="">
        <button className="font-semibold">Your Profile Setting: </button>
        <p className="mt-2">
          ₹230 +<span className="text-violet-500 font-bold">₹50</span> = ₹280
        </p>
      </div>
      <div className="my-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 mr-4">
          Share
        </button>
        <a href="https://www.facebook.com/dialog/share?web:0019c3f40e96b348801ceb&display=popup&href={URL}&quote=ProductDescription&hashtag=#Vutoria">
          <Facebook className="mr-2 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/yourusername/">
          <Instagram className="mr-2 cursor-pointer" />
        </a>
        <a href="https://twitter.com/intent/tweet?text=Hello%20World!&url=https://example.com&hashtags=ExampleHashtag">
          <Twitter className="mr-2 cursor-pointer" />
        </a>
      </div>

      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
      </div>

      <div className="mb-10 gap-y-10">
        <p className="mb-3 text-sm">
          <span className="font-bold text-slate-700 text-[18px] mr-2">
            Sustainability:
          </span>
          This garment uses eco-friendly, organic cotton, reducing waste during
          production.
        </p>
        <p className="mb-3 text-sm">
          <span className="font-bold text-slate-700 text-[17px] mr-2">
            Carbon Emission Reduction:
          </span>
          Virtual try-on helps avoid unnecessary returns, cutting down the
          carbon emissions from shipping.
        </p>
        <p className="mb-3 text-sm">
          <span className="font-bold text-slate-700 text-[18px] mr-2">
            Garment Details:
          </span>
          This cotton fabric uses 20% less water and energy compared to
          traditional manufacturing.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
