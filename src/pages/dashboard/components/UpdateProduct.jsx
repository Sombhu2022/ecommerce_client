import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, updateProduct } from '../../../redux/product/productController'

function UpdateProduct({id , name , price , discount , stock , image}) {
    const [productStock , setProductStock] = useState(stock)
    const [productPrice , setProductPrice] = useState(price)
    const [productDiscount , setProductDiscount ] = useState(discount)

    console.log(productStock ,productDiscount , productPrice);
    const dispatch = useDispatch()
    const updateProductData =(e)=>{
        e.preventDefault();
        dispatch(updateProduct({id , stock:productStock , price:productPrice , discount:productDiscount}))
    }

    const deleteProductData =(e)=>{
       e.preventDefault()
       dispatch(deleteProduct({id}))
    }
  return (
    <div className='item-container'>
    <div className='product_image'>
     <img src={image} alt="" />
     <div className='name'>
       <p>{name}</p>
       <p className='id'>{id}</p>
     </div>
    </div>
    <div className='product_details'>
     <form action="" className='form'>
      <p>Stock</p>
      <input type="Number" placeholder='Stock' name='stock' value={productStock} onChange={(e)=>setProductStock(Number(e.target.value))} />
      <p>Price</p>
      <input type="Number" placeholder='Price' name='price' value={productPrice} onChange={(e)=>setProductPrice(Number(e.target.value))}/>
      <p>Discount</p>
      <input type="Number" placeholder='Discount' name='' value={productDiscount} onChange={(e)=>setProductDiscount(Number(e.target.value))} />
     <div className='button'>
       <button type='submit' className='update' onClick={updateProductData}> update </button>
       <button type='submit' onClick={deleteProductData}> Delete </button>
     </div>

     </form>


    </div>
   </div>
  )
}

export default UpdateProduct