import React from "react";

const Result = () => {
  return (
    <div className="bg-[#0c2744] text-white p-8 w-2/5 flex flex-col justify-center items-center">
      <div className="mb-8">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* You can add the SVG path data for the icon here */}
          <rect width="60" height="60" fill="#E8FD5F" rx="10" />
          <path
            d="M20 30h20M30 20v20"
            stroke="#0C2744"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4">Results shown here</h2>
      <p className="text-center text-gray-300">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default Result;
