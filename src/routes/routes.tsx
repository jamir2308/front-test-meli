import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ProductLayout from "./../pages/productLayout/ProductLayout";
import ProductDetail from "./../pages/productDetail/ProductDetail";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductLayout />} path="/items" />
        <Route element={<ProductDetail />} path="/items/:id" />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;