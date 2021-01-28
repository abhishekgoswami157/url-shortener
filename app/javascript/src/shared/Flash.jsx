import React from "react";

function Flash({ notice }) {
  return (
    <p className="text-white bg-green-300 px-4 py-3 border-gray-200 font-lg font-semibold">
      {notice}
    </p>
  );
}
export default Flash;
