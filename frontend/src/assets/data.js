import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";

// latest
import p5_img from "./product_12.png";
import p6_img from "./product_35.png";
import p7_img from "./product_14.png";
import p8_img from "./product_8.png";
import p9_img from "./product_15.png";
import p10_img from "./product_2.png";
import p11_img from "./product_17.png";
import p12_img from "./product_28.png";

// Footer
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";

//Updated images
import img1 from "./product_28.png";
import img2 from "./img2.webp";
const POPULAR = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    updatedImg:  img1,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    updatedImg: img2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    updatedImg:  img1,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    updatedImg:  img1,
    new_price: 100.0,
    old_price: 150.0,
  },
];

const LATEST = [
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p5_img,
    updatedImg:  img1,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 6,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p6_img,
    updatedImg:  img1,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Men Red Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p1_img,
    updatedImg:  img1,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p8_img,
    updatedImg:  img1,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 9,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p9_img,
    updatedImg:  img1,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p10_img,
    updatedImg:  img1,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p11_img,
    updatedImg:  img1,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 12,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p12_img,
    updatedImg:  img1,
    new_price: 100.0,
    old_price: 150.0,
  },
];

const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Virtual Try on policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "+91 9562828191" },
    { label: "Email Address", value: "vutoria@gmail.com" },
  ],
};

const SOCIALS = {
  title: "Social",
  links: [facebook, instagram, twitter, youtube, linkedin],
};

export { POPULAR, LATEST, FOOTER_LINKS, SOCIALS };
