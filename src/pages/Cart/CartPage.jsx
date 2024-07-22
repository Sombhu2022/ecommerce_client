import React, { useEffect, useState } from 'react'
import Cart from './components/Cart'
import {useSelector ,useDispatch } from 'react-redux'
import { getCart } from '../../redux/cart/cartController'
import { GrDeliver } from "react-icons/gr";
import './cart.scss'

import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [products , setProducts] = useState([])
  const [delivaryFees , setDelivaryFees ] =useState(0)

  const navigate = useNavigate()

   const  {product , status } = useSelector((state)=>state.cart)
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(getCart())
   },[])

   useEffect(()=>{
     if(status === 'success'){
        setProducts(product)
     }
     if(product?.totalAmmount < 500 ){
      setDelivaryFees(49)
     }else{
        setDelivaryFees(0)
     }
   } , [ product ])
   console.log(products);

  if(!products || products?.cart?.length < 1)  return <div className='empty_cart'> <p>Your Cart is Fully Empty </p> </div> 
 
  return (
    <div>
        <h1> Your Cart </h1>
        <div className='all_cart'>

        {
            products?.cart?.map((ele)=>{
              return (

                  <Cart key={ele._id}  product={ele.product} stackFull={products.quantityFull} quantity={ele.productQuantity} totalPrice={ele.totalPrice} />
              )
            })
        }
        </div>

        <div className='price_container'>

        <div className='price price2'>{
            products?(<> <span style={{color:'black'}}> Total Product Cost :- </span><BsCurrencyRupee/>  {products?.totalAmmount}</>):""
        }
     
        </div>

        <div className='delivary_cost'>{
            products?(<><GrDeliver/> <span> Delivary Cost :- </span> { delivaryFees }</>):""
        }
        </div>
      
        <div className=' total_price'>{
            products?(<div className='price'> <span style={{color:'black'}}> Total Cost :- </span><BsCurrencyRupee/>  {products?.totalAmmount + delivaryFees}</div>):""
        }
         <div className="button">  
          <button className="bye" onClick={()=>{
            navigate('/order')
          }}> <HiMiniCurrencyRupee/> Order Now </button>
        </div>
        </div>
        </div>
       

    </div>
  )
}

export default CartPage