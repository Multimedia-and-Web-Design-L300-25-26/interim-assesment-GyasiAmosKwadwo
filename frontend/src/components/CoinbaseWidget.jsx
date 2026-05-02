import { useState } from "react";
import {
  useAllCrypto,
  useCryptoGainers,
  useCryptoNew,
} from "../hooks/useCryptoQueries";

const FALLBACK_TRADABLE = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    price: "GHS 746,581.26",
    change: -5.01,
    color: "#F7931A",
    icon: "₿",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    price: "GHS 21,769.00",
    change: -5.22,
    color: "#627EEA",
    icon: "Ξ",
  },
  {
    name: "Tether",
    ticker: "USDT",
    price: "GHS 10.82",
    change: -0.01,
    color: "#26A17B",
    icon: "₮",
  },
  {
    name: "BNB",
    ticker: "BNB",
    price: "GHS 6,842.76",
    change: -3.85,
    color: "#F0B90B",
    icon: "B",
  },
  {
    name: "XRP",
    ticker: "XRP",
    price: "GHS 14.81",
    change: -4.5,
    color: "#346AA9",
    icon: "✕",
  },
  {
    name: "USDC",
    ticker: "USDC",
    price: "GHS 10.82",
    change: 0.0,
    color: "#2775CA",
    icon: "$",
  },
];

const FALLBACK_GAINERS = [
  {
    name: "Freysa",
    ticker: "FAI",
    price: "GHS 0.0782",
    change: 109.26,
    color: "#8B5CF6",
    icon: "F",
  },
  {
    name: "Flow",
    ticker: "FLOW",
    price: "GHS 0.44",
    change: 17.39,
    color: "#00EF8B",
    icon: "◎",
  },
  {
    name: "Syndicate",
    ticker: "SYNDI",
    price: "GHS 0.50",
    change: 14.18,
    color: "#6B7280",
    icon: "⊕",
  },
  {
    name: "TRIA",
    ticker: "TRIA",
    price: "GHS 0.22",
    change: 14.47,
    color: "#EC4899",
    icon: "✦",
  },
  {
    name: "aPriori",
    ticker: "APRI",
    price: "GHS 1.26",
    change: 13.95,
    color: "#A78BFA",
    icon: "⬡",
  },
  {
    name: "Sentient",
    ticker: "SENT",
    price: "GHS 0.27",
    change: 13.81,
    color: "#F472B6",
    icon: "✿",
  },
];

const FALLBACK_NEW = [
  {
    name: "Hyperliquid",
    ticker: "HYPE",
    price: "GHS 323.49",
    change: -5.03,
    color: "#10B981",
    icon: "◈",
  },
  {
    name: "Jupiter",
    ticker: "JUP",
    price: "GHS 1.93",
    change: -7.93,
    color: "#3B82F6",
    icon: "♃",
  },
  {
    name: "Lighter",
    ticker: "LIGHT",
    price: "GHS 12.25",
    change: -13.9,
    color: "#1C1C1E",
    icon: "◐",
  },
  {
    name: "Sentient",
    ticker: "SENT",
    price: "GHS 0.27",
    change: 13.81,
    color: "#F472B6",
    icon: "✿",
  },
  {
    name: "Walrus",
    ticker: "WAL",
    price: "GHS 0.82",
    change: -4.52,
    color: "#14B8A6",
    icon: "W",
  },
  {
    name: "Freysa",
    ticker: "FAI",
    price: "GHS 0.0782",
    change: 109.26,
    color: "#8B5CF6",
    icon: "F",
  },
];

const COIN_COLORS = [
  "#F7931A",
  "#627EEA",
  "#26A17B",
  "#F0B90B",
  "#346AA9",
  "#2775CA",
  "#9945FF",
  "#EF0027",
  "#C2A633",
  "#0033AD",
  "#8B5CF6",
  "#10B981",
];

