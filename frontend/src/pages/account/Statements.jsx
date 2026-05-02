import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SelectField = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-xs font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-8"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <FaChevronDown
        size={11}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  </div>
);

const Statements = () => {
  const [asset, setAsset] = useState("All assets");
  const [transactionType, setTransactionType] = useState("All transactions");
  const [date, setDate] = useState("Year to date");
  const [format, setFormat] = useState("PDF");

  return (
    <div className=" mx-auto py-10 px-4">
      {/* Tab */}
      <div className="border-b w-fit border-gray-200 mb-6">
        <button className="px-1 pb-3 text-sm font-medium border-b-2 border-blue-600 text-blue-600 -mb-px">
          Transactions
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Quick download card */}
        <div className="flex-1 bg-white rounded-md border border-gray-300 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Transactions
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Download all your Coinbase.com account activities
          </p>
          <div className="flex items-center justify-between  px-4 py-3">
            <span className="text-sm text-gray-700">Last 30 days</span>
            <div className="flex gap-3">
              {["HTML", "PDF", "CSV"].map((fmt) => (
                <button
                  key={fmt}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom statement card */}
        <div className="w-full lg:w-85 bg-white rounded-md border border-gray-300 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">
            Generate custom statement
          </h2>

          <div className="space-y-4">
            <SelectField
              label="Asset"
              value={asset}
              onChange={setAsset}
              options={[
                "All assets",
                "Bitcoin (BTC)",
                "Ethereum (ETH)",
                "USD Coin (USDC)",
              ]}
            />
            <SelectField
              label="Transaction type"
              value={transactionType}
              onChange={setTransactionType}
              options={["All transactions", "Buy", "Sell", "Send", "Receive"]}
            />
            <SelectField
              label="Date"
              value={date}
              onChange={setDate}
              options={[
                "Year to date",
                "Last 30 days",
                "Last 90 days",
                "Last 12 months",
              ]}
            />

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Format
              </label>
              <div className="flex gap-5">
                {["HTML", "PDF", "CSV"].map((fmt) => (
                  <label
                    key={fmt}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="format"
                      value={fmt}
                      checked={format === fmt}
                      onChange={() => setFormat(fmt)}
                      className="accent-blue-600"
                    />
                    <span className="text-sm text-gray-700">{fmt}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-full transition-colors">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statements;
