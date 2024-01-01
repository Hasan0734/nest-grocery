import React from 'react';
import {cn} from "@/utls/utils";

const OrderTableRow = ({order}:any) => {
    return (
        <>
            <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                    #{order.orderNumber}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center font-semibold">{order.date}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex items-center justify-center">
                    <span className={cn('px-2 py-1 rounded-lg font-medium capitalize', {
                        "bg-softRose text-rose" : order.status === 'processing',
                        "bg-primary-soft text-primary" : order.status === 'completed',
                        "bg-warning/20 text-warning" : order.status === 'failed',
                    })}>
                        {order.status}
                    </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center font-semibold">${order.totalAmount} for {order.totalItemCount} item
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium text-center">
                    <a href="#" className="text-primary hover:text-warning">
                        View
                    </a>
                </td>
            </tr>
        </>
    );
};

export default OrderTableRow;
