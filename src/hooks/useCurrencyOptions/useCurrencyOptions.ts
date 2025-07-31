import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { currencyOptionsState } from "../../state";
import { extractCurrenciesByContinent } from "../../utils/currencyFilter";
import type { Country } from "../../types";

export const useCurrencyOptions = () => {
  const [state, setState] = useRecoilState(currencyOptionsState);

  const updateOptions = useCallback(
    (options: { value: string; label: string }[]) => {
      setState((prev) => ({ ...prev, options }));
    },
    [setState]
  );

  const setLoading = useCallback(
    (loading: boolean) => {
      setState((prev) => ({ ...prev, loading }));
    },
    [setState]
  );

  const setError = useCallback(
    (error: string | null) => {
      setState((prev) => ({ ...prev, error }));
    },
    [setState]
  );

  const updateOptionsByContinent = useCallback(
    (countries: Country[], continentName: string) => {
      const currencies = extractCurrenciesByContinent(countries, continentName);
      const options = currencies.map((currency) => ({
        value: currency,
        label: currency,
      }));
      setState((prev) => ({ ...prev, options }));
    },
    [setState]
  );

  return {
    ...state,
    updateOptions,
    setLoading,
    setError,
    updateOptionsByContinent,
  };
};
