import { useState } from "react";

const Calculator = ({ setResult }) => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [error, setError] = useState({});

  const handleCalculate = () => {
    // Implement calculation logic here

    const newError = {};

    if (!mortgageAmount) newError.mortgageAmount = "This field is required";
    if (!mortgageTerm) newError.mortgageTerm = "This field is required";
    if (!interestRate) newError.interestRate = "This field is required";
    if (!mortgageType) newError.mortgageType = "This field is required";

    setError(newError);

    if (Object.keys(newError).length > 0) {
      return;
    }

    const amount = parseFloat(mortgageAmount);
    const term = parseInt(mortgageTerm);
    const rate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = term * 12;

    let monthlyPayment, totalRepayment;

    if (mortgageType === "repayment") {
      monthlyPayment =
        (amount * (rate * Math.pow(1 + rate, numberOfPayments))) /
        (Math.pow(1 + rate, numberOfPayments) - 1);
      totalRepayment = monthlyPayment * numberOfPayments;
    } else {
      monthlyPayment = amount * rate;
      totalRepayment = monthlyPayment * numberOfPayments;
    }

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    });
  };

  return (
    <div className="p-8 w-3/5 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mortgage Calculator</h2>
        <button
          className="text-sm text-gray-500 hover:text-gray-700"
          onClick={() => {
            setMortgageAmount("");
            setMortgageTerm("");
            setInterestRate("");
            setMortgageType("repayment");
            setResult(null);
          }}
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mortgage Amount
          </label>
          <div className="relative">
            <span className="absolute font-semibold inset-y-0 left-0 flex items-center  pl-3 pointer-events-none bg-[#e3f4fc] rounded-l-md px-3">
              £
            </span>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
              className="pl-12 pr-4 py-2 w-full border border-gray-300 rounded-md "
              placeholder="Enter amount"
            />
          </div>
        </div>
        {error.mortgageAmount && (
          <div className="mt-2 text-red-600 text-left text-sm">
            {error.mortgageAmount}
          </div>
        )}

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
                className="w-2/3 border border-gray-300 rounded-l-md px-3 py-2 focus:border-transparent  focus:ring-0"
              />
              <span
                className="w-1/3 inline-flex items-center px-3 bg-[#e3f4fc] text-gray-700 border border-l-0
               border-gray-300 rounded-r-md font-semibold"
              >
                years
              </span>
            </div>
            {error.mortgageTerm && (
              <div className="mt-2 text-red-600 text-left text-sm">
                {error.mortgageTerm}
              </div>
            )}
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
              <span
                className="w-1/3 inline-flex items-center px-3 bg-[#e3f4fc] text-gray-700 border border-l-0
               border-gray-300 rounded-r-md font-semibold"
              >
                %
              </span>
            </div>
            {error.interestRate && (
              <div className="mt-2 text-red-600 text-left text-sm">
                {error.interestRate}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mortgage Type
          </label>
          <div className="space-y-2">
            <label
              className={`flex items-center space-x-3 p-3 ${
                mortgageType === "repayment"
                  ? "bg-[#d7da2f]"
                  : "bg-white border border-gray-300 hover:border-[#d7da2f]"
              } rounded-md cursor-pointer`}
            >
              <input
                type="radio"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
                className="form-radio  focus:ring-[#e8fd5f]"
              />
              <span className="text-gray-800 font-semibold">Repayment</span>
            </label>
            <label
              className={`flex items-center space-x-3 p-3 ${
                mortgageType === "interestOnly"
                  ? "bg-[#d7da2f]"
                  : "bg-white border border-gray-300 hover:border-[#d7da2f]"
              } rounded-md cursor-pointer`}
            >
              <input
                type="radio"
                value="interestOnly"
                checked={mortgageType === "interestOnly"}
                onChange={() => setMortgageType("interestOnly")}
                className="form-radio focus:ring-[#e8fd5f] "
              />
              <span className="text-gray-800 font-semibold">Interest Only</span>
            </label>
          </div>
        </div>
      </div>
      {error.mortgageType && (
        <div className="mt-1 text-red-600 text-left text-sm">
          {error.mortgageType}
        </div>
      )}

      <div className="flex justify-center items-center w-4/6 mx-16  text-gray-800 mt-6 py-3 rounded-2xl font-medium bg-[#d7da2f] hover:bg-[#afb21f] transition duration-300 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#133041"
            d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
          />
        </svg>
        <button onClick={handleCalculate} className="ml-2">
          Calculate Repayments
        </button>
      </div>
    </div>
  );
};

export default Calculator;
