import React from "react";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked = false,
  onChange,
  className = "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
}) => {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={className}
    />
  );
};
