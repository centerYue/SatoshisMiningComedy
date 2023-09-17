import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div
      className="appWrapper"
      style={{
        backgroundImage: 'url("/static/assets/images/Home/mainBg.png")',
      }}
    >
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
