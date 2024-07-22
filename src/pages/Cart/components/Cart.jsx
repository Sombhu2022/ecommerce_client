import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { useDispatch} from 'react-redux';
import { updateProductQantity } from '../../../redux/cart/cartController';

function Cart({ product , totalPrice , quantity}) {
     
    const dispatch = useDispatch()
     const handleQuantity =(type)=>{
        const data ={ cartId: product._id , type: type , price:product.actualPrice }
         dispatch(updateProductQantity(data))
     }

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
          <button onClick={()=>handleQuantity('+')}> + </button>
          <span> {quantity}</span>
          <button onClick={()=>handleQuantity('-')}> - </button>
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