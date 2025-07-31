import React from "react";

interface StatusProps {
  type: "loading" | "error";
  message?: string;
  error?: Error | string;
  className?: string;
}

export const Status: React.FC<StatusProps> = ({
  type,
  message,
  error,
  className = "",
}) => {
  const isError = type === "error";
  const defaultMessage = isError ? "An error occurred" : "Loading...";
  const displayMessage = message || defaultMessage;

  const errorMessage =
    error instanceof Error ? error.message : String(error) || displayMessage;

  return (
    <div className={`flex justify-center items-center h-64 ${className}`}>
      <div className="text-center">
        {isError ? (
          <>
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <div className="text-lg text-red-600 mb-2">{displayMessage}</div>
            {error && (
              <div className="text-sm text-gray-500 max-w-md break-words">
                {errorMessage}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <div className="text-lg text-gray-600">{displayMessage}</div>
          </>
        )}
      </div>
    </div>
  );
};
