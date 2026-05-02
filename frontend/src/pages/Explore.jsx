import React, { useState } from "react";
import {
  BiSearch,
  BiChevronRight,
  BiStar,
  BiInfoCircle,
  BiChevronDown,
  BiWorld,
} from "react-icons/bi";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  SiTether,
  SiDogecoin,
  SiCardano,
  SiSolana,
  SiRipple,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useAllCrypto } from "../hooks/useCryptoQueries";

// ── Sparkline SVG ────────────────────────────────────────────────────────────
const Sparkline = ({
  points,
  color = "#ef4444",
  filled = true,
  width = 210,
  height = 80,
}) => {
  // const width = 210;
  // const height = 80;
  const xs = points.map((_, i) => (i / (points.length - 1)) * width);
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const ys = points.map((p) => height - ((p - min) / range) * (height - 4) - 2);
  const linePath = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`)
    .join(" ");
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {filled && (
        <path d={areaPath} fill={color} fillOpacity="0.12" strokeWidth="0" />
      )}
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

// ── Static fallback data ──────────────────────────────────────────────────────
const STATIC_CRYPTO = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    price: "GHS 731,009.27",
    change: "-4.68%",
    mktCap: "GHS 14.6T",
    volume: "GHS 430.2B",
    color: "#f7931a",
    negative: true,
    points: [72, 68, 74, 65, 60, 63, 58, 55, 52, 50, 48, 45, 43],
    icon: <FaBitcoin className="text-[#f7931a] text-2xl" />,
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    price: "GHS 21,361.98",
    change: "-4.93%",
    mktCap: "GHS 2.6T",
    volume: "GHS 198.6B",
    color: "#627eea",
    negative: true,
    points: [68, 65, 70, 62, 58, 60, 55, 52, 48, 45, 42, 40, 37],
    icon: <FaEthereum className="text-[#627eea] text-2xl" />,
  },
  {
    name: "Tether",
    ticker: "USDT",
    price: "GHS 10.78",
    change: "0.00%",
    mktCap: "GHS 2.0T",
    volume: "GHS 812.0B",
    color: "#26a17b",
    negative: false,
    points: [50, 51, 49, 52, 55, 54, 53, 56, 54, 52, 53, 51, 50],
    icon: <SiTether className="text-[#26a17b] text-2xl" />,
  },
  {
    name: "BNB",
    ticker: "BNB",
    price: "GHS 6,765.17",
    change: "-3.03%",
    mktCap: "GHS 922.4B",
    volume: "GHS 13.9B",
    color: "#f3ba2f",
    negative: true,
    points: [65, 63, 67, 61, 58, 60, 55, 53, 50, 48, 46, 44, 42],
    icon: (
      <span className="w-6 h-6 rounded-full bg-[#f3ba2f] flex items-center justify-center text-white text-xs font-bold">
        B
      </span>
    ),
  },
  {
    name: "XRP",
    ticker: "XRP",
    price: "GHS 14.73",
    change: "-2.92%",
    mktCap: "GHS 901.2B",
    volume: "GHS 23.6B",
    color: "#000000",
    negative: true,
    points: [60, 57, 62, 55, 52, 54, 50, 48, 46, 44, 42, 40, 38],
    icon: <SiRipple className="text-gray-800 text-2xl" />,
  },
  {
    name: "USDC",
    ticker: "USDC",
    price: "GHS 10.78",
    change: "0.00%",
    mktCap: "GHS 832.9B",
    volume: "GHS 112.3B",
    color: "#2775ca",
    negative: false,
    badge: "Earns 3.35% APY",
    points: [48, 50, 47, 52, 56, 54, 53, 55, 53, 51, 52, 50, 49],
    icon: (
      <span className="w-6 h-6 rounded-full bg-[#2775ca] flex items-center justify-center text-white text-xs font-bold">
        $
      </span>
    ),
  },
  {
    name: "Solana",
    ticker: "SOL",
    price: "GHS 907.81",
    change: "-5.04%",
    mktCap: "GHS 518.2B",
    volume: "GHS 36.2B",
    color: "#9945ff",
    negative: true,
    points: [70, 66, 71, 63, 58, 61, 55, 52, 48, 45, 41, 38, 35],
    icon: <SiSolana className="text-[#9945ff] text-2xl" />,
  },
  {
    name: "TRON",
    ticker: "TRX",
    price: "GHS 3.06",
    change: "-0.90%",
    mktCap: "GHS 289.7B",
    volume: "GHS 4.4B",
    color: "#ef0027",
    negative: true,
    points: [55, 57, 53, 58, 54, 56, 52, 55, 51, 53, 50, 52, 49],
    icon: (
      <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
        T
      </span>
    ),
  },
  {
    name: "Dogecoin",
    ticker: "DOGE",
    price: "GHS 0.98",
    change: "-3.74%",
    mktCap: "GHS 149.6B",
    volume: "GHS 10.4B",
    color: "#c2a633",
    negative: true,
    points: [62, 59, 64, 57, 53, 56, 51, 49, 46, 44, 41, 39, 37],
    icon: <SiDogecoin className="text-[#c2a633] text-2xl" />,
  },
  {
    name: "Cardano",
    ticker: "ADA",
    price: "GHS 2.78",
    change: "-4.99%",
    mktCap: "GHS 100.4B",
    volume: "GHS 5.0B",
    color: "#0033ad",
    negative: true,
    points: [65, 62, 67, 60, 55, 58, 53, 50, 46, 43, 40, 37, 34],
    icon: <SiCardano className="text-[#0033ad] text-2xl" />,
  },
];

const COIN_COLORS = [
  "#f7931a",
  "#627eea",
  "#26a17b",
  "#f3ba2f",
  "#000000",
  "#2775ca",
  "#9945ff",
  "#ef0027",
  "#c2a633",
  "#0033ad",
  "#8B5CF6",
  "#10B981",
];

function mapApiCrypto(coin, idx) {
  const negative = coin.change24h < 0;
  const changeAbs = Math.abs(coin.change24h).toFixed(2);
  const pts = Array.from(
    { length: 13 },
    (_, i) =>
      50 + Math.sin(i * 0.8 + idx) * 15 + (negative ? -i * 1.2 : i * 0.8),
  );
  return {
    name: coin.name,
    ticker: coin.symbol,
    price: `$${Number(coin.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    change: `${negative ? "-" : "+"}${changeAbs}%`,
    mktCap: "N/A",
    volume: "N/A",
    color: COIN_COLORS[idx % COIN_COLORS.length],
    negative,
    points: pts,
    icon: (
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: COIN_COLORS[idx % COIN_COLORS.length] }}
      >
        {coin.symbol.charAt(0)}
      </span>
    ),
  };
}

