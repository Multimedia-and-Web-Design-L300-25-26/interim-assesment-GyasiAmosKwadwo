import React from "react";
import { FaChevronRight, FaLock } from "react-icons/fa";
import {
  BsShieldCheck,
  BsActivity,
  BsGlobe,
  BsPhone,
  BsArrowLeftRight,
} from "react-icons/bs";
import { RiLockPasswordLine, RiSendPlaneLine } from "react-icons/ri";

const SecurityRow = ({ icon: Icon, label, danger }) => (
  <button
    className={`flex items-center justify-between w-full py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-6 transition-colors group`}
  >
    <div className="flex items-center gap-4">
      <Icon size={18} className={danger ? "text-red-500" : "text-gray-600"} />
      <span
        className={`text-sm font-medium ${
          danger ? "text-red-500" : "text-gray-900"
        }`}
      >
        {label}
      </span>
    </div>
    <FaChevronRight
      size={11}
      className={
        danger ? "text-red-400" : "text-gray-400 group-hover:text-gray-600"
      }
    />
  </button>
);

const securityItems = [
  { icon: RiLockPasswordLine, label: "Password" },
  { icon: BsShieldCheck, label: "2-step verification" },
  { icon: RiSendPlaneLine, label: "Transfer protection" },
  { icon: BsActivity, label: "Account activity" },
  { icon: BsGlobe, label: "Active sessions" },
  { icon: BsPhone, label: "Signed in devices" },
  { icon: BsArrowLeftRight, label: "Connected accounts" },
  { icon: FaLock, label: "Lock account", danger: true },
];

const Security = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Security</h1>
      <div className=" overflow-hidden">
        {securityItems.map((item) => (
          <SecurityRow key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Security;
