import React from "react";

interface ErrorProps {
  message?: string;
  error?: Error | string;
  className?: string;
}

export const Error: React.FC<ErrorProps> = ({
  message = "An error occurred",
  error,
  className = "",
}) => {
  const errorMessage =
    error instanceof Error ? error.message : String(error) || message;

  return (
    <div className={`flex justify-center items-center h-64 ${className}`}>
      <div className="text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <div className="text-lg text-red-600 mb-2">{message}</div>
        {error && (
          <div className="text-sm text-gray-500 max-w-md break-words">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};
