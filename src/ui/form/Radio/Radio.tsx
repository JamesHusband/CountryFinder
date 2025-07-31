import React from "react";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked = false,
  onChange,
  label,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={id} className="text-sm font-medium text-gray-700 ml-2">
        {label}
      </label>
    </div>
  );
};
