import React from "react";
import "./product.scss";

import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import ProductComponent from "./components/ProductComponent";
import {useSelector } from 'react-redux'

function Product() {
  const { product } =  useSelector((state)=> state.product)

  return (
    <div className="product_page">
      
      <div className="banner_container">
        <div className="contant_container">
          <p className="heading">On This Way</p>
          <h3> Grocery store with different treasures</h3>
          <p className="extra_information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut!
          </p>
          <Link>
            <button>
             
              <p>Shop Now</p> <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>


     <div>

     </div>

      <div className="total_info">
        <p> Showing all 16 Result </p>
        <div>
        <p> Show: 20 items</p>
        <p> <FaCartShopping/></p>
        </div>
      </div>

      <div className="product_container"> 
      {
          product?.map((ele , index)=>{
             return(
              <Link className="link" key={index} to={`/product/${ele._id}`}>
                <ProductComponent id={ele._id} thumbnail={ele.images[0]} price={ele.price} name={ele.name} discount={ele.discount}/>
              </Link>
             )
          })
        }
        
         
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Product;


    // "id": 1,
    // "title": "iPhone 9",
    // "description": "An apple mobile which is nothing like apple",
    // "price": 549,
    // "discountPercentage": 12.96,
    // "rating": 4.69,
    // "stock": 94,
    // "brand": "Apple",
    // "category": "smartphones",
    // "thumbnail": "...",
    // "images":[" "," "," "]
    