import React from "react";

export const SearchForm: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-base font-medium text-gray-700 mb-4">
        Select Search Type
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="continent-currency"
            name="searchType"
            value="continent-currency"
            defaultChecked
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="continent-currency"
            className="text-sm font-medium text-gray-700"
          >
            Search by Continent and Currency
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="country-code"
            name="searchType"
            value="country-code"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="country-code"
            className="text-sm font-medium text-gray-700"
          >
            Search by Country Code
          </label>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex space-x-4">
          <select
            id="continent"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-500 font-normal"
            defaultValue=""
          >
            <option value="" hidden>
              Continent
            </option>
            <option value="EU">Europe</option>
          </select>
          <input
            type="text"
            id="currency"
            placeholder="Currency"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <input
          type="text"
          id="countryCode"
          placeholder="Country Code"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};
