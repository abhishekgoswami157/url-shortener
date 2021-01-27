import React from "react";

function Errors({ err }) {
  return err?.map((error) => {
    return <p className="mb-2 text-red-800 font-lg font-semibold">*{error}</p>;
  });
}

export default Errors;
