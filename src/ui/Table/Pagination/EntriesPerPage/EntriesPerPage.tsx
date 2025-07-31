import React from "react";

interface EntriesPerPageProps {
  entriesPerPage: number;
  entriesPerPageOptions: { value: number; label: string }[];
  onEntriesPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const EntriesPerPage: React.FC<EntriesPerPageProps> = ({
  entriesPerPage,
  entriesPerPageOptions,
  onEntriesPerPageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700">Show</span>
      <select
        value={entriesPerPage}
        onChange={onEntriesPerPageChange}
        className="border border-gray-300 rounded px-2 py-1 text-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer"
      >
        {entriesPerPageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-sm text-gray-700">entries</span>
    </div>
  );
};
