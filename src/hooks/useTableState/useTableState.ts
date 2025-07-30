import { useRecoilState } from "recoil";
import { useCallback } from "react";
import { tableState } from "../../state";

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

  const resetTable = useCallback(() => {
    setState((prev) => ({
      ...prev,
      data: [],
      columns: [],
    }));
  }, [setState]);

  return {
    ...state,
    updateData,
    updateColumns,
    resetTable,
  };
};
