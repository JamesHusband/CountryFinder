import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { filterState } from "../../state";

export const useFilterState = () => {
  const [state, setState] = useRecoilState(filterState);

  const updateContinent = useCallback(
    (continent: string) => {
      setState((prev) => ({ ...prev, continent }));
    },
    [setState]
  );

  const updateCurrency = useCallback(
    (currency: string) => {
      setState((prev) => ({ ...prev, currency }));
    },
    [setState]
  );

  const updateCountryCode = useCallback(
    (countryCode: string) => {
      setState((prev) => ({ ...prev, countryCode }));
    },
    [setState]
  );

  const updateCountryName = useCallback(
    (countryName: string) => {
      setState((prev) => ({ ...prev, countryName }));
    },
    [setState]
  );

  const clearFilters = useCallback(() => {
    setState((prev) => ({
      ...prev,
      continent: "",
      currency: "",
      countryCode: "",
      countryName: "",
    }));
  }, [setState]);

  return {
    ...state,
    updateContinent,
    updateCurrency,
    updateCountryCode,
    updateCountryName,
    clearFilters,
  };
};
