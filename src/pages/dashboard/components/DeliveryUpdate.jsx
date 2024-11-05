import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, updateDeliveryStatus } from '../../../redux/order/orderController'

function DeliveryUpdate() {
    const { orders, status, message, error } = useSelector((state) => state.order)
    const dispatch = useDispatch()


   

    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])


    useEffect(() => {
        if(status.updateDelivery === 'success'){
            dispatch(getAllOrders())

        }
    }, [status.updateDelivery])

    const handleStatusChange = (orderId, newStatus) => {
        console.log(orderId , newStatus);
        
        dispatch(updateDeliveryStatus({ orderId, deliveryStatus: newStatus }))
    }

    return (
        <div className="p-6  overflow-auto m-5 ">
            <h2 className="text-2xl font-semibold mb-4">Order Delivery Status</h2>
            {status === 'loading' && <p>Loading orders...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}

            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Order ID</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Total Amount</th>
                        <th className="border p-2">Payment Status</th>
                        <th className="border p-2">Delivery Status</th>
                        <th className="border p-2">Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td className="border p-2">{order._id}</td>
                            <td className="border p-2">{order.email}</td>
                            <td className="border p-2">{order.phone}</td>
                            <td className="border p-2">{order.totalAmmount}</td>
                            <td className="border p-2">{order.paymentStatus}</td>
                            <td className={`border p-2 font-semibold ${order.deliveryStatus === 'pending'?'text-yellow-600':order.deliveryStatus === 'success'? 'text-green-600':'text-red-600' }`}>{order.deliveryStatus}</td>
                            <td className="border p-2">
                                <select
                                    value={order.deliveryStatus}
                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    className="border p-1 rounded"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="success">Delivered</option>
                                    <option value="rejected">Cancelled</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DeliveryUpdate
