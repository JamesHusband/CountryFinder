import React from "react";

interface TextFieldProps {
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};
