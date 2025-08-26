// Import các thư viện cần thiết
import React from "react";
// Import logo từ file svg
import logo from "./logo.svg";
// Import styles
import "./App.css";

// Component App chính của ứng dụng
function App() {
  return (
    // Container chính của ứng dụng
    <div className="App">
      {/* Phần header của ứng dụng */}
      <header className="App-header">
        {/* Logo React */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Hướng dẫn sử dụng */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
