import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../../../../redux/order/orderController'
import PaymentReceipt from '../../../Order/PaymentRecipt'
import PaymentReceiptPDF from '../../../Order/PaymentReceiptPDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

function OrderDetails() {

  const {orderId } = useParams()
  const dispatch = useDispatch()
  const { orders , selectOrder , status } = useSelector((state)=> state.order)

  useEffect(()=>{
     dispatch(getOrderDetails({orderId}))
  },[orderId])

  console.log('selset order ' , selectOrder);
  

  return (
    <div>
        <h2 className='m-5 align-middle text-center font-bold text-3xl'> Order details</h2>
        <PaymentReceipt data={selectOrder} topic='Invoice details'/>

     <div className=' flex justify-center items-center mt-6'>

        <PDFDownloadLink
              document={<PaymentReceiptPDF data={selectOrder} topic='Invoice details'/>}
              fileName="payment_receipt.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
           Download Receipt
             
        </PDFDownloadLink>
     </div>
    </div>
  )
}

export default OrderDetails