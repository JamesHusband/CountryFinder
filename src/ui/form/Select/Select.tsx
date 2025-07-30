import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder,
  className = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-500 font-normal",
}) => {
  return (
    <select id={id} value={value} onChange={onChange} className={className}>
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
