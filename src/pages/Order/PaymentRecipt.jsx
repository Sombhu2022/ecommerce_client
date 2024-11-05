import React, { useEffect, useState } from 'react';

const PaymentReceipt = ({ data = {} , topic ='payment Receipt'}) => {
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    setOrderDetails(data);
  }, [data]);

  const {
    email = 'N/A',
    phone = 'N/A',
    address = {},
    razorpay_order_id = 'N/A',
    razorpay_payment_id = 'N/A',
    paymentType = 'N/A',
    paymentStatus = 'N/A',
    deliveryStatus = 'N/A',
    products = [],
    deliveryCharge = 0,
    totalAmmount = 0,
    createdAt = 'N/A',
  } = orderDetails;

  let orderdate = '';
  if (createdAt !== 'N/A') {
    const date = new Date(createdAt);
    orderdate = date.toLocaleString() || 'N/A';
  }

  let deliveryStatusColor = 'text-yellow-500'
  if(deliveryStatus === 'success') deliveryStatusColor = 'text-green-600'
  else if(deliveryStatus === 'rejected') deliveryStatusColor = 'text-red-600'

  console.log(orderDetails);
  

  return (
    <div className="p-8 bg-gray-100 ">
      <div className="mb-5 p-4 rounded-lg bg-white shadow-md">
        <h1 className="text-2xl text-center text-blue-600 font-bold uppercase">{topic}</h1>
        <h2 className="text-lg text-gray-800 mb-2 font-bold border-b-2 border-blue-600 pb-1">Customer Information</h2>
        <p>Email: <span className="text-green-500 font-bold">{email}</span></p>
        <p>Phone: <span className="text-green-500 font-bold">{phone}</span></p>
        <p>Address: <span className="text-green-500 font-bold">
          {address.city || 'N/A'}, {address.district || 'N/A'}, {address.state || 'N/A'} - {address.pincode || 'N/A'}
        </span></p>
      </div>

      <div className="mb-5 p-4 rounded-lg bg-white shadow-md">
        <h2 className="text-lg text-gray-800 mb-2 font-bold border-b-2 border-blue-600 pb-1">Payment Details</h2>
        <p>Order ID: {razorpay_order_id}</p>
        <p>Payment ID: {razorpay_payment_id}</p>
        <p>Payment Type: {paymentType}</p>
        <p >Payment Status: {paymentStatus}</p>
        <p >Delivery Status: <b className={deliveryStatusColor} >{deliveryStatus}</b> </p>
        <p>Date: {orderdate}</p>
      </div>

      <div className="mb-5 p-4 rounded-lg bg-white shadow-md">
        <h2 className="text-lg text-gray-800 mb-2 font-bold border-b-2 border-blue-600 pb-1">Order Summary</h2>
        <div className="mt-2 bg-gray-200">
          <div className="grid grid-cols-4 text-white bg-blue-600 font-bold">
            <div className="p-2 border">Product</div>
            <div className="p-2 border">Quantity</div>
            <div className="p-2 border">Price (INR)</div>
            <div className="p-2 border">Total (INR)</div>
          </div>
          {products.map((product, index) => (
            <div className="grid grid-cols-4 bg-gray-50" key={index}>
              <div className="p-2 border text-gray-700">{product.productName || 'N/A'}</div>
              <div className="p-2 border text-gray-700">{product.productQuantity || 0}</div>
              <div className="p-2 border text-gray-700">{(product.totalPrice / product.productQuantity) || 0}</div>
              <div className="p-2 border text-gray-700">{product.totalPrice || 0}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5 p-4 rounded-lg bg-white shadow-md">
        <p>Delivery Charge: {deliveryCharge}</p>
        <p className="text-lg font-bold text-red-500">Total Amount: {totalAmmount}</p>
      </div>

      <div className="mt-5 pt-4 border-t text-center text-gray-600 text-sm">
        <p>Thank you for shopping with Apna Bazar!</p>
        <p>Website: <a href="https://som-apna-bazar.vercel.app" className="text-blue-600">apnabazar</a></p>
        <p>Contact Us: +91-7047808326 | sombhudas93@gmail.com</p>
      </div>
    </div>
  );
};

export default PaymentReceipt;
