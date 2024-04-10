import React from "react";
import pumpkin from "./pumpkin.png";
import { IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../../redux/cart/cartController";
import { TiShoppingCart } from "react-icons/ti";
import { BsCurrencyRupee } from "react-icons/bs";

import "./productComponent.scss";
import { Link } from "react-router-dom";

function ProductComponent({ id , thumbnail ,  name, price, actualPrice ,reting, discount }) {

  const dispatch = useDispatch();
  const { user } = useSelector(state=>state.user)

  const cardHandle = async () => {
    const data = {
      productId:id ,
      price:actualPrice
    };
    dispatch(addCard(data));
  };


  return (
    <div className="product">
      <div className="dicount_container">
        <p>{discount}%</p>
        <IoHeart className="heart" />
      </div>

      <div className="image_container">
        <img className="product_image" src={thumbnail.url} alt="" />
      </div>

      <div className="product_info">
        <p className="product_name"> {name}</p>
        
        <span className="ammount_of_product"> 250 g </span>
        <p className="prise">
          <BsCurrencyRupee/> {actualPrice} <del> {price} </del>
        </p>
        <div className="buttons">
          <Link to={'/cart'}>
          <button className="cart_button" onClick={cardHandle}>
            <TiShoppingCart/>  Cart
          </button>
          </Link>

  
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
