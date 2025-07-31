import React from "react";
import { useFormikContext } from "formik";
import { Select, TextField } from "../../../ui";
import { SearchTypes } from "../SearchTypes";
import {
  useSearchState,
  useContinentOptions,
  useCurrencyOptions,
  useFilterState,
  useDebouncedSearch,
} from "../../../hooks";

interface FormValues {
  searchType: "continent-currency" | "country-code";
  continent: string;
  currency: string;
  countryCode: string;
}

export const SearchFormContext: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const { updateContinent, updateCurrency, updateCountryCode } =
    useFilterState();
  const { updateSearchType } = useSearchState();
  const { options: continentOptions } = useContinentOptions();
  const { options: currencyOptions } = useCurrencyOptions();

  const {
    searchValue: debouncedCountryCode,
    handleSearchChange: handleCountryCodeChange,
  } = useDebouncedSearch({
    delay: 300,
    onSearch: updateCountryCode,
  });

  const handleSearchTypeChange = (
    value: "continent-currency" | "country-code"
  ) => {
    setFieldValue("searchType", value);
    updateSearchType(value);
  };

  const handleContinentChange = (value: string) => {
    setFieldValue("continent", value);
    updateContinent(value);
  };

  const handleCurrencyChange = (value: string) => {
    setFieldValue("currency", value);
    updateCurrency(value);
  };

  return (
    <>
      <SearchTypes
        selectedType={values.searchType}
        onTypeChange={handleSearchTypeChange}
      />

      <div className="mt-6 space-y-4">
        {values.searchType === "continent-currency" && (
          <div className="flex flex-row space-x-4">
            <Select
              id="continent"
              options={continentOptions}
              placeholder="Continent"
              value={values.continent}
              onChange={(e) => handleContinentChange(e.target.value)}
            />
            <Select
              id="currency"
              options={currencyOptions}
              placeholder="Currency"
              value={values.currency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
            />
          </div>
        )}

        {values.searchType === "country-code" && (
          <TextField
            id="countryCode"
            placeholder="Country Code"
            value={debouncedCountryCode}
            onChange={(e) => handleCountryCodeChange(e.target.value)}
          />
        )}
      </div>
    </>
  );
};
