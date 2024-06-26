import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import AddProduct from "./pages/admin/productPage/AddProduct";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import InputTest from "./components/InputTest";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/Cart/CartPage";


import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authUser } from "./redux/user/userController";
import { allProduct } from "./redux/product/productController";
import ProductDetails from "./pages/product/components/product details/ProductDetails";
import Order from "./pages/Order/Order";
import { getCart } from "./redux/cart/cartController";
import Payment from "./pages/Order/Payment";


function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(authUser());
    dispatch(allProduct());
    dispatch(getCart())
  } , [])

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Layout/>} >
          <Route index element={<Product/>}  />
          <Route path="/add" element={<AddProduct/>}  />
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart"  element={<CartPage/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/success/:id" element={<h1>payment success</h1>}/>
          <Route path="/faild" element={<h1>not pay</h1>}/>
          <Route path="/payment" element={<Payment/>}/>

          </Route>

          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/input" element={<InputTest/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;

export const baseUrl = "http://localhost:8080";