import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../page/Header.jsx";
import Home from "../Home.jsx";
import Even from "../components/Even.jsx";
import Blogs from "../components/SubNav.jsx";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/even" element={<Even />} />
          <Route path="/header" element={<Header />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
