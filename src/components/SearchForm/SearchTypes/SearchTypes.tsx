import React from "react";
import { Radio } from "../../../ui";
import { useSearchState } from "../../../hooks";

interface SearchTypesProps {
  selectedType: string;
  onTypeChange: (value: "continent-currency" | "country-code") => void;
}

export const SearchTypes: React.FC<SearchTypesProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const { searchTypes } = useSearchState();

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Search Type</h3>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {searchTypes.map((type) => (
          <div key={type.id}>
            <Radio
              id={type.id}
              name="searchType"
              value={type.value}
              checked={selectedType === type.value}
              onChange={() =>
                onTypeChange(
                  type.value as "continent-currency" | "country-code"
                )
              }
              label={type.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
