import React, { useState } from "react";
const Calculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");

  const handleCalculate = () => {
    // Implement calculation logic here
    console.log("Calculating...");
  };

  return (
    <div className="p-8 w-3/5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mortgage Calculator</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mortgage Amount
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-[#e8fd5f] rounded-l-md px-3">
              £
            </span>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
              className="pl-12 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e8fd5f] focus:border-transparent"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mortgage Term
            </label>
            <div className="flex">
              <input
                type="number"
                value={mortgageTerm}
                onChange={(e) => setMortgageTerm(e.target.value)}
                className="w-2/3 border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-[#e8fd5f] focus:border-transparent"
              />
              <span
                className="w-1/3 inline-flex items-center px-3 bg-gray-100 text-gray-700 border border-l-0
               border-gray-300 rounded-r-md"
              >
                years
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate
            </label>
            <div className="flex">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-2/3 border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-[#e8fd5f] focus:border-transparent"
              />
              <span className="w-1/3 inline-flex items-center px-3 bg-gray-100 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                %
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mortgage Type
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 p-3 bg-[#e8fd5f] rounded-md cursor-pointer">
              <input
                type="radio"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
                className="form-radio text-[#e8fd5f] focus:ring-[#e8fd5f]"
              />
              <span>Repayment</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-md cursor-pointer">
              <input
                type="radio"
                value="interestOnly"
                checked={mortgageType === "interestOnly"}
                onChange={() => setMortgageType("interestOnly")}
                className="form-radio text-[#e8fd5f] focus:ring-[#e8fd5f]"
              />
              <span>Interest Only</span>
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className=" w-full   text-gray-800 mt-6 rounded-md font-medium bg-[#e8fd5f] hover:bg-[#d3e854] transition duration-300 "
      >
        <img
          src="icon-calculator.png"
          className="w-7 h-7 mx-20"
          alt="Calculate Repayments"
        />
        Calculate Repayments
      </button>
    </div>
  );
};

export default Calculator;
