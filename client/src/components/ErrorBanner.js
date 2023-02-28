import React from "react";

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러가 발생했습니다.";
  return <div style={{ color: "red" }}>{errorMessage}</div>;
};

export default ErrorBanner;
