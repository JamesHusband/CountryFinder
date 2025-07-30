import React from "react";

export const DataTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left">Continent</th>
            <th className="px-6 py-3 text-left">Code</th>
            <th className="px-6 py-3 text-left">Country</th>
            <th className="px-6 py-3 text-left">Capital</th>
            <th className="px-6 py-3 text-left">Currency</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Europe</td>
            <td className="px-6 py-4 whitespace-nowrap">GB</td>
            <td className="px-6 py-4 whitespace-nowrap">United Kingdom</td>
            <td className="px-6 py-4 whitespace-nowrap">London</td>
            <td className="px-6 py-4 whitespace-nowrap">GBP</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
