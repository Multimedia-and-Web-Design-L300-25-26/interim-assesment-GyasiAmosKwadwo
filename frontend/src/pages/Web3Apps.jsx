import React, { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

// ── App icon components (SVG-based) ──────────────────────────────────────────
const StandWithCryptoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="12" fill="#6B21A8" />
    <path
      d="M24 8 L36 14 L36 34 L24 40 L12 34 L12 14 Z"
      fill="none"
      stroke="white"
      strokeWidth="2"
    />
    <path d="M24 8 L24 40" stroke="white" strokeWidth="2" />
    <path d="M24 8 L36 14 L36 34 L24 40" fill="rgba(255,255,255,0.15)" />
  </svg>
);

const TruemarketsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="12" fill="#1E3A5F" />
    <rect
      x="14"
      y="22"
      width="10"
      height="10"
      rx="1"
      fill="white"
      fillOpacity="0.9"
    />
    <rect
      x="24"
      y="16"
      width="10"
      height="10"
      rx="1"
      fill="white"
      fillOpacity="0.6"
    />
    <rect
      x="18"
      y="18"
      width="10"
      height="10"
      rx="1"
      fill="white"
      fillOpacity="0.3"
      stroke="white"
      strokeWidth="0.5"
    />
  </svg>
);

const PlazaFinanceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="12" fill="#111827" />
    <rect
      x="12"
      y="27"
      width="24"
      height="5"
      rx="2"
      fill="white"
      fillOpacity="0.9"
    />
    <rect
      x="12"
      y="20"
      width="24"
      height="5"
      rx="2"
      fill="white"
      fillOpacity="0.6"
    />
    <rect
      x="12"
      y="13"
      width="24"
      height="5"
      rx="2"
      fill="white"
      fillOpacity="0.3"
    />
  </svg>
);

const MoonwellIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="24" fill="#2563EB" />
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="28" cy="20" r="7" fill="#2563EB" />
  </svg>
);

const ToshiMartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="24" fill="#3B82F6" />
    <circle cx="24" cy="20" r="8" fill="white" fillOpacity="0.9" />
    <ellipse cx="24" cy="36" rx="12" ry="6" fill="white" fillOpacity="0.7" />
    <circle cx="21" cy="18" r="1.5" fill="#3B82F6" />
    <circle cx="27" cy="18" r="1.5" fill="#3B82F6" />
    <path
      d="M21 22 Q24 25 27 22"
      stroke="#3B82F6"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const HypersubIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <rect width="48" height="48" rx="12" fill="#0A0A0A" />
    <path
      d="M12 12 L24 20 L36 12 L36 36 L24 28 L12 36 Z"
      fill="none"
      stroke="#444"
      strokeWidth="1"
    />
    <line x1="12" y1="12" x2="36" y2="36" stroke="#333" strokeWidth="0.5" />
    <line x1="36" y1="12" x2="12" y2="36" stroke="#333" strokeWidth="0.5" />
    <circle cx="24" cy="24" r="4" fill="#222" stroke="#555" strokeWidth="1" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const trendingApps = [
  {
    id: 1,
    name: "Stand with Crypto",
    category: "Manage",
    rating: 4.8,
    featured: true,
    icon: <StandWithCryptoIcon />,
  },
  {
    id: 2,
    name: "Truemarkets",
    category: "Social",
    rating: null,
    featured: false,
    icon: <TruemarketsIcon />,
  },
  {
    id: 3,
    name: "Plaza Finance",
    category: "Earn",
    rating: 3.8,
    featured: false,
    icon: <PlazaFinanceIcon />,
  },
  {
    id: 4,
    name: "Moonwell",
    category: "Earn",
    rating: 4.8,
    featured: false,
    icon: <MoonwellIcon />,
  },
  {
    id: 5,
    name: "Toshi Mart",
    category: "Swap",
    rating: 4.5,
    featured: false,
    icon: <ToshiMartIcon />,
  },
  {
    id: 6,
    name: "Hypersub",
    category: "Social",
    rating: null,
    featured: false,
    icon: <HypersubIcon />,
  },
];

// ── App Card ──────────────────────────────────────────────────────────────────
const AppCard = ({ app }) => (
  <div className="shrink-0 w-[78vw] sm:w-48 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
    <div className="relative mb-3">
      <div className="w-14 h-14">{app.icon}</div>
      {app.featured && (
        <span className="absolute top-0 right-0 text-xs bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full border border-gray-200">
          Featured
        </span>
      )}
    </div>
    <p className="font-medium text-gray-900 leading-tight">{app.name}</p>
    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
      {app.category}
      {app.rating !== null && (
        <>
          <span>·</span>
          <BiStar className="inline text-gray-500" />
          <span>{app.rating}</span>
        </>
      )}
    </p>
  </div>
);

// ── Main Page ─────────────────────────────────────────────────────────────────
const Web3Apps = () => {
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 208;
    const amount = cardWidth * 2;
    const next =
      dir === "left"
        ? Math.max(0, el.scrollLeft - amount)
        : el.scrollLeft + amount;
    el.scrollTo({ left: next, behavior: "smooth" });
    setScrollPos(next);
  };

  const atStart = scrollPos <= 0;
  const atEnd = scrollRef.current
    ? scrollPos >=
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 4
    : false;

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "var(--font-text)" }}
    >
      {/* ── Hero ── */}
      <div className="text-left md:text-center pt-10 md:pt-20 pb-8 md:pb-10 px-4 md:px-6">
        <h1
          className="text-3xl md:text-4xl  text-gray-900 mb-2 md:mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Discover onchain
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Use a crypto wallet or the Coinbase mobile app to access onchain apps.{" "}
          <a
            href="#"
            className="hover:underline"
            style={{ color: "var(--coinbase-blue)" }}
          >
            Learn more about onchain wallets
          </a>
        </p>
      </div>

      {/* ── New and trending ── */}
      <div className="border-t border-gray-200 py-6 md:py-8 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-base md:text-lg font-medium text-gray-900">
            New and trending
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={atStart}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll left"
            >
              <BsArrowLeft className="text-gray-700 text-sm" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll right"
            >
              <BsArrowRight className="text-gray-900 text-sm" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={(e) => setScrollPos(e.currentTarget.scrollLeft)}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>

      {/* ── Popular apps ── */}
      <div className="border-t border-gray-300 py-6 md:py-8 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-base md:text-lg font-medium text-gray-900 mb-3 md:mb-4">
          Popular apps
        </h2>
        <p className="text-sm text-gray-950">
          Popular apps are not available at this time. Please check back later.
        </p>
      </div>

      {/* ── Disclaimer ── */}
      <div className="border-t border-gray-300 py-6 md:py-8 px-4 md:px-6 max-w-7xl mx-auto">
        <p className="text-xs text-gray-950 leading-relaxed">
          Certain content has been prepared by third parties not affiliated with
          Coinbase Inc. or any of its affiliates and Coinbase is not responsible
          for such content. Coinbase is not liable for any errors or delays in
          content, or for any actions taken in reliance on any content.
          Information is provided for informational purposes only and is not
          investment advice. This is not a recommendation to buy or sell a
          particular digital asset or to employ a particular investment
          strategy. Coinbase makes no representation on the accuracy,
          suitability, or validity of any information provided or for a
          particular asset. Prices shown are for illustrative purposes only.
          Actual cryptocurrency prices and associated stats may vary. Data
          presented may reflect assets traded on Coinbase&apos;s exchange and
          select other cryptocurrency exchanges.
        </p>
      </div>
    </div>
  );
};

export default Web3Apps;
