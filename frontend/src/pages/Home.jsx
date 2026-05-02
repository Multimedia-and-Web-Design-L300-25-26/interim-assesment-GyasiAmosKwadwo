import React, { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { BiMenu, BiChevronRight, BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  SiTether,
  SiBinance,
  SiAlgorand,
  SiDogecoin,
  SiCardano,
} from "react-icons/si";
import Card, {
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../components/common/Card";
import { homeImg } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import CoinbaseWidget from "../components/CoinbaseWidget";
import coinbaseLogo from "../assets/images/coinbaseLogoNav.svg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="pt-26">
        <div className="px-4 xl:flex xl:flex-row-reverse xl:items-center p-3">
          <div className="flex-1/2 lg:px-9">
            <h2 className="text-gray-900 text-5xl md:text-7xl mb-6">
              The future of finance is here.
            </h2>
            <p className="mb-6">
              Trade crypto and more on a platform you can trust.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-2">
              <Input
                placeholder="satoshi@nakamoto.com"
                className=" w-full rounded-md"
              />
              <Button
                onClick={() => navigate("/signup/")}
                className={"rounded-full"}
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="mt-4 flex-1/2">
            <div className="w-full  rounded-[47px] overflow-hidden">
              <img src={homeImg.hero4} className="object-contain" />
            </div>
            <p className="text-xs text-zinc-500 py-2">
              Stocks and prediction markets not available in your jurisdiction.
            </p>
          </div>
        </div>
      </section>

      <section>
        <CoinbaseWidget />
      </section>

      {/* Advanced trader section */}
      <section className="py-12 px-4 lg:px-14">
        <div className="xl:flex xl:items-center gap-5 p-3">
          {/* Left: Dark device mockup container */}
          <div className="flex-1/2 mt-4">
            <div className="bg-black rounded-[47px] overflow-hidden">
              <img src={homeImg.advanced} className="object-contain w-full" />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex-1/2 lg:px-9 mt-6 xl:mt-0">
            <h2 className="text-gray-900 text-[42px] leading-11.5 tracking-tighter mb-6">
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Powerful analytical tools with the safety and security of Coinbase
              deliver the ultimate trading experience. Tap into sophisticated
              charting capabilities, real-time order books, and deep liquidity
              across hundreds of markets.
            </p>
            <Button
              onClick={() => navigate("/signup/")}
              className="!bg-gray-900 !text-white hover:!bg-gray-700"
            >
              Start trading
            </Button>
          </div>
        </div>
      </section>

      {/* Coinbase One section */}
      <section className="py-12 px-4 lg:px-14">
        <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-8 p-3">
          {/* Left: Text content */}
          <div className="flex-1/2 lg:px-9">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 mb-6">
              <img src={coinbaseLogo} className="size-5 object-contain" />
              <span className="text-xs tracking-widest text-gray-500">
                COINBASE ONE
              </span>
            </div>

            <h2 className="text-gray-900  text-[42px] leading-11.5 tracking-tighter mb-6">
              Zero trading fees, more rewards.
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Get more out of crypto with one membership: zero trading fees,
              boosted rewards, priority support, and more.
            </p>
            <Button
              onClick={() => navigate("/signup/")}
              className="!bg-gray-900 !text-white hover:!bg-gray-700"
            >
              Claim free trial
            </Button>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex-1/2 mt-10 xl:mt-0">
            <div className="bg-gray-100 overflow-hidden rounded-[40px]">
              <img src={homeImg.zeroFees} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 lg:px-14">
        <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-8 p-3">
          <div className="flex-1/2 mt-10 xl:mt-0">
            <div className="bg-gray-100 overflow-hidden rounded-[40px]">
              <img src={homeImg.cbLolp} className="object-contain" />
            </div>
          </div>

          <div className="flex-1/2 lg:px-9">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 mb-6">
              <img src={coinbaseLogo} className="size-5 object-contain" />
              <span className="text-xs tracking-widest text-gray-500">
                BASE APP
              </span>
            </div>

            <h2 className="text-gray-900  text-[42px] leading-11.5 tracking-tighter mb-6">
              Countless way to earn crypto with the Base App
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              An everything app to trade, create, discover, and chat, all in one
              place.
            </p>
            <Button
              onClick={() => navigate("/signup/")}
              className="!bg-gray-900 !text-white hover:!bg-gray-700"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* New to crypto section */}
      <section className="bg-gray-100 py-12 px-4 lg:px-14">
        {/* Header row */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-6 mb-10 p-3">
          <h2 className="text-gray-900 text-3xl lg:text-6xl leading-tight tracking-tighter flex-1/2">
            New to crypto? Learn some crypto basics
          </h2>
          <div className="flex-1/2 xl:pl-9 flex flex-col items-start gap-6">
            <p className="text-zinc-500 text-lg leading-relaxed">
              Beginner guides, practical tips, and market updates for
              first-timers, experienced investors, and everyone in between
            </p>
            <Button className="bg-gray-900! text-white! hover:bg-gray-700! rounded-full! px-8!">
              Read More
            </Button>
          </div>
        </div>

        {/* Three article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
          {/* Card 1 — USDC */}
          <div className="flex flex-col gap-4">
            <div className="max-h-52  rounded-4xl overflow-hidden ">
              <img src={homeImg.cImg1} className="object-contain" />
            </div>
            <h3 className="text-gray-900 text-3xl hover:underline cursor-pointer leading-snug">
              USDC: The digital dollar for the global crypto economy
            </h3>
            <p className="text-zinc-500 text-md leading-relaxed">
              Coinbase believes crypto will be part of the solution for creating
              an open financial system that is both more efficient and more...
            </p>
          </div>

          {/* Card 2 — Bank account */}
          <div className="flex flex-col gap-4">
            <div className="max-h-52  rounded-4xl overflow-hidden  ">
              <img src={homeImg.replaceBack} className="object-contain" />
            </div>
            <h3 className="text-gray-900 text-3xl hover:underline cursor-pointer leading-snug ">
              Can crypto really replace your bank account?
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              If you're a big enough fan of crypto, you've probably heard the
              phrase "be your own bank" or the term "bankless" — the idea being
              that...
            </p>
          </div>

          {/* Card 3 — Best time to invest */}
          <div className="flex flex-col gap-4">
            <div className="max-h-52 rounded-4xl overflow-hidden">
              <img src={homeImg.LearnIll} className="object-contain" />
            </div>
            <h3 className="text-gray-900 text-3xl hover:underline cursor-pointer leading-snug">
              When is the best time to invest in crypto?
            </h3>
            <p className="text-zinc-500 text-md leading-relaxed">
              Cryptocurrencies like Bitcoin can experience daily (or even
              hourly) price volatility. As with any kind of investment,
              volatility may cause...
            </p>
          </div>
        </div>
      </section>

      {/* Take control of your money section */}
      <section className="py-16 px-4 lg:px-14">
        <div className="flex flex-col xl:flex-row xl:items-center gap-10 p-3">
          {/* Left: Text + form */}
          <div className="flex-1/2 lg:px-9">
            <h2 className="text-gray-900 text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter mb-5">
              Take control
              <br />
              of your money
            </h2>
            <p className="text-gray-600 mb-8">
              Start your portfolio today and discover crypto
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <Input
                placeholder="satoshi@nakamoto.com"
                className="w-full rounded-md"
              />
              <Button
                onClick={() => navigate("/signup/")}
                className="rounded-full! sm:shrink-0"
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="flex-1/2 ">
            <img src={homeImg.allCypto} className="object-contain" />
          </div>
        </div>
      </section>

      <section className="w-full py-14 ">
        <p className="text-xs text-center text-gray-600">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <p className="mt-5 lg:w-[70%] mx-auto text-xs text-center text-gray-600">
          Products and features may not be available in all regions. Information
          is for or informational purposes only, and is not (i) an offer, or
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) intended to provide accounting, legal, or tax advice,
          or investment recommendations. Trading cryptocurrency comes with
          risk.{" "}
        </p>
      </section>
    </>
  );
};

export default Home;
