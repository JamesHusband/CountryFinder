import React from "react";
import { Formik, Form, Field } from "formik";
import type { FieldProps } from "formik";
import { Radio, Select, TextField } from "../../ui";
import { useSearchState, useContinentOptions } from "../../hooks";

interface FormValues {
  continent: string;
  currency: string;
  countryCode: string;
}

export const SearchForm: React.FC = () => {
  const { searchType, searchTypes, updateSearchType } = useSearchState();

  const { options: continentOptions } = useContinentOptions();

  const initialValues: FormValues = {
    continent: "",
    currency: "",
    countryCode: "",
  };

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

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        enableReinitialize={false}
      >
        <Form>
          <div className="mt-6 space-y-4">
            {searchType === "continent-currency" && (
              <div className="flex space-x-4">
                <Field name="continent">
                  {({ field }: FieldProps<string>) => (
                    <Select
                      id="continent"
                      options={continentOptions}
                      placeholder="Continent"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                  )}
                </Field>
                <Field name="currency">
                  {({ field }: FieldProps<string>) => (
                    <TextField
                      id="currency"
                      placeholder="Currency"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    value={field.value}
                    onChange={field.onChange}
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
