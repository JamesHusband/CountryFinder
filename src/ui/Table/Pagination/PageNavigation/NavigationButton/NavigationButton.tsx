import React from "react";

interface NavigationButtonProps {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const icon = direction === "previous" ? "‹" : "›";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 rounded transition-colors"
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {icon}
    </button>
  );
};
