import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext.jsx"; // Ensure this path is correct

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
