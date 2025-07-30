import { useRecoilState } from "recoil";
import { searchState } from "../../state";
import type { SearchState } from "../../state";

export const useSearchState = () => {
  const [state, setState] = useRecoilState(searchState);

  const updateSearchType = (searchType: SearchState["searchType"]) => {
    setState((prev) => ({
      ...prev,
      searchType,
    }));
  };

  return {
    ...state,
    updateSearchType,
  };
};
