import React from "react";

interface LoadingProps {
  message?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center h-64 ${className}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <div className="text-lg text-gray-600">{message}</div>
      </div>
    </div>
  );
};
