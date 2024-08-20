import React from 'react'
import API from '../../utils/axiosSetup';
import { baseUrl } from '../../App';
import { useParams } from 'react-router-dom';

function Payment() {
  const { id } = useParams()
  return (
    <div>
      <h1 className='p-3 text-center text-xl text-gray-600 '>Payment Details</h1>     
      
    </div>
  )
}

export default Payment