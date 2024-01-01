import React from 'react';
import OrderTableRow from "@/components/Account/OrderTableRow";



const orders = [
    {id:1, orderNumber: '1212', date: 'Dec 01, 2023', status: 'processing', totalAmount: 123, totalItemCount: 3},
    {id:2, orderNumber: '2323', date: 'Aug 01, 2023', status: 'completed', totalAmount: 175, totalItemCount: 2},
    {id:3, orderNumber: '2353', date: 'Jul 01, 2023', status: 'processing', totalAmount: 235, totalItemCount: 5},
    {id:4, orderNumber: '4323', date: 'Jun 01, 2023', status: 'completed', totalAmount: 90, totalItemCount: 1},
    {id:5, orderNumber: '5433', date: 'March 01, 2023', status: 'completed', totalAmount: 72, totalItemCount: 5},
    {id:6, orderNumber: '5433', date: 'Jan 01, 2023', status: 'failed', totalAmount: 72, totalItemCount: 5},
]
const MyOrders = () => {
    return (
        <div>
            <h3 className={'text-3xl font-bold'}>Your Orders</h3>
            <div className="flow-root mt-5">
                <div className="-mx-4 -my-2 overflow-x-auto scrollbar sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr className={'bg-gray-100'}>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                    Order
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                    Total
                                </th>
                                <th scope="col"
                                    className="relative py-3.5 pl-3 pr-4  px-3 text-center text-sm font-semibold text-gray-900">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {orders.map(order => (
                                <OrderTableRow key={order.id} order={order}/>
                            ))}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
