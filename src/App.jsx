import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import AddProduct from "./pages/admin/productPage/AddProduct";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import InputTest from "./components/InputTest";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product/>} exact />
          <Route path="/add" element={<AddProduct/>} exact />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/input" element={<InputTest/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
