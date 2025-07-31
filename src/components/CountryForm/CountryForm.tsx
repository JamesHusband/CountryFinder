import React from "react";
import { Formik, Form } from "formik";
import { CountryFormContext } from "./CountryFormContext";
import { useSearchState, useFilterState } from "../../hooks";

interface FormValues {
  searchType: "continent-currency" | "country-code" | "country-name";
  continent: string;
  currency: string;
  countryCode: string;
  countryName: string;
}

export const CountryForm: React.FC = () => {
  const { searchType } = useSearchState();
  const { continent, currency, countryCode } = useFilterState();

  const initialValues: FormValues = {
    searchType: searchType,
    continent: continent,
    currency: currency,
    countryCode: countryCode,
    countryName: "",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        enableReinitialize={true}
      >
        <Form>
          <CountryFormContext />
        </Form>
      </Formik>
    </div>
  );
};