const statCards = [
  {
    label: "Total market cap",
    value: "GHS 24.32T",
    change: "↘ 3.39%",
    points: [70, 65, 68, 60, 55, 58, 52, 48, 45, 42, 40, 38, 35],
  },
  {
    label: "Trade volume",
    value: "GHS 1.73T",
    change: "↘ 17.07%",
    points: [72, 66, 70, 62, 56, 60, 53, 48, 44, 40, 37, 34, 30],
  },
  {
    label: "Buy-sell ratio",
    value: "GHS 0.79",
    change: "↘ 4.05%",
    points: [40, 42, 38, 44, 48, 52, 56, 58, 54, 60, 65, 62, 68],
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
const Explore = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { data: cryptoResponse } = useAllCrypto();
  const cryptoData = cryptoResponse?.data?.length
    ? cryptoResponse.data.map(mapApiCrypto)
    : STATIC_CRYPTO;

  const filtered = cryptoData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.ticker.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="pt-24 min-h-screen bg-white text-gray-900">
      {/* ── Layout wrapper ── */}
      <div className="flex gap-0">
        {/* ── Main content ── */}
        <div className="flex-1 min-w-0 border-r border-gray-200">
          {/* ── Header ── */}
          <div className="flex justify-between px-7 py-9 gap-13 border-b border-gray-200">
            <div>
              <h1 className="text-3xl font-medium mb-1">Explore crypto</h1>
              <p className=" text-gray-900 flex items-center gap-1">
                Coinbase 50 Index is down{" "}
                <span className="text-red-500 font-medium flex items-center gap-0.5">
                  ↘
                </span>{" "}
                4.47% (24hrs)
                <BiInfoCircle className="text-gray-400" />
              </p>
            </div>
            {/* Search bar */}
            <div className="mt-4 relative flex-1 ">
              <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-lg" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for an asset"
                className="w-full border-none pl-11 pr-4 py-5 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* ── Market stats ── */}
          <div className="px-7 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-medium mb-2">Market stats</h2>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-100">
                  <BsArrowLeft />
                </button>
                <button className="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-gray-100">
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              The overall crypto market is growing this week. As of today, the
              total crypto market capitalization is 24.32 trillion, representing
              a 6.36% increase from last week.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Read more
            </a>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {statCards.map((card) => (
                <div key={card.label} className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500 mb-1">{card.label}</p>
                  <div className="flex gap-1">
                    <p className="font-bold text-sm">{card.value}</p>
                    <p className="text-red-500 text-sm font-medium mb-3">
                      {card.change}
                    </p>
                  </div>
                  <Sparkline points={card.points} color="#ef4444" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Crypto market prices ── */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h2 className="text-3xl font-medium mb-2">
                Crypto market prices
              </h2>
              <span className="text-sm font-light text-gray-500">
                18,619 assets
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              The overall crypto market is growing this week. As of today, the
              total crypto market capitalization is 24.32 trillion, representing
              a 6.36% increase from last week.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Read more
            </a>

            {/* Filters */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {["All assets", "1D", "GHS", "10 rows"].map((label) => (
                <button
                  key={label}
                  className="flex text-gray-900 font-medium items-center bg-gray-200 gap-1 px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-100"
                >
                  {label === "All assets" && (
                    <span className="text-gray-800">
                      <BiWorld />
                    </span>
                  )}
                  {label}
                  <BiChevronDown className="text-gray-800" />
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="mt-9 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className=" text-gray-500 text-md">
                    <th className="w-8 pb-3"></th>
                    <th className="text-left pb-3 font-medium">Asset</th>
                    <th className="text-right pb-3 font-medium">
                      Market price
                    </th>
                    <th className="text-center pb-3 font-medium">Chart</th>
                    <th className="text-right pb-3 font-medium">Change</th>
                    <th className="text-right pb-3 font-medium text-blue-600">
                      Mkt cap ↕
                    </th>
                    <th className="text-right pb-3 font-medium">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((crypto) => (
                    <tr
                      key={crypto.ticker}
                      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="py-4 pl-4 pr-2">
                        <BiStar className="text-gray-700 hover:text-yellow-400 text-lg" />
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            {crypto.icon}
                          </div>
                          <div>
                            <p className="font-semibold">{crypto.name}</p>
                            <p className="text-gray-400 text-xs flex items-center gap-1">
                              {crypto.ticker}
                              {crypto.badge && (
                                <span className="text-blue-600 text-xs">
                                  • {crypto.badge}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-right text-lg ">
                        {crypto.price}
                      </td>
                      <td className="py-4 px-3 text-center">
                        <div className="flex justify-center">
                          <Sparkline
                            points={crypto.points}
                            color={crypto.negative ? "#ef4444" : "#22c55e"}
                            filled={false}
                            width={80}
                            height={30}
                          />
                        </div>
                      </td>
                      <td
                        className={`py-4 text-right text-lg ${crypto.negative ? "text-red-500" : "text-gray-600"}`}
                      >
                        {crypto.negative ? "↘ " : ""}
                        {crypto.change}
                      </td>
                      <td className="py-4 text-right text-lg ">
                        {crypto.mktCap}
                      </td>
                      <td className="py-4 text-right text-lg ">
                        {crypto.volume}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`w-9 h-9 rounded-full text-sm font-medium ${
                      n === 1
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <span className="px-2 text-gray-400">...</span>
                <button className="w-14 h-9 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                  1,862
                </button>
                <button className="w-9 h-9 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-center">
                  <BiChevronRight />
                </button>
              </div>
              <p className="text-xs text-gray-400">1-10 of 18,619 assets</p>
            </div>
          </div>

          {/* ── Blue CTA banner ── */}
          <div className="mx-6 mb-8 rounded-2xl bg-blue-600 text-white flex items-center justify-between gap-5 px-8 py-10 overflow-hidden relative">
            <div className="flex-1 z-10">
              <h3 className="text-3xl leading-snug mb-6">
                Create a Coinbase account to trade crypto. It's quick, easy, and
                secure.
              </h3>
              <button
                onClick={() => navigate("/signup")}
                className="flex w-full items-center gap-2 justify-between bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <p>Start Trading</p>
                <BsArrowRight size={22} />
              </button>
            </div>
            {/* Illustration */}
            <div className="hidden sm:flex items-end gap-2 z-10 pr-4">
              <div className="flex flex-col justify-end gap-1 items-end">
                <div className="flex items-end gap-2">
                  {/* Candlestick illustration */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-white/50 mx-auto" />
                    <div className="w-8 h-12 bg-red-400 rounded" />
                    <div className="w-0.5 h-3 bg-white/50 mx-auto" />
                  </div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-0.5 h-3 bg-white/50 mx-auto" />
                    <div className="w-8 h-16 bg-green-400 rounded" />
                    <div className="w-0.5 h-4 bg-white/50 mx-auto" />
                  </div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-white/50 mx-auto" />
                    <div className="w-8 h-24 bg-green-400 rounded" />
                    <div className="w-0.5 h-2 bg-white/50 mx-auto" />
                  </div>
                </div>
                {/* Arrow */}
                <svg
                  className="absolute bottom-8 right-12"
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                >
                  <path
                    d="M0 35 Q20 10 50 5"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <polygon points="50,0 60,8 45,8" fill="white" />
                </svg>
                {/* Base platform */}
                <div className="w-48 h-5 bg-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Sidebar ── */}
        <div className="hidden lg:block w-80 xl:w-96 shrink-0">
          <div className=" top-17  overflow-y-auto">
            {/* Get started card */}
            <div className="p-5 border-b border-gray-200">
              <div className="m-4 rounded-2xl p-5  bg-blue-600 text-white relative overflow-hidden">
                <p className="text-lg  mb-1">Get started</p>
                <p className="text-sm mb-4 text-blue-100">
                  Create your account today
                </p>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-white text-gray-900 font-medium px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  Sign up
                </button>
                {/* Decorative coin */}
                <div className="absolute right-4 top-4 w-20 h-20 rounded-full border-4 border-yellow-400 bg-yellow-300 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">✦</span>
                </div>
                <div className="absolute right-16 bottom-2 w-8 h-8 rounded-full bg-green-500 opacity-80" />
                <div className="absolute right-2 bottom-6 w-6 h-6 rounded-full bg-gray-300 opacity-60" />
              </div>
            </div>

            {/* Top movers */}
            <div className=" mb-4 p-7 border-b border-gray-200">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-lg">Top movers</h3>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <BsArrowLeft className="text-sm" />
                  </button>
                  <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <BsArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
              <p className="text-md text-gray-500 mb-3">24hr change</p>
              <div className="flex gap-3">
                {[
                  {
                    ticker: "FAI",
                    pct: "↗ 94.94%",
                    price: "GHS 0.10",
                    bg: "bg-amber-700",
                    letter: "F",
                  },
                  {
                    ticker: "LMTS",
                    pct: "↗ 39.09%",
                    price: "GHS 2.24",
                    bg: "bg-yellow-400",
                    letter: "L",
                  },
                ].map((m) => (
                  <div
                    key={m.ticker}
                    className="flex-1 rounded-xl bg-gray-100 p-3"
                  >
                    <div
                      className={`w-10 h-10 ${m.bg} rounded-full flex items-center justify-center text-white font-bold mb-2`}
                    >
                      {m.letter}
                    </div>
                    <p className="text-xs text-gray-500">{m.ticker}</p>
                    <p className="text-lg text-green-500">{m.pct}</p>
                    <p className="text-md text-gray-900">{m.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* New on Coinbase */}
            <div className="p-7 border-b border-gray-200 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-lg">New on Coinbase</h3>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <BsArrowLeft className="text-sm" />
                  </button>
                  <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <BsArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                {[
                  {
                    ticker: "HYPE",
                    name: "Hyperliquid",
                    date: "Added Feb 5",
                    bg: "bg-gray-800",
                    letter: "H",
                  },
                  {
                    ticker: "JUPITER",
                    name: "Jupiter",
                    date: "Added Dec 9",
                    bg: "bg-teal-600",
                    letter: "J",
                  },
                ].map((coin) => (
                  <div
                    key={coin.ticker}
                    className="flex-1 rounded-xl border border-gray-200 p-3"
                  >
                    <div
                      className={`w-10 h-10 ${coin.bg} rounded-full flex items-center justify-center text-white font-bold mb-2`}
                    >
                      {coin.letter}
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {coin.ticker}
                    </p>
                    <p className="font-bold text-sm">{coin.name}</p>
                    <p className="text-xs text-gray-500">{coin.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
