import React from "react";
import { Formik, Form, Field } from "formik";
import type { FieldProps } from "formik";
import { Radio, Select, TextField } from "../../ui";
import {
  useSearchState,
  useContinentOptions,
  useCurrencyOptions,
  useFilterState,
  useDebouncedSearch,
} from "../../hooks";

interface FormValues {
  continent: string;
  currency: string;
  countryCode: string;
}

export const SearchForm: React.FC = () => {
  const { searchType, searchTypes, updateSearchType } = useSearchState();

  const { options: continentOptions } = useContinentOptions();
  const { options: currencyOptions } = useCurrencyOptions();
  const {
    continent,
    currency,
    countryCode,
    updateContinent,
    updateCurrency,
    updateCountryCode,
  } = useFilterState();

  const {
    searchValue: debouncedCountryCode,
    handleSearchChange: handleCountryCodeChange,
  } = useDebouncedSearch({
    delay: 300,
    onSearch: updateCountryCode,
  });

  const initialValues: FormValues = {
    continent: continent,
    currency: currency,
    countryCode: countryCode,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Search Type
        </h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {searchTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <Radio
                id={type.id}
                name="searchType"
                value={type.value}
                checked={searchType === type.value}
                onChange={() => updateSearchType(type.value)}
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
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        enableReinitialize={true}
      >
        <Form>
          <div className="mt-6 space-y-4">
            {searchType === "continent-currency" && (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Field name="continent">
                  {({ field }: FieldProps<string>) => (
                    <Select
                      id="continent"
                      options={continentOptions}
                      placeholder="Continent"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        updateContinent(e.target.value);
                      }}
                      onBlur={field.onBlur}
                    />
                  )}
                </Field>
                <Field name="currency">
                  {({ field }: FieldProps<string>) => (
                    <Select
                      id="currency"
                      options={currencyOptions}
                      placeholder="Currency"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        updateCurrency(e.target.value);
                      }}
                      onBlur={field.onBlur}
                    />
                  )}
                </Field>
              </div>
            )}

            {searchType === "country-code" && (
              <Field name="countryCode">
                {({ field }: FieldProps<string>) => (
                  <TextField
                    id="countryCode"
                    placeholder="Country Code"
                    value={debouncedCountryCode}
                    onChange={(e) => {
                      field.onChange(e);
                      handleCountryCodeChange(e.target.value);
                    }}
                    onBlur={field.onBlur}
                  />
                )}
              </Field>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};
