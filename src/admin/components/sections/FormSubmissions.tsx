import React from 'react';
import { format } from 'date-fns';
import { useAdminData } from '../../hooks/useAdminData';

export const FormSubmissions = () => {
  const { formSubmissions } = useAdminData();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">Form Submissions</h2>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-primary/5">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {formSubmissions.map((submission: any) => (
              <tr key={submission.id}>
                <td className="px-6 py-4 text-sm text-primary-dark">{submission.type}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">{submission.name}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">{submission.email}</td>
                <td className="px-6 py-4 text-sm text-primary-dark">
                  {format(new Date(submission.date), 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {submission.status}
                  </span>
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