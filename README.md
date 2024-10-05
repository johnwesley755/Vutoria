# 🛍️ E-commerce Platform - Frontend with React, Tailwind & Material UI 🚀

## Overview 📝
This project is a modern e-commerce platform designed to deliver a smooth and engaging shopping experience for users. Built using the **MERN stack** (React for frontend), styled with **Tailwind CSS** and **Material UI** for advanced UI components, this platform integrates advanced features like **virtual try-on**, **social media sharing**, and more. Key areas for future improvements include payment gateway integration and deployment to a production environment.

## ✨ Core Features

1. **Virtual Try-On** 👕👚:  
   Users can upload an image of themselves, and the system applies the virtual try-on feature to see how a product (e.g., t-shirts, hoodies) fits on them. Powered by AI diffusion models for accurate garment visualization.

2. **Recommendation Engine** 🧠:  
   Suggests items based on user profiles, preferences, and try-on interactions, enhancing the personalized shopping experience.

3. **Social Media Sharing** 📲:  
   Users can share their virtual try-on images directly to platforms like Facebook, Twitter, or Instagram to showcase or get feedback from friends.

4. **Product Categorization** 🛍️:  
   Organized product sections, including **T-Shirts**, **Shirts**, **Hoodies**, and **Women’s Collection**, making it easy to navigate between various product lines.

5. **Sustainability Details** 🌱:  
   The platform provides garment sustainability details like **carbon footprint** in the cart page for environmentally conscious consumers.

## 📂 Project Structure

```
frontend/
├── public/                  # Public assets
├── src/
│   ├── assets/              # Images and files
│   ├── components/          # Reusable components
│   ├── pages/               # Page-level components (Login, Home, Try-on, Cart, Checkout)
│   ├── ShopContext/         # Shopping context features
│   ├── App.js               # Main app entry point
│   ├── index.js             # App initialization
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🌐 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/johnwesley755/vutoria-web-app.git
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

## 🚀 Pending Features

1. **Payment Gateway Integration 💳**  
   Implement Stripe or Razorpay for secure payments, ensuring users can enter payment details and process transactions safely.

2. **Deployment 🌐**  
   Options include platforms like **Netlify**, **Vercel**, or **Firebase Hosting**. Ensure proper environment variable handling for production.

3. **Social Media Sharing 📲**  
   Add sharing options for platforms like **Facebook**, **Twitter**, and **Instagram** on the cart page to enable users to share their virtual try-on results.

## 📦 Installed Packages

```json
"dependencies": {
  "@emotion/react": "^11.13.3",
  "@emotion/styled": "^11.13.0",
  "@mui/icons-material": "^6.1.0",
  "@mui/material": "^6.1.0",
  "react": "^18.3.1",
  "react-before-after-slider-component": "^1.1.8",
  "react-dom": "^18.3.1",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.26.2"
}
```

## 📊 Features in Progress

1. **Cart Page Features** 🛒  
   Display social media sharing options and **sustainability details** (like carbon footprints) about products in the cart for an eco-conscious experience.

2. **Checkout Process** ✅  
   Streamlined checkout experience with options to save addresses, input payment details, and handle transactions through a secure payment gateway.

3. **Virtual Try-On** 👗🩳  
   Seamless integration with the AI-driven virtual try-on model, where users can try clothes virtually before purchasing.

## 👨‍💻 Author

Developed by **John Wesley, Mohammed Habib and Lankesh** ✨

Feel free to reach out with any questions or suggestions!

---

