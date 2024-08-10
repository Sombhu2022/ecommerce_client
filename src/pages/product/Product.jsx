import React, { useEffect, useState } from "react";
import "./product.scss";

import { Link, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import ProductComponent from "./components/ProductComponent";
import {useSelector } from 'react-redux'

import Loader from 'react-js-loader'
import { productStatusclean } from "../../redux/product/productSlice";
import { spiral } from "ldrs";

function Product() {
  spiral.register()
  const [loading , setLoading] = useState(false)
  const { product , status} =  useSelector((state)=> state.product)
  const [products , setProducts] = useState([])
 const  navigator = useNavigate() 

  useEffect(()=>{
    
    if(status.allProduct === 'pending'){
      setLoading(true)
    }
    else{
      setLoading(false)
    }

    if(status.allProduct === 'success'){
      setProducts(product)
    }
    return()=>{
      productStatusclean();
    }
  },[ product , status.allProduct ])
console.log(products);
  return (
    <div className="product_page">
      
      <div className="banner_container">
        <div className="contant_container">
          <p className="heading">On This Way</p>
          <h3> Cloude Store with different thinks</h3>
          <p className="extra_information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut!
          </p>
          <Link to={'/'}>
            <button>
              <p>Shop Now</p> <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>


     <div>

     </div>

      <div className="total_info">
        <p> Showing all {products.length} Result </p>
        <div>
        <p> Show: {products.length} items</p>
        <p> <FaCartShopping/></p>
        </div>
      </div>
     {
       loading?
       <div className=" flex justify-center items-center ">  <l-spiral size="40" speed="0.9" color="green"></l-spiral> </div>
        :
      <div className="product_container"> 
      {
        products?.map((ele , index)=>{
          // to={`/product/${ele._id}`}

             return(
              <div className="link" key={ele._id}  >
                <ProductComponent 
                id={ele._id} 
                thumbnail={ele.images? ele.images[0]:""} 
                price={ele.price} 
                actualPrice={ele.actualPrice} 
                name={ele.name} 
                discount={ele.discount}
                stock = {ele.stock}
                />
              </div>
             )
          })
        }
        
         
      </div>
     }
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
    