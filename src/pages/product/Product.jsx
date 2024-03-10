import React from "react";
import "./product.scss";

import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import ProductComponent from "./components/ProductComponent";

function Product() {
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
              {" "}
              <p>Shop Now</p> <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="total_info">
        <p> Showing all 16 Result </p>
        <div>
        <p> Show: 20 items</p>
        <p> <FaCartShopping/></p>
        </div>
      </div>

      <div className="product_container"> 
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         <ProductComponent price={100} name={"pumpkin .. mujhe thik se nehi pata"} discount={40} reting={3.8}/>
         
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
    