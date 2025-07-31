import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { currencyOptionsState } from "../../state";

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

  return {
    ...state,
    updateOptions,
    setLoading,
    setError,
  };
};
