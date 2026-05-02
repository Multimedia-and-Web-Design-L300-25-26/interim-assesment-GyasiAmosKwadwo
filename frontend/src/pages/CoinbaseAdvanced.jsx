import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  BiChevronLeft,
  BiChevronRight,
  BiPause,
  BiShieldAlt2,
} from "react-icons/bi";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { homeImg } from "../assets/assets";
import coinbaseLogo from "../assets/images/coinbaseLogoNav.svg";

// ── Phone Mockup ─────────────────────────────────────────────────────────────
const PhoneMockup = () => (
  <div className="relative mx-auto w-64 md:w-72 bg-black rounded-[40px] border-4 border-zinc-800 shadow-2xl overflow-hidden">
    {/* status bar */}
    <div className="flex justify-between items-center px-5 pt-4 pb-1 text-white text-xs">
      <span>3:57</span>
      <div className="flex gap-1 items-center">
        <span>▲▲▲</span>
        <span>WiFi</span>
        <span>🔋</span>
      </div>
    </div>
    {/* header */}
    <div className="flex justify-between items-center px-4 py-2 border-b border-zinc-700">
      <span className="text-white text-sm">☰</span>
      <span className="text-white text-sm font-semibold">Advanced ∨</span>
      <span className="text-white text-sm">🔔</span>
    </div>
    {/* search */}
    <div className="mx-3 my-2 bg-zinc-800 rounded-full px-3 py-1.5 flex items-center gap-2">
      <span className="text-zinc-400 text-xs">🔍</span>
      <span className="text-zinc-400 text-xs">Search for a market</span>
    </div>
    {/* filter tabs */}
    <div className="flex gap-2 px-3 pb-2 overflow-x-auto text-xs">
      {["Watchlist", "USD", "USDC", "BTC", "DAI", "ETH"].map((t, i) => (
        <span
          key={t}
          className={`px-2 py-0.5 rounded-full whitespace-nowrap ${
            i === 0 ? "bg-blue-600 text-white" : "text-zinc-400"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
    {/* rows */}
    {[
      {
        icon: "₿",
        color: "bg-orange-500",
        pair: "BTC-USD",
        vol: "Vol 35K",
        price: "$29,170.67",
        pct: "+2.68%",
      },
      {
        icon: "Ξ",
        color: "bg-blue-600",
        pair: "ETH-USD",
        vol: "Vol 180K",
        price: "$1,857.97",
        pct: "+3.71%",
      },
      {
        icon: "S",
        color: "bg-purple-500",
        pair: "SOL-USD",
        vol: "Vol 2.1M",
        price: "$29.27",
        pct: "+6.16%",
      },
      {
        icon: "A",
        color: "bg-red-500",
        pair: "AVAX-USD",
        vol: "Vol 1.9M",
        price: "$19.80",
        pct: "+3.91%",
      },
      {
        icon: "₳",
        color: "bg-blue-400",
        pair: "ADA-USD",
        vol: "Vol —",
        price: "$0.3678",
        pct: "",
      },
    ].map((row) => (
      <div
        key={row.pair}
        className="flex items-center justify-between px-3 py-2 border-b border-zinc-800"
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-7 h-7 rounded-full ${row.color} flex items-center justify-center text-white text-xs font-bold`}
          >
            {row.icon}
          </span>
          <div>
            <p className="text-white text-xs font-semibold">{row.pair}</p>
            <p className="text-zinc-500 text-[10px]">{row.vol}</p>
          </div>
        </div>
        <div className="w-14 h-6 flex items-center">
          <svg viewBox="0 0 56 24" className="w-full h-full">
            <polyline
              points="0,20 10,14 20,16 30,8 40,10 56,4"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="text-right">
          <p className="text-white text-xs">{row.price}</p>
          {row.pct && <p className="text-green-400 text-[10px]">{row.pct}</p>}
        </div>
      </div>
    ))}
    <div className="h-6" />
  </div>
);

// ── Technical indicator list panel ────────────────────────────────────────────
const IndicatorPanel = () => (
  <div className="bg-zinc-900 rounded-2xl p-4 text-zinc-300 text-sm w-56 shadow-lg">
    {[
      "Majority Rule",
      "Mass Index",
      "McGinley Dynamic",
      "Median Price",
      "Momentum",
      "Money Flow Index",
      "Moving Average",
      "Moving Average Adaptive",
      "Moving Average Channel",
      "Moving Average Double",
    ].map((item) => (
      <p
        key={item}
        className="py-1 border-b border-zinc-800 last:border-0 text-xs"
      >
        {item}
      </p>
    ))}
  </div>
);

