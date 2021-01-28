import React from "react";

function Flash({ notice }) {
  console.log("entered flash");
  return (
    <p className="mb-4 text-white bg-green-400 px-2 py-3 border-gray-200 font-lg font-semibold">
      {notice}
    </p>
  );
}
export default Flash;
