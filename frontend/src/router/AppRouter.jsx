import { NavBar } from "@/components/navbar/navbar";
import { Home } from "../pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBar/>} />
          <Route path=""/>
          <Route path=""/>
          <Route path=""/>
          <Route path=""/>
          <Route path=""/>
          <Route path=""/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
