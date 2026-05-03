import React, { useState, useRef, useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  FaUser,
  FaShieldAlt,
  FaChartBar,
  FaFileAlt,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";
import { BsQuestionCircle, BsGrid, BsX } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";
import logo from "@/assets/images/coinbaseLogoNav.svg";

const navItems = [
  { label: "Profile", to: "/account/profile", icon: FaUser },
  { label: "Security", to: "/account/security", icon: FaShieldAlt },
  { label: "Activity", to: "/account/activity", icon: FaChartBar },
  { label: "Statements", to: "/account/statements", icon: FaFileAlt },
];

const AccountLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const appsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (appsRef.current && !appsRef.current.contains(e.target)) {
        setAppsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  const [darkMode, setDarkMode] = useState(false);
  const initial = (user?.name?.[0] || "U").toUpperCase();
  const pageTitle = (() => {
    if (location.pathname === "/account" || location.pathname === "/account/") {
      return "Account";
    }
    const segment = location.pathname.split("/").pop();
    return segment
      ? segment.charAt(0).toUpperCase() + segment.slice(1)
      : "Account";
  })();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* ── Top Navbar ── */}
      <header
        className={`h-16 fixed top-0 left-0 right-0 md:left-auto md:w-[calc(100%-208px)] bg-white ${location.pathname === "/account/activity" ? "" : "border-b"} border-gray-300 flex items-center justify-between px-4 md:px-5 shrink-0 z-10`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Open account menu"
          >
            <BsGrid size={18} />
          </button>
          <div>
            <div className="w-10 h-10 lg:hidden rounded-full flex items-center justify-center text-white font-semibold">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="hidden lg:block text-xl md:text-2xl font-semibold text-gray-900">
              {pageTitle}
            </h3>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex  items-center gap-2">
          {/* Help */}
          <Link
            to="/help"
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <BsQuestionCircle size={17} />
          </Link>

          {/* Apps grid */}
          <div className="lg:relative" ref={appsRef}>
            <button
              onClick={() => setAppsOpen((o) => !o)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <BsGrid size={16} />
            </button>

            {appsOpen && (
              <div
                className="fixed hidden lg:block inset-0 bg-black/10 backdrop-blur-[1px] z-40 transition-opacity cursor-default"
                onClick={() => setAppsOpen(false)}
              />
            )}
            {appsOpen && (
              <div className="absolute right-0 top-0 lg:top-10 h-dvh w-full lg:h-fit lg:w-[330px] bg-white lg:rounded-2xl lg:shadow-2xl border border-gray-100 pb-6 py-6 z-50 lg:max-h-[85vh] overflow-y-auto custom-scrollbar">
                <div className="flex lg:hidden items-center justify-end gap-3 border-b border-gray-300 px-3 py-1.5">
                  <button
                    onClick={() => setAppsOpen(false)}
                    className="w-10 h-10 rounded-full  flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                    aria-label="Close account menu"
                  >
                    <BsX size={34} />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* For Individuals */}
                  <section>
                    <h4 className="text-xs font-bold text-gray-500 pt-2 lg:pt-0  mb-2 px-2 uppercase">
                      For Individuals
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
                          C
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Coinbase
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
                          C
                        </div>
                        <span className="text-xs font-medium text-gray-900">
                          Advanced
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
                          B
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Base App
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* For Businesses */}
                  <section>
                    <h4 className="text-xs font-bold text-gray-500  mb-2 px-2 uppercase border-t border-gray-300 pt-6">
                      For Businesses
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="relative w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                            <FaFileAlt className="text-white text-[10px]" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center border-2 border-white">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Business
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* For Institutions */}
                  <section>
                    <h4 className="text-xs font-bold text-gray-500  mb-2 px-2 uppercase border-t border-gray-300 pt-6">
                      For Institutions
                    </h4>
                    <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                          <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center relative">
                            <div
                              className="absolute inset-0 bg-yellow-400"
                              style={{
                                clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
                              }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Prime
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="w-6 h-6 flex flex-wrap gap-0.5">
                            <div className="w-2.5 h-2.5 bg-blue-600 rotate-45"></div>
                            <div className="w-2.5 h-2.5 bg-blue-400 rotate-45"></div>
                            <div className="w-2.5 h-2.5 bg-blue-800 rotate-45"></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Exchange
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="relative w-6 h-6">
                            <div className="absolute inset-0 bg-cyan-400 rotate-45 opacity-50"></div>
                            <div className="absolute inset-1 bg-cyan-600 rotate-45"></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Derivatives
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                            <div className="w-4 h-4 border border-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                          Int'l Exchan...
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* For Developers */}
                  <section>
                    <h4 className="text-xs font-bold text-gray-500  mb-2 px-2 uppercase border-t border-gray-300 pt-6">
                      For Developers
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="flex flex-col gap-0.5">
                            <div className="w-5 h-1 bg-blue-600"></div>
                            <div className="w-5 h-1 bg-blue-400"></div>
                            <div className="w-5 h-1 bg-blue-800"></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                          Dev Platform
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <FaFileAlt className="text-gray-300 text-xl" />
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Dev Docs
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
                          B
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          Base Build
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* More */}
                  <section>
                    <h4 className="text-xs font-bold text-gray-500  mb-2 px-2 uppercase border-t border-gray-300 pt-6">
                      More
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div
                            className="w-4 h-4 bg-white"
                            style={{
                              clipPath:
                                "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-50 cursor-pointer group transition-all">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>

          {/* User avatar + dropdown */}
          <div className="lg:relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {initial}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-0 lg:top-10 w-full h-dvh lg:h-fit lg:w-72 bg-white rounded-xl shadow-lg border border-gray-100 pb-2 lg:py-2 z-50">
                <div className="flex lg:hidden items-center justify-end gap-3 border-b border-gray-300 px-3 py-1.5">
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className="w-10 h-10 rounded-full  flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                    aria-label="Close account menu"
                  >
                    <BsX size={34} />
                  </button>
                </div>

                {/* User info */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shrink-0">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email || ""}
                    </p>
                    <button className="text-xs font-medium text-blue-600 hover:underline mt-0.5">
                      Manage account
                    </button>
                  </div>
                </div>

                {/* Add account */}
                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <FaUserPlus size={15} className="text-gray-500" />
                  Add account
                </button>

                {/* Sign out */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500 hover:bg-gray-50 transition-colors"
                >
                  <FaSignOutAlt size={15} className="text-red-500" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile account drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="fixed h-dvh inset-x-0 top-0 z-40 bg-white border-b border-gray-200 shadow-2xl px-4 py-4 space-y-4 md:hidden"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full  flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="Close account menu"
              >
                <BsX size={34} />
              </button>
            </div>

            <nav className="space-y-2 px-4">
              {navItems.map(({ label, to, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-5 mt-8 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors"
            >
              Sign out
            </button>
          </div>
        </>
      )}

      {/* ── Body (sidebar + content) ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-52 p-5 bg-white border-r border-gray-300 flex-col shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0">
              <img src={logo} alt="logo" />
            </div>
            <span className="text-xl text-gray-900 uppercase select-none">
              Account
            </span>
          </div>
          <nav className="flex flex-col gap-2 mt-3 px-2">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto pt-20 md:pt-14 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountLayout;
