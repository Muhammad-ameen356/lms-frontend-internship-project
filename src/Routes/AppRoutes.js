import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../Components/Navbar/Navbar";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarComponent />}></Route>
    </Routes>
  );
};

export default AppRoutes;
