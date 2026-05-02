import React from "react";
import {
  FaPhone,
  FaIdCard,
  FaUserCog,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaInfoCircle,
  FaChevronRight,
  FaPencilAlt,
} from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const ProfileRow = ({ icon: Icon, label, value }) => (
  <button className="flex items-center justify-between w-full py-4  last:border-0 hover:bg-gray-50 px-6 transition-colors group">
    <div className="flex items-center gap-4">
      <Icon size={17} className="text-gray-500 shrink-0" />
      <div className="text-left">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {value && <p className="text-sm text-gray-500 mt-0.5">{value}</p>}
      </div>
    </div>
    <FaChevronRight
      size={11}
      className="text-gray-400 group-hover:text-gray-600 shrink-0"
    />
  </button>
);

const Profile = () => {
  const { user } = useAuth();
  const initial = (user?.name?.[0] || "U").toUpperCase();

  const rows = [
    { icon: FaPhone, label: "Phone Number", value: "xxxxxxx21" },
    { icon: FaIdCard, label: "Legal Name", value: null },
    { icon: FaUserCog, label: "Display Name", value: user?.name || "User" },
    { icon: FaMapMarkerAlt, label: "Residential Address", value: null },
    {
      icon: FaEnvelope,
      label: "Email Address",
      value: user?.email || "user@example.com",
    },
    { icon: FaCalendarAlt, label: "Date of birth", value: "xx/xx/xx99" },
    { icon: FaClock, label: "Time zone", value: "Pacific Time (US & Canada)" },
    { icon: FaDollarSign, label: "Currency", value: "GHS" },
    { icon: FaInfoCircle, label: "Additional Information", value: null },
  ];

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-3">
          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl font- select-none">
            {initial}
          </div>
          <div className="absolute -bottom-2 -right-1 w-6 h-6 bg-white rounded-full border border-gray-900 shadow-sm flex items-center justify-center">
            <FaPencilAlt size={10} className="text-gray-500" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          {user?.name || "User"}
        </h2>
      </div>

      {/* Profile rows */}
      <div className=" overflow-hidden">
        {rows.map((row) => (
          <ProfileRow key={row.label} {...row} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
