import { useQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_CONTINENTS } from "../../graphql";
import type { CountriesResponse, ContinentsResponse } from "../../graphql";
import type { Country, Continent } from "../../graphql/types";

export const useCountryData = () => {
  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
  } = useQuery<CountriesResponse>(GET_COUNTRIES);

  const {
    data: continentsData,
    loading: continentsLoading,
    error: continentsError,
  } = useQuery<ContinentsResponse>(GET_CONTINENTS);

  return {
    countries: (countriesData?.countries || []) as Country[],
    continents: (continentsData?.continents || []) as Continent[],
    loading: countriesLoading || continentsLoading,
    error: countriesError || continentsError,
  };
};
