import { useState, useCallback, useEffect } from "react";

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
    (value: string) => {
      const timeoutId = setTimeout(() => {
        onSearch(value);
      }, delay);
      return () => clearTimeout(timeoutId);
    },
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
