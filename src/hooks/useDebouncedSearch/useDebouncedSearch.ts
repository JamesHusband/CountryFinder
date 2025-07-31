import { useState, useCallback, useEffect } from "react";
import { debounce } from "../../utils/debounce";

interface UseDebouncedSearchOptions {
  delay?: number;
  onSearch: (value: string) => void;
}

export const useDebouncedSearch = ({
  delay = 300,
  onSearch,
}: UseDebouncedSearchOptions) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, delay),
    [onSearch, delay]
  );

  useEffect(() => {
    if (searchValue !== "") {
      debouncedSearch(searchValue);
    } else {
      onSearch("");
    }
  }, [searchValue, debouncedSearch, onSearch]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  return {
    searchValue,
    handleSearchChange,
  };
};
