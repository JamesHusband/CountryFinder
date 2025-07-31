import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { tableState } from "../../state";
import type { Country } from "../../types";

export const useTableState = () => {
  const [state, setState] = useRecoilState(tableState);

  const updateData = useCallback(
    (data: string[][]) => {
      setState((prev) => ({ ...prev, data }));
    },
    [setState]
  );

  const updateColumns = useCallback(
    (columns: string[]) => {
      setState((prev) => ({ ...prev, columns }));
    },
    [setState]
  );

  const updateCountries = useCallback(
    (countries: Country[]) => {
      setState((prev) => ({ ...prev, countries }));
    },
    [setState]
  );

  return {
    ...state,
    updateData,
    updateColumns,
    updateCountries,
  };
};
