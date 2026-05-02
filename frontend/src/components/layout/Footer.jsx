import React from "react";
import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import coinbaseLogo from "../../assets/images/coinbaseLogoNav.svg";

const Footer = () => {
  const footerSections = {
    Company: [
      "About",
      "Careers",
      "Affiliates",
      "Blog",
      "Press",
      "Security",
      "Investors",
      "Vendors",
      "Legal & privacy",
      "Cookie policy",
      "Cookie preferences",
      "Digital Asset Disclosures",
    ],
    Individuals: [
      "Buy & sell",
      "Earn free crypto",
      "Base App",
      "Coinbase One",
      "Debit Card",
    ],
    Businesses: [
      "Asset Listings",
      "Coinbase Business",
      "Payments",
      "Commerce",
      "Token Manager",
    ],
    Institutions: [
      "Prime",
      "Staking",
      "Exchange",
      "International Exchange",
      "Derivatives Exchange",
      "Verified Pools",
    ],
    Developers: [
      "Developer Platform",
      "Base",
      "Server Wallets",
      "Embedded Wallets",
      "Base Accounts (Smart Wallets)",
      "Onramp & Offramp",
      "x402",
      "Trade API",
      "Paymaster",
      "OnchainKit",
      "Data API",
      "Verifications",
      "Node",
      "AgentKit",
      "Staking",
      "Faucet",
      "Exchange API",
      "International Exchange API",
      "Prime API",
      "Derivatives API",
    ],
    Support: [
      "Help center",
      "Contact us",
      "Create account",
      "ID verification",
      "Account information",
      "Payment methods",
      "Account access",
      "Supported crypto",
      "Status",
    ],
    "Asset prices": [
      "Bitcoin price",
      "Ethereum price",
      "Solana price",
      "XRP price",
    ],
    "Stock prices": [
      "NVIDIA price",
      "Apple price",
      "Microsoft price",
      "Amazon price",
    ],
    Learn: [
      "Explore",
      "Market statistics",
      "Coinbase Bytes newsletter",
      "Crypto basics",
      "Tips & tutorials",
      "Crypto glossary",
      "Market updates",
      "What is Bitcoin?",
      "What is crypto?",
      "What is a blockchain?",
      "How to set up a crypto wallet?",
      "How to send crypto?",
      "Taxes",
    ],
  };

  const socialLinks = [
    { icon: FaXTwitter, label: "X (Twitter)", url: "#" },
    { icon: FaLinkedin, label: "LinkedIn", url: "#" },
    { icon: FaInstagram, label: "Instagram", url: "#" },
    { icon: FaTiktok, label: "TikTok", url: "#" },
  ];

  return (
    <footer className=" bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex flex-col md:flex-row">
          <div className="lg:mr-32">
            <div className="flex items-center gap-2">
              <div className="size-15 rounded-full flex items-center justify-center">
                <img src={coinbaseLogo} />
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="lg:h-275 gap-x-12 gap-y-7 flex flex-col lg:flex-wrap mb-12">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
                <ul className="space-y-2 ">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-md transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8 pb-8 border-b border-gray-200">
          {socialLinks.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-5 h-5 text-gray-700" />
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mb-6 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3 text-sm text-yellow-800">
          <strong>Demo Project Disclaimer:</strong> This is a student project
          created for educational purposes only. Do not enter any real personal
          information, payment details, or credentials. This site is not
          affiliated with Coinbase.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-md text-gray-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-900">© 2026 Coinbase</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="text-gray-600">
              Privacy
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="text-gray-600">
              Terms & Conditions
            </a>
          </div>

          <div className="flex items-center gap-2">
            <RiGlobalLine className="w-4 h-4" />
            <span>Global</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