// ── Carousel slides data ───────────────────────────────────────────────────────
const slides = [
  {
    left: (
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src={homeImg.advanced}
          alt="Trade chart"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    heading: "Customize your trade page",
    body: "Configure and expand charts/layout to suit your needs.",
    cta: "Customize now",
  },
  {
    left: (
      <div className="flex items-start justify-center">
        <IndicatorPanel />
      </div>
    ),
    heading: "Advanced charting tools",
    body: "Take your analysis to the next level with advanced charting tools and customization. Leverage EMA, MA, MACD, RSI, Bollinger Bands, custom drawing tools, and more.",
    cta: "View charts",
  },
];

// ── Sub-nav ────────────────────────────────────────────────────────────────────
const subNavLinks = ["Spot", "Derivatives", "API", "VIP", "Learn", "Twitter"];

// ── Main Component ─────────────────────────────────────────────────────────────
const CoinbaseAdvanced = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ── Sub-navigation ── */}
      <div className="sticky top-24 z-30 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-white text-xl font-semibold whitespace-nowrap">
            Coinbase Advanced
          </span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
            {subNavLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Explore now <FiExternalLink className="text-xs" />
            </a>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 md:px-10 pt-27 pb-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 min-h-[520px]">
        {/* Left */}
        <div className="flex-1 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1.5 mb-8">
            <img src={coinbaseLogo} alt="Coinbase" className="w-4 h-4" />
            <span className="text-white text-sm font-medium">
              Coinbase Advanced
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Low fees.
            <br />
            Powerful
            <br />
            trading.
          </h1>

          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            From 500+ spot pairs with as low as 0.0% maker fees, to advanced
            charting powered by TradingView, to powerful APIs.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors">
              Get started
            </button>
            <a
              href="#"
              className="text-white font-bold flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
            >
              Explore Coinbase Advanced <FiExternalLink className="text-sm" />
            </a>
          </div>
        </div>

        {/* Right – stacked device mockups */}
        <div className="flex-1 relative flex justify-center items-end self-end min-h-[420px]">
          {/* Back tablet (desktop chart) */}
          <div className="absolute right-0 top-6 w-72 md:w-96 bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl overflow-hidden opacity-90">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs font-bold">●</span>
                <span className="text-white text-xs font-semibold">
                  BTC-USD
                </span>
                <span className="text-zinc-400 text-xs">∨</span>
              </div>
              <div className="flex gap-4 text-zinc-500 text-[10px]">
                <span>
                  24H VOLUME
                  <br />
                  <span className="text-white">$13,547,690.00</span>
                </span>
                <span>
                  24H HIGH
                  <br />
                  <span className="text-white">$68,528.97</span>
                </span>
                <span>
                  24H LOW
                  <br />
                  <span className="text-white">$64,995.00</span>
                </span>
              </div>
            </div>
            <div className="bg-zinc-950 px-3 py-1 flex gap-3 text-xs border-b border-zinc-800">
              <span className="text-white font-semibold border-b-2 border-blue-500 pb-1">
                Price chart
              </span>
              <span className="text-zinc-500">Depth chart</span>
            </div>
            {/* Chart area */}
            <div className="h-36 bg-zinc-950 relative px-2 py-2">
              <svg viewBox="0 0 380 100" className="w-full h-full">
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,80 40,70 80,75 120,55 160,60 200,40 240,35 280,45 320,25 380,15"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                />
                <polygon
                  points="0,80 40,70 80,75 120,55 160,60 200,40 240,35 280,45 320,25 380,15 380,100 0,100"
                  fill="url(#heroGrad)"
                />
              </svg>
              <div className="absolute top-2 right-3 text-[10px] text-red-400">
                -$1.87
              </div>
            </div>
          </div>

          {/* Front phone */}
          <div className="relative z-10 translate-x-8 md:translate-x-16 translate-y-0">
            <div className="w-52 md:w-60 bg-zinc-900 rounded-[32px] border-2 border-zinc-700 shadow-2xl overflow-hidden">
              {/* status bar */}
              <div className="flex justify-between items-center px-4 pt-3 pb-1 text-white text-[10px]">
                <span>9:41</span>
                <div className="flex gap-1 items-center text-[10px]">
                  <span className="text-zinc-300">▲▲▲</span>
                  <span>WiFi</span>
                  <span>🔋</span>
                </div>
              </div>
              {/* header row */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
                <span className="text-white text-xs">←</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">●</span>
                  <span className="text-white text-xs font-semibold">
                    BTC-USD
                  </span>
                  <span className="text-zinc-400 text-xs">∨</span>
                </div>
                <div className="flex gap-2 text-zinc-400 text-xs">
                  <span>○</span>
                  <span>☆</span>
                </div>
              </div>
              {/* price */}
              <div className="px-3 py-3">
                <p className="text-white text-xl font-bold">$68,528.97</p>
                <div className="flex gap-3 text-[10px] mt-1">
                  <span className="text-zinc-400">
                    Bid <span className="text-red-400">$68,528.97</span>
                  </span>
                  <span className="text-zinc-400">
                    Ask <span className="text-green-400">$67,980.25</span>
                  </span>
                </div>
                <div className="flex gap-3 text-[10px] mt-0.5">
                  <span className="text-zinc-400">
                    24h vol: <span className="text-white">13,847,080</span>
                  </span>
                  <span className="text-zinc-400">Indicat...</span>
                </div>
              </div>
              {/* interval tabs */}
              <div className="flex gap-1 px-3 pb-1 text-[9px] text-zinc-400 overflow-x-auto">
                {["1m", "5m", "15m", "1h", "6h", "1D", "1W"].map((t, i) => (
                  <span
                    key={t}
                    className={`px-1.5 py-0.5 rounded ${i === 2 ? "bg-zinc-700 text-white" : ""}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* mini chart */}
              <div className="h-24 bg-zinc-950 mx-2 rounded-lg relative overflow-hidden mb-2">
                <svg viewBox="0 0 200 80" className="w-full h-full">
                  <defs>
                    <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,60 25,50 50,55 75,35 100,40 130,20 160,25 180,15 200,10"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.2"
                  />
                </svg>
                <div className="absolute top-1 right-2 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded">
                  $7,920.10
                </div>
              </div>
              {/* buy/sell row */}
              <div className="flex gap-2 px-3 pb-3">
                <button className="flex-1 bg-green-600 text-white text-[10px] font-bold py-1.5 rounded-lg">
                  Buy
                </button>
                <button className="flex-1 bg-red-600 text-white text-[10px] font-bold py-1.5 rounded-lg">
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our most advanced platform ── */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Our most advanced
            <br />
            crypto trading platform
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Built for the sophisticated trader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: (
                <div className="relative w-14 h-14">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-zinc-600 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-zinc-500 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-zinc-300 rounded-sm" />
                  </div>
                </div>
              ),
              title: "550+ spot pairs",
              desc: "Trade in and out in a flash with 552 spot pairs, including 237 USDC pairs and 22 stablepairs.",
            },
            {
              icon: (
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-9 h-6 bg-green-500 rounded-sm flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">$</span>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-0.5 h-2 bg-green-400" />
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-green-400" />
                    </div>
                  </div>
                </div>
              ),
              title: "As low as 0.0% maker fees",
              desc: "Enjoy low, volume-based fees on spot pairs with zero subscription fees and no minimum portfolio sizes.",
            },
            {
              icon: (
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="relative w-10 h-10">
                    <div className="absolute top-0 left-2 w-5 h-5 bg-blue-500 rotate-45 rounded-sm" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-400 rotate-45 rounded-sm opacity-80" />
                    <div className="absolute top-2 right-0 w-4 h-4 bg-sky-300 rotate-45 rounded-sm opacity-70" />
                  </div>
                </div>
              ),
              title: "Explore derivatives",
              desc: "Trade derivatives, built for the retail investor.",
            },
            {
              icon: (
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-12 h-12">
                    <defs>
                      <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="24,4 29,18 44,18 32,28 37,43 24,34 11,43 16,28 4,18 19,18"
                      fill="url(#starGrad)"
                    />
                  </svg>
                </div>
              ),
              title: "Up to 3.35% USDC rewards",
              desc: "Earn rewards when you fund your trading balance with USDC, even on partial or unfilled orders\u00b9.",
            },
            {
              icon: (
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-12 h-12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <circle
                      cx="14"
                      cy="32"
                      r="6"
                      fill="#3f3f46"
                      stroke="white"
                    />
                    <circle
                      cx="34"
                      cy="32"
                      r="6"
                      fill="#3f3f46"
                      stroke="white"
                    />
                    <line x1="14" y1="32" x2="34" y2="32" stroke="white" />
                    <line x1="24" y1="32" x2="24" y2="12" stroke="white" />
                    <line x1="16" y1="20" x2="32" y2="20" stroke="white" />
                    <line x1="16" y1="20" x2="14" y2="26" stroke="white" />
                    <line x1="32" y1="20" x2="34" y2="26" stroke="white" />
                  </svg>
                </div>
              ),
              title: "We hold customer assets 1:1",
              desc: "Your crypto is your crypto. Coinbase doesn\u2019t lend or take any action with your assets without your permission.",
            },
            {
              icon: (
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
                    <path
                      d="M24 4 L40 10 L40 26 C40 35 32 42 24 44 C16 42 8 35 8 26 L8 10 Z"
                      fill="#3f3f46"
                      stroke="#71717a"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="8"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="24" cy="24" r="3" fill="white" />
                  </svg>
                </div>
              ),
              title: "State-of-the-art security",
              desc: "Secure and multifaceted risk management programs include 2FA, mobile biometrics, Yubikey support, Allowlist, and more.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-3xl p-8 flex flex-col gap-16 hover:bg-zinc-800 transition-colors"
            >
              <div>{card.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Powerful and reputable ── */}
      <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 leading-tight">
          Powerful and reputable
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: "$154B", label: "QUARTERLY VOLUME TRADED" },
            { value: "$193B", label: "SAFEGUARDED ASSETS" },
            { value: "552", label: "SPOT PAIRS" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-5xl md:text-6xl font-bold text-white mb-3">
                {value}
              </p>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          A simple and intuitive UX
        </h1>
      </section>

      {/* ── Carousel ── */}
      <section className="pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="bg-zinc-950 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-14 min-h-[420px]">
            {/* Left panel */}
            <div className="flex-1 flex items-center justify-center">
              {slides[current].left}
            </div>
            {/* Right panel */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {slides[current].heading}
              </h2>
              <p className="text-zinc-400 text-base mb-8 leading-relaxed">
                {slides[current].body}
              </p>
              <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-zinc-200 transition-colors">
                {slides[current].cta}
              </button>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between px-8 pb-6">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-white" : "w-2 bg-zinc-600"
                  }`}
                />
              ))}
              <button className="ml-2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
                <BiPause className="text-white text-sm" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <BiChevronLeft className="text-white text-xl" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <BiChevronRight className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Up your trading edge ── */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Up your trading edge
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Get ahead of the game with TradingView charts, technical
              indicators, and custom watchlists. For even more control, unlock
              real-time market data with high throughput APIs.
            </p>
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-zinc-200 transition-colors">
              Learn about Coinbase Advanced API
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Your security is our priority
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              As the largest publicly-traded crypto exchange, Coinbase prudently
              manages assets for our customers with state-of-the-art encryption
              and security programs. Know that your assets are held 1:1 and are
              never lent without your consent.
            </p>
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-zinc-200 transition-colors">
              Learn more
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Security icon illustration */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div className="w-44 h-44 rounded-2xl bg-zinc-700 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-2xl bg-zinc-700" />
                <div className="w-28 h-20 bg-blue-600 rounded-md relative z-10 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-zinc-700 rounded-full absolute -top-5 left-1/2 -translate-x-1/2 bg-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Speed. Control. Flexibility. ── */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Speed. Control. Flexibility.
            </h2>
            <p className="text-zinc-400 text-base mb-8 leading-relaxed">
              Execute fast trades with real-time order books across 552 markets,
              now with 237 new USDC trading pairs and free trading on 22 stable
              pairs. On top of that, manage risk in volatile markets with limit
              orders and stop-limit orders.
            </p>
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-zinc-200 transition-colors">
              See fees breakdown
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── But wait, there's more ── */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Large Coinbase logo left */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-56 h-56 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src={coinbaseLogo}
                alt="Coinbase"
                className="w-28 h-28 brightness-0 invert"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              But wait, there's more
            </h2>
            <p className="text-zinc-400 text-base mb-4 leading-relaxed">
              Your Coinbase account lets you trade, earn, spend, send, and
              borrow. When you aren't trading, earn 3.35%* rewards automatically
              just by holding USDC¹ or stake your ETH, ADA, SOL, ATOM or XTZ to
              earn up to 10% APY².
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              *APYs when displayed are indicative and not guaranteed and may
              vary over time. Learn more about APY calculations
            </p>
          </div>
        </div>
      </section>

      {/* ── Fast-track fees ── */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Fast-track to as low as 0.0%
          <br />
          maker fees on spot pairs
        </h2>
        <p className="text-zinc-400 text-base mb-10 leading-relaxed">
          VIP trader at another crypto exchange? Submit proof of your trading
          volume and get upgraded to lower fees than you pay today on Coinbase
          Advanced. Must trade over $500K in monthly trading volume to qualify
          for a 60 day fee upgrade.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black font-bold px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Apply Now
          </button>
          <button className="bg-zinc-800 text-white font-bold px-8 py-3.5 rounded-full hover:bg-zinc-700 transition-colors w-full sm:w-auto">
            See offer details
          </button>
        </div>
      </section>

      {/* ── Just starting out ── */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold flex-1">
            Just starting out?
          </h2>
          <p className="text-zinc-400 text-base flex-1 md:pt-3 leading-relaxed">
            Learn the tools and terminology you need to take advance your
            trades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              bg: "bg-zinc-200",
              img: null,
              title: "What are fundamental analysis & technical analysis?",
              desc: 'Technical analysis looks at patterns in market data to identify trends. Fundamental analysis is a more "big...',
            },
            {
              bg: "bg-emerald-500",
              img: null,
              title: "How to read advanced trading charts",
              desc: "Learn how to read financial charts in part three of our guide to advanced trading — tools and terminology to...",
            },
            {
              bg: "bg-zinc-600",
              img: null,
              title: "How to trade with limit, market, and stop-limit orders",
              desc: "What are limit orders, market orders, and stop limit orders? Find out in part two of our guide to the advanced...",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:bg-zinc-800 transition-colors group"
            >
              <div
                className={`${card.bg} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                {i === 0 && (
                  <div className="flex items-end gap-2 px-4">
                    <div className="w-8 h-12 bg-zinc-300 rounded" />
                    <div className="w-8 h-20 bg-zinc-400 rounded" />
                    <div className="w-8 h-16 bg-zinc-300 rounded" />
                    <div className="absolute top-4 right-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      ₿
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className="w-32 h-32 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">▶</span>
                    </div>
                  </div>
                )}
                {i === 2 && (
                  <div className="w-32 h-32 bg-zinc-800 rounded-2xl flex items-center justify-center shadow-xl border border-zinc-600">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">▶</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── See more articles ── */}
      <section className="py-24 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
          See more articles on Advanced by visiting Coinbase Learn.
        </h2>
        <button className="bg-white text-black font-bold px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors">
          Check it out
        </button>
      </section>

      {/* ── Stay in the loop ── */}
      <section className="py-24 px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Stay in the loop
        </h2>
        <p className="text-zinc-400 text-base mb-10">
          Sign up for the latest Advanced updates and follow @coinbasetraders on
          Twitter.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-5 py-3.5 outline-none focus:border-zinc-400 transition-colors"
          />
          <button className="bg-zinc-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-600 transition-colors whitespace-nowrap">
            Sign up now
          </button>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="border-t border-zinc-800 py-6 px-4 md:px-10 max-w-7xl mx-auto">
        <p className="text-zinc-500 text-xs leading-relaxed">
          Coinbase Advanced is for experienced traders and is subject to the
          Trading Rules. Fees on the two experiences vary. Content is for
          informational purposes and not investment advice. Investing in crypto
          comes with risk. Futures products and services on Coinbase Advanced
          are offered by Coinbase Financial Markets, a member of NFA and is
          subject to NFA’s regulatory oversight and examinations. However, you
          should be aware that NFA does not have regulatory oversight authority
          over underlying or spot virtual currency products or transactions or
          virtual currency exchanges, custodians or markets. ¹Upon purchase of
          USDC, you will be automatically opted in to rewards. If you’d like to
          opt out or learn more about rewards, you can click here. The rewards
          rate is subject to change and may vary by region. Please check the
          latest list of eligible regions here. Customers will be able to see
          the latest applicable rates directly within their accounts. ²The
          rewards rate is based on the estimated protocol rate, which is subject
          to change. Customers will be able to see the latest applicable rates
          directly within their accounts. Enrollment in staking is available
          only in eligible jurisdictions and for eligible networks. You can
          request to unstake anytime, but you will not be able to sell or send
          your staked assets until the unstaking process is complete. This could
          take from a few minutes to several weeks, depending on the asset. For
          more information, see the help center.k.
        </p>
      </div>
    </div>
  );
};

export default CoinbaseAdvanced;
