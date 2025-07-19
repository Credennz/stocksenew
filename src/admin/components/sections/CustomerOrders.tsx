import React from 'react';
import { format } from 'date-fns';
import { useAdminData } from '../../hooks/useAdminData';

export const CustomerOrders = () => {
  const { customerOrders } = useAdminData();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">Customer Orders</h2>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Strategy</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customerOrders.map((order: any) => (
              <tr key={order.id}>
                <td className="px-6 py-4 text-sm text-primary-dark">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">{order.strategy}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">{order.type}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">₹{order.amount}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-primary-dark">
                  {format(new Date(order.date), 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-primary-dark">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};