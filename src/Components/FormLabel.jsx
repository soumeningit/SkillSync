import React from "react";

function FormLabel({ htmlFor, children }) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {children} <span className="text-red-500">*</span>
      </label>
    </>
  );
}

export default FormLabel;
