import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API from '../../utils/axiosSetup';
import { baseUrl } from '../../App';

import './order.scss'

import { getLocation } from 'current-location-geo';

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
  const [products , setProducts] = useState([])
  const [totalAmmount , setTotalAmmount]=useState()
  const [delivaryFees , setDelivaryFees] = useState(0)
  
  const [email , setEmail]= useState("")
  const [phone , setPhone]=useState('')
  const [paymentType , setPaymentType] = useState("online")
  const { product , status } = useSelector((state)=>state.cart)

  useEffect(()=>{
    
    setProducts(product.cart)
    setTotalAmmount(product.totalAmmount)
    if(product.totalAmmount < 500){
      setDelivaryFees(50)
    }
  } , [status])
  
  
console.log( products);

  const getCurrentLocation =async (e)=>{
     e.preventDefault();
     setIsLoading(true)
     getLocation((err, position)=>{
      if (err) {
        console.error('Error:', err);
        setIsCurrent(false)
      } else {
        setAddress(position.address)
        setCoordinets([position.latitude , position.longitude ])
        let arr = position.address.split(',')
        console.log(arr[arr.length - 2]);
        setPincode(arr[arr.length - 2])

        console.log('COORD:', coordinets);
        console.log('Address:', address);
        console.log("pin code : " , pincode);
        setIsCurrent(true)
        setIsLoading(false)
      }
    });

      
  }

  // let productArray=[] ;
  // products?.map(ele=>{
  //   productArray.push(
  //     `${ele.product._id},
  //     ${ele.product.name},
  //     ${ele.productQuantity},
  //     ${ele.totalPrice}.`
  
  //   )

  // })

  

  const handleSubmit =async(e)=>{
    e.preventDefault();
   
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

   try {
        const {data} =await API.post(`${baseUrl}/order`,formData, {
          headers: { "Content-Type": "multipart/form-data", },
          withCredentials: true
      })
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>
      <h2>
        Order Your Products 
      </h2>
      <div className="form_container2">
        <form action="" className="form" >

          <input
            type="email"
            name="email"
            id=""
            placeholder='Enter your Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
        <div className='current_location'>

         <button onClick={getCurrentLocation}> <MdMyLocation/> {isLoading? "loading....":"Use Current Location" }  </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Order