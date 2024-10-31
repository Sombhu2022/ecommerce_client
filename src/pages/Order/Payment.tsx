

import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import API from '../../utils/axiosSetup'
import { baseUrl } from '../../App'
import { useParams } from 'react-router-dom'
import PaymentReceiptPDF from './PaymentReceiptPDF'

interface PaymentData {
  address: {
    city: string
    district: string
    pincode: string
    state: string
  }
  deliveryStatus: string
  deliveryCharge: number
  email: string
  paymentStatus: string
  paymentType: string
  phone: number
  products: Array<{
    product: string
    productName: string
    productQuantity: number
    totalPrice: number
  }>
  razorpay_order_id: string
  razorpay_payment_id: string
  totalAmount: number
}

export default function Payment() {
  const { id } = useParams()
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)

  const fetchPaymentDetails = async () => {
    try {
      const { data } = await API.get(`${baseUrl}/order/recipt/${id}`, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      })
      setPaymentData(data.data)
      
      
    } catch (error) {
      console.error('Error fetching payment details:', error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchPaymentDetails()
    }
  }, [id])

  if (!paymentData) {
    return <div className="flex text-black justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Payment Receipt</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <PDFViewer className="w-full h-[600px] mb-6 text-black bg-gray-200">
            <PaymentReceiptPDF data={paymentData} />
          </PDFViewer>
          <div className="flex justify-center">
            <PDFDownloadLink
              document={<PaymentReceiptPDF data={paymentData} />}
              fileName="payment_receipt.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
           Download Receipt
             
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  )
}