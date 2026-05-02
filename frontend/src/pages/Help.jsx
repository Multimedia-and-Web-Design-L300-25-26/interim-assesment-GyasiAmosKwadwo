import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsGlobe, BsSearch } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { RiFileList3Line } from "react-icons/ri";
import { useAuth } from "@/context/AuthContext";
import { FaGlobe } from "react-icons/fa";
import { BiGrid } from "react-icons/bi";
import { FiGrid } from "react-icons/fi";

const Help = () => {
  const { user } = useAuth();
  const [showCookie, setShowCookie] = useState(true);
  const userName = user?.name?.split(" ")[0] || "User";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="h-16 px-6 flex items-center justify-between border-b border-gray-300 sticky top-0 bg-white z-20">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-blue-600 text-xl font-medium tracking-tight"
          >
            coinbase <span className="text-gray-900 font-normal">HELP</span>
          </Link>
        </div>
        <div className="flex items-center gap-6 text-gray-500">
          <button className="hover:text-gray-900 transition-colors">
            <FaGlobe size={20} />
          </button>
          <button className="hover:text-gray-900 transition-colors">
            <FiGrid size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {(userName?.[0] || "U").toUpperCase()}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[700px] mx-auto px-6 pt-20 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl leading-[1.1] tracking-tight">{userName},</h1>
          <h2 className="text-5xl leading-[1.1] tracking-tight">
            let's resolve your issue
          </h2>
        </div>

        {/* Personalized Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[13px] text-gray-900">
              Personalized for you
            </h3>
            <button className="text-blue-600 text-[13px] font-semibold hover:underline">
              View all (3)
            </button>
          </div>
          <div className="bg-[#fff9f2] border border-[#ffecd1] rounded-xl p-6 relative">
            <div className="flex gap-4">
              <div className="text-[#f5a623] pt-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-gray-900">
                  Buys not supported
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Coinbase doesn't currently support buys in your country.
                  Subscribe to our blog to be notified when we add support for
                  your country.
                </p>
                <button className="text-blue-600 text-sm font-bold hover:underline">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <BsSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full h-[62px] pl-16 pr-16 bg-[#f4f7f9] rounded-full border-none focus:ring-2 focus:ring-blue-500 text-md font-normal placeholder:text-gray-400 transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.84 8.79L22.21 9.45L16.6 14.31L18.28 21.55L12 17.75L5.72 21.55L7.4 14.31L1.79 9.45L9.16 8.79L12 2Z" />
            </svg>
          </div>
        </div>
        <p className="text-left text-[13px] font-medium text-gray-900 mb-10 flex items-center gap-1.5">
          <span className="text-green-600 text-sm">✓85%</span> of users resolve
          issues using search
        </p>

        {/* Self Serve */}
        <div className="mb-20">
          <h3 className="text-[11px] font-bold text-gray-500 tracking-[0.1em] mb-3 uppercase">
            SELF-SERVE
          </h3>
          <div className="space-y-8">
            <button className="w-full flex items-center gap-3 text-left group cursor-pointer">
              <RiFileList3Line size={20} className="text-gray-900" />
              <span className="text-md font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                Support by topic
              </span>
            </button>
            <button className="w-full flex items-center gap-3 text-left group cursor-pointer">
              <HiOutlineShieldCheck size={20} className="text-gray-900" />
              <span className="text-md font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                Suspicious activity
              </span>
            </button>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-[11px] font-bold text-gray-500 tracking-[0.1em] mb-8 uppercase">
            STILL NEED HELP
          </h3>
          <button className="text-blue-600 font-semibold hover:underline">
            Contact us
          </button>
        </div>
      </main>

      {/* Cookie Popup */}
      {showCookie && (
        <div className="fixed bottom-8 right-8 w-[550px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-50">
          <button
            onClick={() => setShowCookie(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <p className="w-[90%] text-[13px] text-gray-600 mb-8 leading-[1.6]">
            See our{" "}
            <button className="text-blue-600 font-semibold hover:underline">
              cookie policy
            </button>{" "}
            for more information on how we process your personal data. To
            customize your settings,{" "}
            <button className="text-blue-600 font-semibold hover:underline">
              customize cookies
            </button>
            .
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowCookie(false)}
              className="flex-1 h-[46px] rounded-full bg-black text-white font-bold text-[15px] hover:opacity-90 transition-opacity"
            >
              Reject
            </button>
            <button
              onClick={() => setShowCookie(false)}
              className="flex-1 h-[46px] rounded-full bg-black text-white font-bold text-[15px] hover:opacity-90 transition-opacity"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
