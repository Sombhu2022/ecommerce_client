import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersOfUser } from '../../../../redux/order/orderController';
import { Link } from 'react-router-dom';

function MyOrder() {
  const dispatch = useDispatch();
  const { orders, error, status } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllOrdersOfUser());
  }, [dispatch]);

  console.log(orders);
  

  if (status.getOrder === 'pending') return <p className="text-center text-xl font-semibold mt-8">Loading...</p>;
  if (error) return <p className="text-center text-xl font-semibold mt-8 text-red-600">Error: {error}</p>;

  // Helper function to assign gradient colors based on delivery status
  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'bg-gradient-to-r from-green-400 to-green-600';
      case 'pending':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'rejected':
        return 'bg-gradient-to-r from-red-400 to-red-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        My Orders
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <article
            key={order._id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <header className={`p-6 ${getStatusColor(order.deliveryStatus)} text-white`}>
              <h3 className="text-2xl font-bold truncate">Order ID: {order._id}</h3>
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold rounded-full bg-white text-purple-600">
                {order.deliveryStatus}
              </span>
            </header>
            <div className="p-6">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div className="col-span-2">
                  <dt className="font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-gray-900">{order.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-gray-900">{order.phone}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Payment</dt>
                  <dd className="mt-1 text-gray-900">
                    {order.paymentType === 'offline'?"Case On Delivary":order.paymentType} -{' '}
                    <span className={order.paymentStatus === 'success' ? 'text-green-600' : 'text-red-600'}>
                    {order.paymentStatus === 'panding'?"Due":order.paymentStatus}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Total Amount</dt>
                  <dd className="mt-1 text-gray-900">₹{order.totalAmmount}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-500">Delivery Charge</dt>
                  <dd className="mt-1 text-gray-900">₹{order.deliveryCharge}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Delivery Address</h4>
                <address className="mt-1 not-italic text-sm text-gray-600">
                  {order.address.city}, {order.address.district}, <br />
                  {order.address.state} - {order.address.pincode}
                </address>
              </div>
            </div>
            <footer className="px-6 py-4 bg-gray-50">
                <Link to={`/order/${order._id}`}>
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300 ${getStatusColor(
                  order.deliveryStatus
                )} hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
              >
                View Details
              </button>
                </Link>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MyOrder;