function mapApiCoin(coin, idx) {
  return {
    name: coin.name,
    ticker: coin.symbol,
    price: `$${Number(coin.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    change: coin.change24h,
    color: COIN_COLORS[idx % COIN_COLORS.length],
    icon: coin.symbol.charAt(0).toUpperCase(),
  };
}

const TABS = [
  { id: "tradable", label: "Tradable" },
  { id: "gainers", label: "Top gainers" },
  { id: "new", label: "New on Coinbase" },
];

function CoinIcon({ coin }) {
  return (
    <div
      className="flex items-center justify-center rounded-full text-white font-bold text-sm shrink-0"
      style={{
        width: 40,
        height: 40,
        background: coin.color,
        fontSize: 16,
        boxShadow: `0 0 12px ${coin.color}55`,
      }}
    >
      {coin.icon}
    </div>
  );
}

function CoinRow({ coin, index, visible }) {
  const isPositive = coin.change >= 0;
  return (
    <div
      className="flex items-center justify-between px-5 py-3 rounded-xl cursor-pointer transition-all duration-200 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.35s ease ${index * 55}ms, transform 0.35s ease ${index * 55}ms`,
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div className="flex items-center gap-3">
        <CoinIcon coin={coin} />
        <div>
          <p className="hidden lg:block text-white text-3xl leading-tight">
            {coin.name}
          </p>
          <p className="lg:hidden text-white text-3xl leading-tight">
            {coin.ticker}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white lg:text-3xl">{coin.price}</p>
        <p
          className="text-sm mt-0.5 flex items-center justify-end gap-0.5"
          style={{ color: isPositive ? "#22C55E" : "#EF4444" }}
        >
          <span style={{ fontSize: 12 }}>{isPositive ? "↗" : "↙"}</span>
          {Math.abs(coin.change).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

const CoinbaseWidget = () => {
  const [activeTab, setActiveTab] = useState("tradable");
  const [visible, setVisible] = useState(true);
  const [displayTab, setDisplayTab] = useState("tradable");

  const { data: allRes, isLoading: loadingAllRes } = useAllCrypto();
  const { data: gainersRes } = useCryptoGainers();
  const { data: newRes } = useCryptoNew();

  const data = {
    tradable: allRes?.data?.length
      ? allRes.data.map(mapApiCoin)
      : FALLBACK_TRADABLE,
    gainers: gainersRes?.data?.length
      ? gainersRes.data.map(mapApiCoin)
      : FALLBACK_GAINERS,
    new: newRes?.data?.length ? newRes.data.map(mapApiCoin) : FALLBACK_NEW,
  };

  const currentData = data[displayTab] || [];

  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setVisible(false);
    setTimeout(() => {
      setDisplayTab(id);
      setActiveTab(id);
      setVisible(true);
    }, 220);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 lg:px-14">
      <div className="flex flex-col lg:flex-row items-center w-full">
        <div className="lg:flex-1/2 text-left space-y-5 pb-4">
          <h1 className="text-[42px]  leading-11.5 tracking-tighter font-normal text-gray-900">
            Explore crypto like Bitcoin Ethereum and Dogecoin.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>
          <button
            className="mt-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-base hover:bg-gray-700 transition-colors duration-200"
            style={{ letterSpacing: "0.01em" }}
          >
            See more assets
          </button>
        </div>

        <div className="shrink-0 max-w-sm lg:max-w-full lg:flex-1/2 rounded-4xl overflow-hidden bg-gray-950 p-6">
          <div className="flex items-center gap-1 p-6 pb-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="relative px-3.5 py-2 rounded-full text-md font-medium transition-all duration-200"
                style={{
                  color:
                    activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.45)",
                  background:
                    activeTab === tab.id
                      ? "rgba(255,255,255,0.15)"
                      : "transparent",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-2 max-h-135 overflow-y-auto pb-4">
            {currentData.map((coin, i) => (
              <CoinRow
                key={coin.ticker + i}
                coin={coin}
                index={i}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinbaseWidget;
