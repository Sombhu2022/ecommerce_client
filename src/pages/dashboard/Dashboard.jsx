import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './dashboard.scss'
import UpdateProduct from './components/UpdateProduct'

function Dashboard() {
  
   const { product } = useSelector((state)=> state.product)
   const [products , setProducts] = useState()

   
   useEffect(()=>{
       if(product){
          setProducts(product)
       }
   },[product])

   const dispatch = useDispatch()
  console.log(product);
  return (
    <div>
      <div className='product-update-container'>

        {
          products?.map((item)=>{
            return(
              <div className='update-container' key={item?._id}>
                 <UpdateProduct id={item?._id} name={item?.name} image={item.images[0]?.url} stock={item?.stock} discount={item?.discount} price={item?.price} />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Dashboard