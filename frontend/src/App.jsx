import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <div className="app_container">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
