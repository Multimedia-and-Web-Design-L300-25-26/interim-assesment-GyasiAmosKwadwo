import React, { useState } from "react";

const tabs = ["Active sessions", "Confirmed devices", "Account activity"];

const mockSessions = [
  { signedIn: "19 hours ago", platform: "Web", ip: "102.176.75.189" },
];

const Activity = () => {
  const [activeTab, setActiveTab] = useState("Active sessions");

  return (
    <div className=" mx-auto pb-10 ">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active sessions */}
      {activeTab === "Active sessions" && (
        <div className=" overflow-hidden">
          <div className="px-6 py-4 ">
            <h2 className="text-base font-semibold text-gray-900">
              Active sessions
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              These sessions are currently signed in to your account
            </p>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 px-6 py-3 border-b border-gray-200">
            {["Signed in", "Platform", "IP address", "Status"].map((h) => (
              <span key={h} className="text-sm font-medium text-gray-800">
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {mockSessions.map((session, i) => (
            <div
              key={i}
              className="grid grid-cols-4 px-6 py-4 border-b border-gray-50 last:border-0 items-center"
            >
              <span className="text-sm text-gray-700">{session.signedIn}</span>
              <span className="text-sm text-gray-700">{session.platform}</span>
              <span className="text-sm text-gray-700">{session.ip}</span>
              <button className="text-sm font-medium text-blue-600 hover:underline text-left">
                Sign out
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Confirmed devices" && (
        <div className="px-6 py-12 text-center">
          <p className="text-sm text-gray-500">No confirmed devices found.</p>
        </div>
      )}

      {activeTab === "Account activity" && (
        <div className=" px-6 py-12 text-center">
          <p className="text-sm text-gray-500">No recent account activity.</p>
        </div>
      )}
    </div>
  );
};

export default Activity;
