import React from 'react'
import API from '../../utils/axiosSetup';
import { baseUrl } from '../../App';

function Payment() {
  const paymentBill =async()=>{
    try {

      const {data} =await API.post(`${baseUrl}/order/payment`,{name:"sombhu"}, {
        headers: { "Content-Type": "application/json", },
        withCredentials: true
    })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>Payment
     <button onClick={paymentBill}> payment </button>

    </div>
  )
}

export default Payment