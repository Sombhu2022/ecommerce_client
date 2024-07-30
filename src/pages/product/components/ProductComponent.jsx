import React, { useEffect, useState } from "react";
import pumpkin from "./pumpkin.png";
import { IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../../redux/cart/cartController";
import { TiShoppingCart } from "react-icons/ti";
import { BsCurrencyRupee } from "react-icons/bs";

import "./productComponent.scss";
import { Link, useNavigate } from "react-router-dom";

function ProductComponent({ id , thumbnail ,  name, price, actualPrice ,reting,stock ,  discount }) {

  const dispatch = useDispatch();
  const { user , isAuthenticate } = useSelector(state=>state.user)

  
  const [isOutOfStock , setIsOutOfStock] = useState(false)
  console.log(stock , typeof stock);
  const navigate = useNavigate()
  useEffect(()=>{
  if (stock === 0) {
    setIsOutOfStock(true)
  } 

  },[])

  const cardHandle = async () => {
    if(!isAuthenticate) return navigate('/login')
    const data = {
      productId:id ,
      price:actualPrice
    };
    dispatch(addCard(data));
    navigate('/cart')
  };

  return (
    <div className="product">

      <div className="dicount_container">
        <p>{discount}%</p>
        <IoHeart className="heart" />
      </div>

      <div className="image_container"  onClick={()=>{ navigate(`/product/${id}`)}} >
        <img className="product_image" src={thumbnail.url} alt="" />
      </div>

      <div className="product_info">
        <p className="product_name"> {name}</p>
        
        <span className="ammount_of_product"> 250 g </span>
        <p className="prise">
          <BsCurrencyRupee/> {actualPrice} <del style={{color:'red', marginLeft:'5px' }}> {price} </del>
        </p>
        { !isOutOfStock?stock < 10 ?(<p style={{color:'red'}}>Last {stock} product is available</p>):"":""}
        <div className="buttons">
        
          
          <button className={isOutOfStock?"out_of_stock":""} onClick={()=>{!isOutOfStock?cardHandle():""}}>
            <TiShoppingCart/> { isOutOfStock?"Out Of Stock":"Add" }
          </button>
          

  
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
