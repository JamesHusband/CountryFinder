import React from "react";

interface ItemCountProps {
  count: number;
  label?: string;
}

export const ItemCount: React.FC<ItemCountProps> = ({
  count,
  label = "entries",
}) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mt-4">
      <div className="text-sm font-medium text-gray-900">
        Total: {count} {label}
      </div>
    </div>
  );
};
