import React, { useEffect, useState } from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { useDispatch, useSelector} from 'react-redux';
import { updateProductQantity } from '../../../redux/cart/cartController';

import { spiral } from "ldrs";
import { toast } from 'react-toastify';


function Cart({ product , totalPrice , quantity}) {
        spiral.register()
        const {cart , status} = useSelector(state => state.cart)
        const [loading , setLoading] = useState(false)
        const dispatch = useDispatch()
        const handleQuantity =(type)=>{
        const data ={ cartId: product._id , type: type , price:product.actualPrice }
         dispatch(updateProductQantity(data))
     }

     useEffect(()=>{
          if(status === 'pending'){
            setLoading(true)
           
            
          }else{
            setLoading(false)
          }

          if(status === 'success'){
            toast.success("successfully update your cart")
          }
     },[status])

  return (
    <div className='cart'>
     <div className='product_image'>
      <img src={product?.images[0]?.url} alt="" />
     </div>
     <div className='product_details'>
      <div className='name'>
        <p>{product?.name}</p>
        <p className='id'>{product?._id}</p>
      </div>
      <div className='button'>
        {
          
        }
        <div>
          <button onClick={()=>handleQuantity('+')}>   {loading?<l-spiral size="60" speed="0.9" color="green"></l-spiral> : "+" } </button>
          <span> {quantity}</span>  
          <button onClick={()=>handleQuantity('-')}> {loading?<l-spiral size="60" speed="0.9" color="green"></l-spiral> :"-"}</button>
        </div>
      </div>
      <div className='price'>
      <BsCurrencyRupee/>  {totalPrice}
        </div>
     </div>
    </div>
  )
}

export default Cart