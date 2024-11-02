import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API from '../../utils/axiosSetup';
import { baseUrl } from '../../App';


import './order.scss'

import { MdMyLocation } from "react-icons/md";
import { useSelector } from 'react-redux';

function Order() {
  const [coordinets , setCoordinets] = useState([])
  const [address , setAddress] = useState("")
  const [city , setCity] = useState('')
  const [state , setState]=useState('')
  const [district , setDistrict] = useState('')
  const [cuntry , setCuntry] = useState('')
  const [pincode , setPincode] = useState("")
  const [ isCurrent , setIsCurrent]=useState(false)
  const [isLoading , setIsLoading] = useState(false)
  const [productList , setProductList] = useState([])
  const [totalAmmount , setTotalAmmount]=useState()
  const [delivaryFees , setDelivaryFees] = useState(0)
  
  const [email , setEmail]= useState("")
  const [phone , setPhone]=useState('')
  const [paymentType , setPaymentType] = useState("online")

  const [isAddLoc , setIsAddLoc] = useState(false)

  const { product , status } = useSelector((state)=>state.cart)
  const { user } = useSelector((state)=>state.user)

console.log(paymentType);
console.log(productList);
console.log(user);

  useEffect(()=>{  
    setProductList(product.cart)
    setTotalAmmount(product.totalAmmount)
    if(product.totalAmmount < 500){
      setDelivaryFees(50)
    }
  } , [])
  
  
console.log( productList);

  const getCurrentLocation =async (e)=>{
     e.preventDefault();
     try {
       setIsLoading(true)
       navigator.geolocation.getCurrentPosition((data)=>{
           console.log(data);
      } , (error)=>{
        console.log(error);
      })
      
    } catch (error) {
       setIsLoading(false)
        console.log(error);
     }

      
  }

  // let productArray=[] ;
  // products?.map(ele=>{
  //   productArray.push(
  //     `${ele.product._id},
  //     ${ele.product.name},
  //     ${ele.productQuantity},
  //     ${ele.totalPrice}`
  
  //   )

  // })

  
  const handleSubmit =async(e)=>{
    e.preventDefault();
    
    try {
    const formData = {
      email,
      phone,
      city,
      state,
      pincode,
      district,
      products:product._id,
      totalAmmount,
      delivaryFees,
      paymentType
    }

        const {data}=await API.post(`${baseUrl}/order`,{ ...formData}, {
          headers: { "Content-Type": "application/json", },
          withCredentials: true
      })
      // console.log(data.order.id , data.key , data.order , data?.data?._id)
      console.log(data);

      const token = localStorage.getItem('token') 
      

      if(paymentType === 'online'){

        const options = {
          key : data.key ,
          amount: data.order.amount,
          currency: "INR",
          name: "Apna Bazar",
          description: "Build your healthy Life",
          image: "https://www.pngall.com/wp-content/uploads/8/Market-PNG-Image.png",
          order_id: data.order.id,
          callback_url:`${baseUrl}/order/pay/${data?.data?._id}?token=${token}`,
          
          prefill: {
              name: data.name,
              email: data.email,
              contact: "7047808326"
          },
          notes: {
              "address": "Razorpay Corporate Office"
          },
      };
       
        const razor = new window.Razorpay(options);
        razor.open();
     
      }


      } catch (error) {
        console.log(error);
      }

     
}


      // try {
        
      //   const {data } =await API.post(`${baseUrl}/order/pay`,{
      //     totalAmmount
      //   }, {
      //     headers: { "Content-Type": "application/json", },
      //     withCredentials: true
      // })
      // console.log(data);
      // } catch (error) {
      //    console.log(error);
      // }
  
  return (
    <div className=' w-[100vw] flex flex-col gap-3 justify-center items-center '>
      <h2 className='text-2xl text-gray-700 '>
        Order Your Products 
      </h2>

      { !isAddLoc?(
      <div className="form_container2">
        <form action="" className="form" >

          <input
            type="email"
            name="email"
            id=""
            placeholder='Enter your Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value);}}
          />
          <input
            type="number"
            name="pincode"
            id=""
            maxLength={10}
            placeholder='Enter your Phone Number'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <div className="pin-and-payment">
          <input
            type="text"
            name="city"
            id=""
            placeholder=' City Name'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
            <input
            type="text"
            name="State"
            id=""
            placeholder=' State Name'
            value={state}
            onChange={(e)=>setState(e.target.value)}
          />
          </div>

          <div className="pin-and-payment">
          <input
            type="text"
            name="District Name"
            id=""
            placeholder=' District Name'
            value={district}
            onChange={(e)=>setDistrict(e.target.value)}
          />
            <input
            type="text"
            name="cuntry"
            id=""
            placeholder=' Cuntry Name'
            value={cuntry}
            onChange={(e)=>setCuntry(e.target.value)}
          />
          </div>

          <div className="pin-and-payment">
          <input
            type="text"
            name="pincode"
            id=""
            placeholder=' Pin Code'
            value={pincode}
            onChange={(e)=>setPincode(e.target.value)}
          />
          <select name="" id="" value={paymentType} onChange={(e)=>setPaymentType(e.target.value)} >
          <option value="online"> Online Payment</option>
          <option value="offline"> Cesh On Delivary </option>
         </select>
          </div>

          <button type="submit"
            onClick={handleSubmit}
           >
           Add Location
          </button>
        {/* <div className='current_location'>

         <button onClick={getCurrentLocation}> <MdMyLocation/> {isLoading? "loading....":"Use Current Location" }  </button>
        </div> */}
        </form>
      </div>):""
      }

     {/* <button className='button' onClick={()=>setIsAddLoc(!isAddLoc)}> { isAddLoc? "Hide Form":"Add Location"} </button> */}
  
    </div>
  )
}

export default Order
