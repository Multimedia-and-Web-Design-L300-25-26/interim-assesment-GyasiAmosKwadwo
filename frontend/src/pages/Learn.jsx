import { Link } from "react-router-dom";
import { homeImg, learnPage } from "../assets/assets";

const popularArticles = [
  { category: "BEGINNER'S GUIDE", title: "What is cryptocurrency?" },
  { category: "GETTING STARTED", title: "How to earn crypto rewards" },
  {
    category: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
  },
  {
    category: "YOUR CRYPTO",
    title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports",
  },
  { category: "GETTING STARTED", title: "Beginner's guide to dapps" },
  {
    category: "MARKET UPDATE",
    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF",
  },
];

const categories = [
  {
    label: "Crypto basics",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e8f0fe" />
        <path
          d="M20 10a10 10 0 100 20A10 10 0 0020 10zm0 3a7 7 0 110 14A7 7 0 0120 13z"
          fill="#1652f0"
        />
        <circle cx="20" cy="20" r="3" fill="#1652f0" />
      </svg>
    ),
  },
  {
    label: "Tips and tutorials",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e8f0fe" />
        <rect x="12" y="13" width="16" height="2" rx="1" fill="#1652f0" />
        <rect x="12" y="19" width="12" height="2" rx="1" fill="#1652f0" />
        <rect x="12" y="25" width="14" height="2" rx="1" fill="#1652f0" />
        <polygon points="28,22 32,25 28,28" fill="#1652f0" />
      </svg>
    ),
  },
  {
    label: "Advanced trading",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e8f0fe" />
        <rect x="11" y="22" width="4" height="7" fill="#e74c3c" />
        <rect x="18" y="16" width="4" height="13" fill="#2ecc71" />
        <rect x="25" y="19" width="4" height="10" fill="#e74c3c" />
        <polyline
          points="13,21 20,15 27,18"
          stroke="#1652f0"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Futures",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="20" fill="#e8f0fe" />
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="#1652f0"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="3" fill="#1652f0" />
        <circle cx="20" cy="9" r="2" fill="#f0a500" />
        <circle cx="31" cy="20" r="2" fill="#f0a500" />
      </svg>
    ),
  },
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 pt-16">
        {/* Hero */}
        <div className="text-center py-12 sm:py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-medium mb-4 tracking-tight">
            Crypto questions, answered
          </h1>
          <p className="text-gray-500 text-md mx-auto">
            Beginner guides, practical tips, and market updates for
            first-timers, experienced investors, and everyone in between
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Featured + Popular */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Featured */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-medium mb-4">Featured</h2>
              <Link to="#" className="block group">
                <div className=" overflow-hidden mb-4 bg-[#b2c5c8]">
                  <img
                    src={learnPage.DollarCost}
                    alt="Featured article illustration"
                    className="w-full object-cover"
                    style={{ maxHeight: "440px" }}
                  />
                </div>
                <p className="text-sm font-bold uppercase text-gray-500 mb-1">
                  Video Tutorial
                </p>
                <h3 className="text-xl sm:text-3xl font-medium hover:text-[#1652f0] mb-2">
                  When is the best time to invest in crypto?
                </h3>
                <p className="text-gray-900  leading-relaxed">
                  When prices are fluctuating, how do you know when to buy?
                  Learn more about using dollar-cost averaging to weather price
                  volatility.
                </p>
              </Link>
            </div>

            {/* Popular */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0">
              <h2 className="text-xl font-medium mb-4">Popular</h2>
              <ul className="divide-y divide-gray-200">
                {popularArticles.map((article, idx) => (
                  <li key={idx} className="py-4">
                    <Link to="#" className="group block">
                      <p className="text-xs font-medium uppercase text-gray-500 mb-1">
                        {article.category}
                      </p>
                      <p className="text-xl font-medium tracking-tight text-gray-900 group-hover:text-[#1652f0] leading-snug">
                        {article.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category navigation */}
          <div className="mt-14 border-t border-gray-200 pt-8 grid grid-cols-1 sm:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to="#"
                className="flex items-center gap-3 group"
              >
                <div className="shrink-0">{cat.icon}</div>
                <div>
                  <p className="font-medium  text-xl text-gray-900">
                    {cat.label}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-[#1652f0] flex items-center gap-1">
                    See more <span>→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Crypto Basics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-21 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-medium mb-3 tracking-tight">
            Crypto basics
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            New to crypto? Not for long — start with these guides and explainers
          </p>
        </div>

        {/* Two large featured articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              img: learnPage.LearnIll,
              category: "BEGINNER'S GUIDE",
              title: "What is Bitcoin?",
              desc: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
              titleBlue: false,
            },
            {
              img: learnPage.altCoin,
              category: "BEGINNER'S GUIDE",
              title: "Guide to DeFi tokens and altcoins",
              desc: "From Aave to Zcash, decide what to trade with our beginner's guide",
              titleBlue: false,
            },
          ].map((article, idx) => (
            <Link to="#" key={idx} className="group block">
              <div className="overflow-hidden rounded-sm mb-4 bg-gray-100">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full object-cover"
                  style={{ height: "300px" }}
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-tight text-gray-500 mb-1">
                {article.category}
              </p>
              <h3 className="text-xl sm:text-3xl tracking-tight font-medium text-gray-900 group-hover:text-[#1652f0] mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-950 leading-6 tracking-tight">
                {article.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Four smaller articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              img: learnPage.whatEthereum,
              category: "BEGINNER'S GUIDE",
              title: "What is Ethereum?",
              titleBlue: false,
            },
            {
              img: learnPage.DeFi,
              category: "KEY TERM",
              title: "What is DeFi?",
              titleBlue: false,
            },
            {
              img: homeImg.advanced,
              category: "BEGINNER'S GUIDE",
              title: "What is a stablecoin?",
              titleBlue: false,
            },
            {
              img: homeImg.replaceBack,
              category: "GLOSSARY",
              title:
                "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained",
              titleBlue: true,
            },
          ].map((article, idx) => (
            <Link to="#" key={idx} className="group block">
              <div className="overflow-hidden mb-4 bg-gray-100">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-90 object-cover"
                />
              </div>
              <p className="text-xs tracking-tight font-bold uppercase text-gray-500 mb-1">
                {article.category}
              </p>
              <h3
                className={`text-xl tracking-tight font-medium leading-snug ${
                  article.titleBlue
                    ? "text-[#1652f0]"
                    : "text-gray-950 group-hover:text-[#1652f0]"
                }`}
              >
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* See more button */}
        <div className="flex justify-center">
          <Link
            to="#"
            className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            See more crypto basics <span>›</span>
          </Link>
        </div>
      </section>

      {/* What is... Section */}
      <section className="border-t border-b border-gray-300 bg-gray-100 py-18 px-4">
        <div className=" mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-10 tracking-tight">
            What is...
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Bitcoin",
              "Blockchain",
              "Cardano",
              "Crypto wallet",
              "DeFi",
              "Ethereum",
              "Fork",
              "Inflation",
              "Market cap",
              "NFT",
              "Private key",
              "Protocol",
              "Smart contract",
              "Token",
              "Volatility memecoin",
            ].map((term) => (
              <Link
                key={term}
                to="#"
                className="bg-white rounded-sm px-5 py-3 text-lg font-medium text-gray-900 hover:text-[#1652f0] transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              See more
            </Link>
          </div>
        </div>
      </section>

      {/* Tips and Tutorials Section */}
      <section className="bg-white py-16 px-4 lg:px-18">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium mb-3 tracking-tight">
              Tips and tutorials
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Get practical, step-by-step answers to all things crypto
            </p>
          </div>

          {/* 2-column article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                img: learnPage.altCoin,
                category: "GETTING STARTED",
                title: "How to donate crypto",
              },
              {
                img: learnPage.DeFi,
                category: "VIDEO TUTORIAL",
                title: "How to set up a crypto wallet",
              },
              {
                img: learnPage.DollarCost,
                category: "VIDEO TUTORIAL",
                title: "When is the best time to invest in crypto?",
              },
              {
                img: homeImg.replaceBack,
                category: "YOUR CRYPTO",
                title: "How to invest in crypto via your retirement account",
              },
            ].map((article, idx) => (
              <Link to="#" key={idx} className="group block">
                <div className="overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full object-cover"
                    style={{ height: "340px" }}
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-tight text-gray-500 mb-2">
                  {article.category}
                </p>
                <h3
                  className={`text-xl sm:text-3xl font-medium tracking-tighter leading-snug ${"text-gray-900 group-hover:text-[#1652f0]"}`}
                >
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* See more button */}
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              See more tips and tutorials <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Trading Section */}
      <section className="bg-white py-16 px-4 lg:px-18">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium mb-3 tracking-tight">
              Advanced trading
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Ready to advance? Learn the tools and terminology you need to take
              control of your trades.
            </p>
          </div>

          {/* 2-column article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                img: learnPage.whatEthereum,
                category: "KEY TERM",
                title: "What is technical analysis?",
              },
              {
                img: homeImg.advanced,
                category: "ADVANCED GUIDE",
                title:
                  "How can I use crypto futures market data for spot trading?",
              },
              {
                img: learnPage.DollarCost,
                category: "ADVANCED GUIDE",
                title: "How to read advanced trading charts",
              },
              {
                img: learnPage.DeFi,
                category: "KEY TERM",
                title: "What is an order book?",
              },
            ].map((article, idx) => (
              <Link to="#" key={idx} className="group block">
                <div className="overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full object-cover"
                    style={{ height: "340px" }}
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-tight text-gray-500 mb-2">
                  {article.category}
                </p>
                <h3
                  className={`text-xl sm:text-2xl font-medium tracking-tighter leading-snug ${"text-gray-900 group-hover:text-[#1652f0]"}`}
                >
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* See more button */}
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              See more advanced trading <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Futures Section */}
      <section className="bg-white py-16 px-4 lg:px-18">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium mb-3 tracking-tight">
              Futures
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              New to futures trading? Get up to speed on the basics.
            </p>
          </div>

          {/* 2-column article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                img: homeImg.advanced,
                title: "Futures: Introductions and origins",
              },
              {
                img: homeImg.replaceBack,
                title: "Futures fundamentals: Understanding the basics",
              },
              {
                img: learnPage.DeFi,
                title:
                  "Opening, holding, and closing a position in the futures market",
              },
              {
                img: learnPage.altCoin,
                title:
                  "Trading strategies: Speculating, hedging, and spreading in the futures market",
              },
            ].map((article, idx) => (
              <Link to="#" key={idx} className="group block">
                <div className="overflow-hidden mb-4 bg-gray-900">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full object-cover"
                    style={{ height: "340px" }}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight leading-snug text-gray-900 group-hover:text-[#1652f0]">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* See more button */}
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              See more about futures <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* All Things Wallet Section */}
      <section className="bg-white py-16 px-4 lg:px-18">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium mb-3 tracking-tight">
              All Things Wallet
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Earn yield, dive into crypto apps, control your holdings, and much
              more
            </p>
          </div>

          {/* 2-column article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                img: homeImg.allCypto,
                category: null,
                title:
                  "What's the difference between Coinbase and Coinbase Wallet?",
                desc: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered",
              },
              {
                img: learnPage.DeFi,
                category: "VIDEO TUTORIAL",
                title: "How to set up a crypto wallet",
                desc: "Learn how to setup and get started with a crypto wallet.",
              },
              {
                img: learnPage.altCoin,
                category: "GETTING STARTED",
                title: "How to add crypto to your Coinbase Wallet",
                desc: "A quick guide on how to add crypto to your Coinbase self-custody wallet.",
              },
              {
                img: homeImg.replaceBack,
                category: null,
                title: "How to send or receive crypto using Coinbase Wallet",
                desc: "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
              },
            ].map((article, idx) => (
              <Link to="#" key={idx} className="group block">
                <div className="overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full object-cover"
                    style={{ height: "340px" }}
                  />
                </div>
                {article.category && (
                  <p className="text-xs font-medium uppercase tracking-tight text-gray-500 mb-2">
                    {article.category}
                  </p>
                )}
                <h3
                  className={`text-xl sm:text-2xl font-medium tracking-tighter leading-snug mb-2 ${"text-gray-900 group-hover:text-[#1652f0]"}`}
                >
                  {article.title}
                </h3>
                {article.desc && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {article.desc}
                  </p>
                )}
              </Link>
            ))}
          </div>

          {/* See more button */}
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#1652f0] hover:bg-[#0e3fd5] text-white font-semibold py-3 px-8 rounded transition-colors"
            >
              See more Wallet articles <span>›</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
