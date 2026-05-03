import React, { useState } from "react";
import Button from "./common/Button";
import {
  BiChevronLeft,
  BiChevronRight,
  BiMenu,
  BiSearch,
  BiWorld,
  BiShoppingBag,
  BiLineChart,
  BiMobile,
  BiDollar,
  BiStar,
  BiDiamond,
  BiLock,
  BiCreditCard,
  BiBriefcase,
  BiStore,
  BiLink,
  BiRefresh,
  BiTrendingUp,
  BiShield,
  BiGlobe,
  BiBarChartAlt2,
  BiCodeAlt,
  BiBuilding,
  BiWallet,
  BiRocket,
  BiInfoCircle,
  BiGroup,
  BiMessageSquareDetail,
  BiBook,
  BiTime,
  BiMoney,
  BiTransfer,
  BiChip,
  BiServer,
} from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CgClose } from "react-icons/cg";
import { TbWorld, TbPercentage } from "react-icons/tb";
import { MdOutlineAccountBalance } from "react-icons/md";
import { RiExchangeDollarLine, RiGlobalLine } from "react-icons/ri";
import Input from "./common/Input";
import coinbaseLogo from "../assets/images/coinbaseLogoNav.svg";
import { navibarImages } from "../assets/assets";
import bitcoinIcon from "../assets/icons/bitcon.png";
import etherIcon from "../assets/icons/ether.png";
import tetherIcon from "../assets/icons/tether.png";
import bnbIcon from "../assets/icons/bnb.png";
import usdcIcon from "../assets/icons/usdc.png";
import xrpIcon from "../assets/icons/xrp.png";
import { GoLightBulb } from "react-icons/go";
import WarningBanner from "./common/WarningBanner";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openMobileLang, setOpenMobileLang] = useState(false);
  const [langSearch, setLangSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("English|Global");
  const [activeMenu, setActiveMenu] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Top");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const initial = (user?.name?.[0] || "U").toUpperCase();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setActiveMenu([]);
    setOpenSubMenu(false);
    setOpenMobileLang(false);
  };

  const languages = [
    { name: "English", region: "Global" },
    { name: "Español", region: "United States" },
    { name: "English", region: "United States" },
    { name: "Deutsch", region: "Germany" },
    { name: "Français", region: "France" },
    { name: "Italiano", region: "Italy" },
    { name: "Português", region: "Brazil" },
    { name: "Nederlands", region: "Netherlands" },
    { name: "Polski", region: "Poland" },
    { name: "Türkçe", region: "Turkey" },
    { name: "日本語", region: "Japan" },
    { name: "한국어", region: "South Korea" },
    { name: "中文", region: "China" },
  ];

  const filteredLangs = languages.filter(
    (l) =>
      l.name.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.region.toLowerCase().includes(langSearch.toLowerCase()),
  );

  const handleActiveMenu = (list) => {
    setOpenSubMenu(true);
    setActiveMenu(list);
  };

  const searchFilter = [
    "Top",
    "Crypto",
    "Stocks",
    "Predictions",
    "Perpetuals",
    "Futures",
  ];

  const searchData = {
    crypto: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        rank: 1,
        price: "GHS 66,162.26",
        change: "-1.77%",
        positive: false,
        vol: "GHS 36.2B vol",
        mcap: "GHS 1.3T mcap",
        icon: bitcoinIcon,
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        rank: 2,
        price: "GHS 1,942.93",
        change: "-1.21%",
        positive: false,
        vol: "GHS 17.6B vol",
        mcap: "GHS 234.5B mcap",
        icon: etherIcon,
      },
      {
        name: "Tether",
        ticker: "USDT",
        rank: 3,
        price: "GHS 1.00",
        change: "+0.01%",
        positive: true,
        vol: "GHS 68.4B vol",
        mcap: "GHS 183.9B mcap",
        icon: tetherIcon,
      },
      {
        name: "BNB",
        ticker: "BNB",
        rank: 4,
        price: "GHS 612.45",
        change: "+0.85%",
        positive: true,
        vol: "GHS 1.8B vol",
        mcap: "GHS 88.7B mcap",
        icon: bnbIcon,
      },
      {
        name: "USDC",
        ticker: "USDC",
        rank: 5,
        price: "GHS 1.00",
        change: "+0.00%",
        positive: true,
        vol: "GHS 7.1B vol",
        mcap: "GHS 43.2B mcap",
        icon: usdcIcon,
      },
      {
        name: "XRP",
        ticker: "XRP",
        rank: 6,
        price: "GHS 7.23",
        change: "-2.14%",
        positive: false,
        vol: "GHS 4.3B vol",
        mcap: "GHS 39.8B mcap",
        icon: xrpIcon,
      },
    ],
    stocks: [
      {
        name: "NVIDIA",
        ticker: "NVDA",
        price: "GHS 173.15",
        change: "-1.06%",
        positive: false,
        vol: "GHS 1.1M vol",
        mcap: "GHS 4.2T mcap",
        color: "bg-green-600",
      },
      {
        name: "Apple",
        ticker: "AAPL",
        price: "GHS 253.14",
        change: "+0.63%",
        positive: true,
        vol: "GHS 83.2K vol",
        mcap: "GHS 3.8T mcap",
        color: "bg-gray-800",
      },
      {
        name: "Microsoft",
        ticker: "MSFT",
        price: "GHS 415.22",
        change: "+1.12%",
        positive: true,
        vol: "GHS 22.1M vol",
        mcap: "GHS 3.1T mcap",
        color: "bg-blue-600",
      },
      {
        name: "Tesla",
        ticker: "TSLA",
        price: "GHS 248.79",
        change: "-3.41%",
        positive: false,
        vol: "GHS 31.5M vol",
        mcap: "GHS 792B mcap",
        color: "bg-red-600",
      },
    ],
    predictions: [
      {
        title: "Men's College Basketball Championship",
        subtitle: "Duke",
        percent: "23%",
        positive: false,
        bg: "bg-blue-700",
      },
      {
        title: "Masters Tournament Champion",
        subtitle: "Scottie Scheffler",
        percent: "21%",
        positive: false,
        bg: "bg-green-700",
      },
      {
        title: "Pro Basketball Champion?",
        subtitle: "NBA Finals",
        percent: "39%",
        positive: true,
        bg: "bg-orange-600",
      },
    ],
  };

  const getFilteredSearchData = () => {
    if (activeFilter === "Crypto")
      return { crypto: searchData.crypto, stocks: [], predictions: [] };
    if (activeFilter === "Stocks")
      return { crypto: [], stocks: searchData.stocks, predictions: [] };
    if (activeFilter === "Predictions")
      return { crypto: [], stocks: [], predictions: searchData.predictions };
    return searchData;
  };

  const navLinks = [
    {
      id: "cryptocurrencies",
      label: "Cryptocurrencies",
      link: "explore",
      withDropdown: false,
    },
    { id: "individuals", label: "Individuals", link: "#", withDropdown: true },
    { id: "businesses", label: "Businesses", link: "#", withDropdown: true },
    {
      id: "institutions",
      label: "Institutions",
      link: "#",
      withDropdown: true,
    },
    { id: "developers", label: "Developers", link: "#", withDropdown: true },
    { id: "company", label: "Company", link: "#", withDropdown: true },
  ];

  const description = {
    cryptocurrencies: null,
    individuals: {
      img: navibarImages.navigationUpsell,
      heading: "System Upadte 2025",
      text: "The next Chapter of Coinbase.Live on X 12/17.",
      link: {
        text: "learn more",
        herf: "#",
      },
    },
    businesses: {
      img: navibarImages.BusinessImg,
      heading: "Commerce Payments Protocol",
      text: "A new standard for onchain payments",
      link: {
        text: "Go to payments",
        herf: "#",
      },
    },
    institutions: {
      img: navibarImages.instituteUpsell,
      heading: "Our clients",
      text: "Trusted by institution and government",
      link: {
        text: "learn more",
        herf: "#",
      },
    },
    developers: {
      img: navibarImages.developersUpsell,
      heading: "World class crypto infrastructure.",
      text: "Discover coinbase's complete crypto-as-a-service platform.",
      link: {
        text: "learn more",
        herf: "#",
      },
    },
    company: {
      img: navibarImages.companyUpsell,
      heading: "Learn all about Coinbase:",
      text: "We're building the open financial system.",
      link: {
        text: "create your account",
        herf: "#",
      },
    },
  };

  const dropdownMenus = {
    cryptocurrencies: [],
    individuals: [
      {
        title: "Buy and sell",
        description: "Buy, sell, and use crypto",
        herf: "/signup",
        icon: BiShoppingBag,
      },
      {
        title: "Advanced",
        description: "Professional-grade trading tools",
        herf: "/advanced-trade",
        icon: BiLineChart,
      },
      {
        title: "Base App",
        description: "Post, earn, trade, and chat, all in one place",
        herf: "https://join.base.app/",
        icon: BiMobile,
      },
      {
        title: "Earn",
        description: "Stake your crypto and earn rewards",
        herf: "#",
        icon: BiDollar,
      },
      {
        title: "Coinbase One",
        description: "Get zero trading fees and more",
        herf: "#",
        icon: BiStar,
      },
      {
        title: "Coinbase Wealth",
        description: "Institutional-grade services for UHNW",
        herf: "#",
        icon: BiDiamond,
      },
      {
        title: "Onchain",
        description: "dive into the world of unchain apps",
        herf: "/web3",
        icon: BiDiamond,
      },
      {
        title: "Private Client",
        description: "For trust, family offices and UHNWIS",
        herf: "#",
        icon: BiLock,
      },
      {
        title: "Learn",
        description: "Crypto tips and guides",
        herf: "/learn",
        icon: GoLightBulb,
      },
    ],
    businesses: [
      {
        title: "Business",
        description: "Crypto trading and payments for startups and SMBs",
        herf: "#",
        icon: BiBriefcase,
      },
      {
        title: "Payments",
        description: "The stablecoin payments stack for commerce platforms",
        herf: "#",
        icon: BiCreditCard,
      },
      {
        title: "Commerce",
        description: "Start accepting crypto payments",
        herf: "#",
        icon: BiStore,
      },
      {
        title: "Asset Listings",
        description: "List your asset on Coinbase",
        herf: "#",
        icon: BiLink,
      },
      {
        title: "Token Manager",
        description:
          "The platform for token distributions, vesting, and lockups",
        herf: "#",
        icon: BiRefresh,
      },
    ],
    institutions: [
      { title: "Prime", description: "", herf: "#", icon: BiChevronRight },
      { title: "Markets", description: "", herf: "#", icon: BiTrendingUp },
      {
        title: "Trading and Financing",
        description: "Professional prime brokerage services",
        herf: "#",
        icon: BiTime,
      },
      {
        title: "Exchange",
        description: "Spot markets for high-frequency trading",
        herf: "#",
        icon: RiExchangeDollarLine,
      },
      {
        title: "Custody",
        description: "Securely store all your digital assets",
        herf: "#",
        icon: BiShield,
      },
      {
        title: "International Exchange",
        description: "Access perpetual futures markets",
        herf: "#",
        icon: RiGlobalLine,
      },
      {
        title: "Staking",
        description: "Explore staking across our products",
        herf: "#",
        icon: TbPercentage,
      },
      {
        title: "Derivatives Exchange",
        description: "Trade an accessible futures market",
        herf: "#",
        icon: BiBarChartAlt2,
      },
    ],
    developers: [
      {
        title: "Coinbase Developer Platform",
        description: "",
        herf: "#",
        icon: BiCodeAlt,
      },
      {
        title: "Solutions for any company",
        description: "",
        herf: "#",
        icon: BiChevronRight,
      },
      {
        title: "Payments",
        description:
          "Fast and global stablecoin payments with a single integration",
        herf: "#",
        icon: BiTransfer,
      },
      {
        title: "Banks & Brokerages",
        description:
          "Secure, regulated offerings for retail, private banking, & institutional clients",
        herf: "#",
        icon: MdOutlineAccountBalance,
      },
      {
        title: "Trading",
        description: "Launch crypto trading and custody for your users",
        herf: "#",
        icon: BiLineChart,
      },
      {
        title: "Payment Firms",
        description:
          "Near-instant, low-cost, global payment rails for modern providers",
        herf: "#",
        icon: BiCreditCard,
      },
      {
        title: "Wallets",
        description:
          "Deploy customizable and scalable wallets for your business",
        herf: "#",
        icon: BiWallet,
      },
      {
        title: "Startups",
        description: "Launch your business with the infrastructure you need",
        herf: "#",
        icon: BiRocket,
      },
    ],
    company: [
      {
        title: "About",
        description: "Powering the crypto economy",
        herf: "#",
        icon: BiInfoCircle,
      },
      {
        title: "Careers",
        description: "Work with us",
        herf: "#",
        icon: BiBriefcase,
      },
      {
        title: "Affiliates",
        description: "Help introduce the world to crypto",
        herf: "#",
        icon: BiGroup,
      },
      {
        title: "Support",
        description: "Find answers to your questions",
        herf: "#",
        icon: BiMessageSquareDetail,
      },
      {
        title: "Blog",
        description: "Read the latest from Coinbase",
        herf: "#",
        icon: BiBook,
      },
      {
        title: "Security",
        description: "The most trusted & secure",
        herf: "#",
        icon: BiShield,
      },
    ],
  };

  return (
    <>
      <nav
        onMouseEnter={() => setActiveDropdown(null)}
        className="fixed top-11 md:top-8 z-50 bg-white h-16 w-full border-b border-gray-300 px-4 md:px-8"
      >
        <div className="h-full w-full flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            {!openSubMenu ? (
              <div
                className="size-11 rounded-full flex cursor-pointera items-center justify-center"
                onClick={() => navigate("/")}
              >
                <img src={coinbaseLogo} className="object-contain " />
              </div>
            ) : (
              <div className="size-11 rounded-full bg-gray-100 flex items-center justify-center">
                <button
                  onClick={() => {
                    setActiveMenu([]);
                    setOpenSubMenu(false);
                  }}
                >
                  <BiChevronLeft size={40} className="text-gray-600" />
                </button>
              </div>
            )}

            {/* Desktop Navigation Links */}
            <div className="hidden h-full xl:flex items-center">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() =>
                    link.withDropdown
                      ? setActiveDropdown(link.id)
                      : setActiveDropdown(null)
                  }
                  // onMouseLeave={() =>
                  //   link.withDropdown && setActiveDropdown(null)
                  // }
                  onClick={() =>
                    link.withDropdown && setActiveDropdown(link.id)
                  }
                >
                  <NavLink
                    to={link.link}
                    className="text-gray-900 px-3 py-3 rounded-full hover:bg-gray-50 font-medium text-md"
                  >
                    {link.label}
                  </NavLink>

                  {link.withDropdown && activeDropdown === link.id && (
                    <>
                      <div className="fixed backdrop-blur- top-22 right-0 w-dvw z-30">
                        <div className="bg-white h-95 grid grid-cols-3 p-6 overflow-y-auto">
                          <div className="col-span-2 grid grid-cols-2 gap-3">
                            {dropdownMenus[link.id]?.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.herf}
                                onClick={() => setActiveDropdown(nul)}
                                className="flex items-start cursor-pointer gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                  <item.icon
                                    className="text-gray-700"
                                    size={20}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-md font-semibold text-gray-900 ">
                                    {item.title}
                                  </p>
                                  {item.description && (
                                    <p className=" text-gray-600 leading-5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="col-span-1 w-full">
                            <div className="flex h-full items-center justify-center gap-5 px-6">
                              <img
                                src={description[link.id]?.img}
                                className="object-cover size-38 rounded-4xl"
                              />

                              <div>
                                <h4 className="text-gray-900 text-2xl">
                                  {description[link.id]?.heading}
                                </h4>
                                <p className="text-gray-400 text-2xl">
                                  {description[link.id]?.text}
                                </p>
                                <Link
                                  to={description[link.id]?.link.href}
                                  className="text-gray-900 font-bold text-sm underline"
                                >
                                  {description[link.id]?.link.text}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div
                    onMouseEnter={() =>
                      link.withDropdown && setActiveDropdown(null)
                    }
                    className={`h-dvh bg-gray-200/10 ${activeDropdown !== null ? "block" : "hidden"} backdrop-blur-sm fixed left-0 top-22 w-dvw z-20`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex gap-2.5 text-gray-800">
            {!openSearch && (
              <button
                className="size-11 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => setOpenSearch(true)}
              >
                <BiSearch size={20} />
              </button>
            )}
            {openSearch && (
              <div className="hidden md:flex z-40">
                <Input
                  className={"w-full"}
                  size={"sm"}
                  leftIcon={<BiSearch className="text-blue-600" />}
                  placeholder={"Search..."}
                  containerClassName={"w-89"}
                />
              </div>
            )}
            {!openSearch && (
              <div className="hidden md:flex gap-2 items-center">
                <button
                  className="size-11 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  onClick={() => {
                    setOpenLang(!openLang);
                    setLangSearch("");
                  }}
                >
                  <BiWorld size={20} />
                </button>
                {user ? (
                  <>
                    <Link
                      to={"/account"}
                      replace
                      className="hidden md:block text-sm font-medium text-gray-700 truncate max-w-32"
                    >
                      <div className="size-10 rounded-full bg-blue-700 flex items-center justify-center">
                        <p className="text-white">{initial}</p>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      variant={"secondary"}
                      className={"hidden md:block"}
                      onClick={() => navigate("/signin")}
                    >
                      Sign in
                    </Button>
                    <Button
                      onClick={() => navigate("/signup")}
                      className="hidden md:block"
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </div>
            )}

            {user ? (
              <Link
                to={"/account"}
                replace
                variant={"secondary"}
                className="md:hidden"
              >
                <div className="size-10 rounded-full bg-blue-700 flex items-center justify-center">
                  <p className="text-white">{initial}</p>
                </div>
              </Link>
            ) : (
              <Button onClick={() => navigate("/signup")} className="md:hidden">
                Sign up
              </Button>
            )}
            <button
              className="lg:hidden size-11 rounded-full flex items-center justify-center text-gray-800 bg-gray-100 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              {openMenu ? <CgClose size={27} /> : <BiMenu size={23} />}
            </button>
          </div>
        </div>

        {/* Language & region dropdown */}
        {openLang && (
          <>
            <div
              className="fixed z-30 inset-0"
              onClick={() => setOpenLang(false)}
            />
            <div className="fixed z-40 top-22 right-28 w-88 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
              <p className="text-sm font-semibold text-gray-500 px-5 pt-5 pb-3">
                Language and region
              </p>
              {/* Search */}
              <div className="px-4 pb-3">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                  <BiSearch size={16} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={langSearch}
                    onChange={(e) => setLangSearch(e.target.value)}
                    placeholder="Search"
                    className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
              </div>
              {/* List */}
              <div className="overflow-y-auto max-h-72 pb-2">
                {filteredLangs.map((lang) => {
                  const key = `${lang.name}|${lang.region}`;
                  const active = selectedLang === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedLang(key);
                        setOpenLang(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">
                          {lang.name}
                        </p>
                        <p className="text-xs text-gray-500">{lang.region}</p>
                      </div>
                      {active && (
                        <svg
                          className="text-gray-700 shrink-0"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.5 8L6.5 12L13.5 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {openSearch && (
          <>
            <div
              className="hidden md:block fixed z-30 top-0 w-full h-dvh left-0 bg-gray-800/20"
              onClick={() => setOpenSearch(false)}
            ></div>
            <div className="hidden md:flex fixed z-40 top-22 right-16 w-[min(480px,calc(100vw-2rem))] max-h-130 bg-white rounded-2xl shadow-2xl border border-gray-200 flex-col overflow-hidden">
              {/* Filter tabs */}
              <div className="flex items-center gap-2 p-3 border-b border-gray-100 overflow-x-auto scrollbar-hide shrink-0">
                {searchFilter.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-sm font-semibold cursor-pointer px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                      activeFilter === filter
                        ? "text-white bg-gray-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Results */}
              <div className="overflow-y-auto flex-1">
                {/* Crypto section */}
                {getFilteredSearchData().crypto.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-2 uppercase">
                      Crypto
                    </p>
                    {getFilteredSearchData().crypto.map((coin) => (
                      <Link
                        key={coin.ticker}
                        to={`/explore`}
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      >
                        {/* Icon */}
                        <img
                          src={coin.icon}
                          alt={coin.name}
                          className="w-9 h-9 rounded-full object-contain shrink-0"
                        />

                        {/* Name + ticker */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-gray-900">
                              {coin.name}
                            </span>
                            <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md">
                              #{coin.rank}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400">{coin.ticker}</p>
                        </div>

                        {/* Vol + mcap */}
                        <div className="text-right hidden sm:block">
                          <p className="text-xs text-gray-500">{coin.vol}</p>
                          <p className="text-xs text-gray-400">{coin.mcap}</p>
                        </div>

                        {/* Price + change */}
                        <div className="text-right shrink-0 ml-2">
                          <p className="text-sm font-semibold text-gray-900">
                            {coin.price}
                          </p>
                          <p
                            className={`text-xs font-medium ${coin.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {coin.positive ? "↑" : "↓"} {coin.change}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Stocks section */}
                {getFilteredSearchData().stocks.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-2 uppercase">
                      Stocks
                    </p>
                    {getFilteredSearchData().stocks.map((stock) => (
                      <Link
                        key={stock.ticker}
                        to="#"
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      >
                        {/* Stock icon placeholder */}
                        <div
                          className={`w-9 h-9 rounded-full ${stock.color} flex items-center justify-center shrink-0`}
                        >
                          <span className="text-white text-xs font-bold">
                            {stock.ticker.slice(0, 2)}
                          </span>
                        </div>

                        {/* Name + ticker */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900">
                            {stock.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {stock.ticker}
                          </p>
                        </div>

                        {/* Vol + mcap */}
                        <div className="text-right hidden sm:block">
                          <p className="text-xs text-gray-500">{stock.vol}</p>
                          <p className="text-xs text-gray-400">{stock.mcap}</p>
                        </div>

                        {/* Price + change */}
                        <div className="text-right shrink-0 ml-2">
                          <p className="text-sm font-semibold text-gray-900">
                            {stock.price}
                          </p>
                          <p
                            className={`text-xs font-medium ${stock.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {stock.positive ? "↑" : "↓"} {stock.change}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Predictions section */}
                {getFilteredSearchData().predictions?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-2 uppercase">
                      Predictions
                    </p>
                    {getFilteredSearchData().predictions.map((pred, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg ${pred.bg} flex items-center justify-center shrink-0`}
                        >
                          <span className="text-white text-[9px] font-bold text-center leading-tight px-0.5">
                            {pred.subtitle.slice(0, 4)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {pred.title}
                          </p>
                          <p className="text-xs text-gray-400">
                            {pred.subtitle}
                          </p>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <p className="text-sm font-semibold text-gray-900">
                            {pred.percent}
                          </p>
                          <p
                            className={`text-xs font-medium ${pred.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {pred.positive ? "↑" : "↓"} 1
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Perpetuals / Futures empty state */}
                {["Perpetuals", "Futures"].includes(activeFilter) && (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                    <BiBarChartAlt2 size={40} className="mb-3 text-gray-300" />
                    <p className="text-sm font-medium">
                      No {activeFilter} data available
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ── Mobile full-screen search overlay ── */}
            <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col">
              {/* Top bar: back button + search input */}
              <div className="flex items-center gap-3 px-3 py-3 border-b border-gray-200 shrink-0">
                <button
                  onClick={() => setOpenSearch(false)}
                  className="size-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shrink-0"
                >
                  <BiChevronLeft size={24} className="text-gray-700" />
                </button>
                <Input
                  className="w-full"
                  size="sm"
                  autoFocus
                  leftIcon={<BiSearch className="text-blue-600" />}
                  placeholder="Search..."
                  containerClassName="flex-1"
                  fullWidth
                />
              </div>

              {/* Filter tabs */}
              <div className="flex items-center px-3 py-2.5 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
                  {searchFilter.map((filter, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilter(filter)}
                      className={`text-sm font-semibold cursor-pointer px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                        activeFilter === filter
                          ? "text-white bg-gray-900"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <BiChevronRight
                  size={20}
                  className="text-gray-400 shrink-0 ml-1"
                />
              </div>

              {/* Results */}
              <div className="overflow-y-auto flex-1">
                {/* Crypto */}
                {getFilteredSearchData().crypto.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-1 uppercase">
                      Crypto
                    </p>
                    {getFilteredSearchData().crypto.map((coin) => (
                      <Link
                        key={coin.ticker}
                        to="/explore"
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <img
                          src={coin.icon}
                          alt={coin.name}
                          className="w-9 h-9 rounded-full object-contain shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-gray-900">
                              {coin.name}
                            </span>
                            <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md">
                              #{coin.rank}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400">{coin.ticker}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-gray-900">
                            {coin.price}
                          </p>
                          <p
                            className={`text-xs font-medium ${coin.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {coin.positive ? "↑" : "↓"} {coin.change}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Stocks */}
                {getFilteredSearchData().stocks.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-1 uppercase">
                      Stocks
                    </p>
                    {getFilteredSearchData().stocks.map((stock) => (
                      <Link
                        key={stock.ticker}
                        to="#"
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-9 h-9 rounded-full ${stock.color} flex items-center justify-center shrink-0`}
                        >
                          <span className="text-white text-xs font-bold">
                            {stock.ticker.slice(0, 2)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900">
                            {stock.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {stock.ticker}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-gray-900">
                            {stock.price}
                          </p>
                          <p
                            className={`text-xs font-medium ${stock.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {stock.positive ? "↑" : "↓"} {stock.change}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Predictions */}
                {getFilteredSearchData().predictions?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 tracking-widest px-4 pt-4 pb-1 uppercase">
                      Predictions
                    </p>
                    {getFilteredSearchData().predictions.map((pred, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg ${pred.bg} flex items-center justify-center shrink-0`}
                        >
                          <span className="text-white text-[9px] font-bold text-center leading-tight px-0.5">
                            {pred.subtitle.slice(0, 4)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {pred.title}
                          </p>
                          <p className="text-xs text-gray-400">
                            {pred.subtitle}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-gray-900">
                            {pred.percent}
                          </p>
                          <p
                            className={`text-xs font-medium ${pred.positive ? "text-green-500" : "text-red-500"}`}
                          >
                            {pred.positive ? "↑" : "↓"} 1
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Perpetuals / Futures empty state */}
                {["Perpetuals", "Futures"].includes(activeFilter) && (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <BiBarChartAlt2 size={40} className="mb-3 text-gray-300" />
                    <p className="text-sm font-medium">
                      No {activeFilter} data available
                    </p>
                  </div>
                )}
              </div>

              {/* Disclaimer footer */}
              <div className="px-4 py-3 border-t border-gray-100 shrink-0">
                <p className="text-xs text-gray-400 text-center">
                  Stocks and prediction markets not available in your
                  jurisdiction.
                </p>
              </div>
            </div>
          </>
        )}
      </nav>

      {openMenu && (
        <section className="h-dvh xl:hidden fixed top-0 z-40 w-full bg-white pt-26 md:pt-22  flex flex-col">
          {/* ── Main nav list ── */}
          {!openSubMenu && !openMobileLang && (
            <>
              <div className="flex-1 overflow-y-auto">
                {navLinks.map((menu) =>
                  !menu.withDropdown ? (
                    <NavLink
                      key={menu.id}
                      to={menu.link}
                      onClick={toggleMenu}
                      className="flex w-full items-center justify-between p-4 text-xl font-medium text-gray-800"
                    >
                      {menu.label}
                    </NavLink>
                  ) : (
                    <button
                      key={menu.id}
                      onClick={() => handleActiveMenu(dropdownMenus[menu.id])}
                      className="flex w-full items-center justify-between p-4 text-xl font-medium text-gray-800"
                    >
                      <span>{menu.label}</span>
                      <BiChevronRight size={28} className="text-gray-400" />
                    </button>
                  ),
                )}
              </div>

              {/* Bottom bar: Globe + Sign in/out */}
              <div className="px-4 py-5 border-t border-gray-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    setLangSearch("");
                    setOpenMobileLang(true);
                  }}
                  className="size-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shrink-0"
                >
                  <BiWorld size={20} className="text-gray-700" />
                </button>
                {user ? (
                  <Link to={"/profile"} replace>
                    <div className="size-10 rounded-full bg-blue-700 flex items-center justify-center">
                      <p className="text-white">{initial}</p>
                    </div>
                  </Link>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </>
          )}

          {/* ── Language selector ── */}
          {openMobileLang && (
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-3 py-3 shrink-0">
                <button
                  onClick={() => setOpenMobileLang(false)}
                  className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0"
                >
                  <BiChevronLeft size={24} className="text-gray-700" />
                </button>
                <span className="text-gray-900 font-semibold text-base">
                  Language and region
                </span>
              </div>

              {/* Search */}
              <div className="px-4 pb-3 shrink-0">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2.5">
                  <BiSearch size={16} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={langSearch}
                    onChange={(e) => setLangSearch(e.target.value)}
                    placeholder="Search"
                    autoFocus
                    className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
              </div>

              {/* Language list */}
              <div className="overflow-y-auto flex-1">
                {filteredLangs.map((lang) => {
                  const key = `${lang.name}|${lang.region}`;
                  const active = selectedLang === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedLang(key);
                        setOpenMobileLang(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    >
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">
                          {lang.name}
                        </p>
                        <p className="text-xs text-gray-500">{lang.region}</p>
                      </div>
                      {active && (
                        <svg
                          className="text-gray-700 shrink-0"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.5 8L6.5 12L13.5 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Sub-menu (nav item drill-down) ── */}
          {activeMenu.length > 0 && openSubMenu && (
            <div className="px-7 pt-10 flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {activeMenu.map((list) => (
                  <NavLink
                    to={list.herf}
                    key={list.title}
                    onClick={toggleMenu}
                    className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-xl"
                  >
                    <div className="bg-(--bg-secondary) size-8 text-gray-900 flex items-center justify-center rounded-md">
                      <list.icon size={23} />
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-900 font-medium">{list.title}</p>
                      <p className="text-gray-600">{list.description}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Navbar;
