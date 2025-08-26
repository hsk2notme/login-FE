// Import các thư viện React cần thiết
import React from "react";
import ReactDOM from "react-dom/client";
// Import styles
import "./index.css";
// Import component Login từ App.js
import App from "./App.js";
// Import utility đo hiệu năng
import reportWebVitals from "./reportWebVitals";

// Khởi tạo root của ứng dụng React
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
