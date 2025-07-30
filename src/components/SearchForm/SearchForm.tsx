import React from "react";
import { Radio, Select, TextField } from "../../ui";

export const SearchForm: React.FC = () => {
  const searchTypes = [
    {
      id: "continent-currency",
      value: "continent-currency",
      label: "Search by Continent and Currency",
    },
    {
      id: "country-code",
      value: "country-code",
      label: "Search by Country Code",
    },
  ];

  const continentOptions = [{ value: "EU", label: "Europe" }];

  return (
    <div className="mb-6">
      <h2 className="text-base font-medium text-gray-700 mb-4">
        Select Search Type
      </h2>
      <div className="space-y-4">
        {searchTypes.map((type) => (
          <div key={type.id} className="flex items-center space-x-4">
            <Radio
              id={type.id}
              name="searchType"
              value={type.value}
              checked={type.value === "continent-currency"}
            />
            <label
              htmlFor={type.id}
              className="text-sm font-medium text-gray-700"
            >
              {type.label}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex space-x-4">
          <Select
            id="continent"
            options={continentOptions}
            placeholder="Continent"
          />
          <TextField
            id="currency"
            placeholder="Currency"
            className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <TextField id="countryCode" placeholder="Country Code" />
      </div>
    </div>
  );
};
