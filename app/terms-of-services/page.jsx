"use client";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const items = [
    {
      id: 1,
      date: "June 2024",
      desc: "Closed",
      wl: 5,
    },
    {
      id: 2,
      date: "July 2024",
      desc: "Selective",
      wl: 3,
    },
  ];
  return (
    <div className="flex flex-col align-top content-center relative w-auto px-[5vw] md:px-[10vw] h-screen">
      <span className="w-1 h-[80vh] hidden lg:block absolute bottom-0  left-1/2 border-l-2 border-dashed border-white"></span>
      <Image
        src="/commissions_title.svg"
        width={332}
        height={123}
        alt="alah mboh"
        className="scale-[65%] absolute top-2 left-1/2 -translate-x-1/2"
      />
      <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-[15vh] justify-between mt-[20vh]">
        <div className="w-full md:w-6/12">
          <h3 className="font-kaushan text-2xl font-bold text-secondaryColor mb-3">
            Commissions Status
          </h3>
          {items.map((status) => (
            <div className="relative ml-10 pt-5">
              <span className="w-1 absolute -top-1 -left-4 h-[20px] border-l-2 border-l-white border-dotted"></span>
              <span className="w-1 absolute bottom-0 -left-4 h-[50%] border-l-2 border-l-white border-dotted"></span>

              <div className="relative">
                <Image
                  src="/sparkle.svg"
                  alt="sparkle"
                  width={18}
                  height={20}
                  className="absolute top-1/2 -translate-y-1/2 -left-6"
                />
                <p className="text-mainColor font-bold text-xl  mb-1">
                  {status.date}
                </p>
              </div>
              <div className="ml-5">
                <p className="text-base font-bold mb-1">{status.desc}</p>
                <p className="text-sm mb-1">Waiting List [{status.wl}]</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-6/12 pb-[5vh] md:pb-0">
          <MenuButton />
        </div>
      </div>
    </div>
  );
}

export default page;

export function MenuButton() {
  const [activeMenu, setActiveMenu] = useState("priceList");

  return (
    <div>
      <div className="flex flex-row space-x-3">
        <Button
          Button_text="Price List"
          On_Click={() => setActiveMenu("priceList")}
          isActive={activeMenu === "priceList"}
        />
        <Button
          Button_text="Terms Of Services"
          On_Click={() => setActiveMenu("termsOfServices")}
          isActive={activeMenu === "termsOfServices"}
        />
      </div>
      {activeMenu === "priceList" && <PriceList />}
      {activeMenu === "termsOfServices" && <div>Term of Services Content</div>}
    </div>
  );
}

export function Button({ Button_text, On_Click, isActive }) {
  return (
    <button
      onClick={On_Click}
      className={`py-1 px-3 text-sm font-bold  border-[1px] border-mainColor rounded-[4px] hover:border-secondaryColor transition-all duration-200 ${
        isActive ? "bg-mainColor" : "bg-transparent"
      }`}
    >
      {Button_text}
    </button>
  );
}

export function PriceList() {
  const [activePrice, setActivePrice] = useState("USD");

  const LastUpdate = "10 June 2024";
  const BasicIDR = "100K";
  const BasicUSD = "25";
  const FullIDR = "200K";
  const FullUSD = "35";
  return (
    <div className="mt-6">
      <div>
        <div className="flex flex-row justify-between">
          <h3 className="font-kaushan text-secondaryColor text-2xl">
            Price List
          </h3>
          <div className="flex items-center mt-4">
            <span className="text-xs font-medium mr-2">IDR</span>
            <label
              htmlFor="toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="toggle"
                className="sr-only peer"
                checked={activePrice === "USD"}
                onChange={() =>
                  setActivePrice(activePrice === "IDR" ? "USD" : "IDR")
                }
              />
              <div className="w-9 h-4 bg-transparent border-[1px] border-white rounded-full peer  peer-checked:bg-mainColor after:content-[''] after:absolute  after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5 after:-translate-y-1/2 after:top-1/2"></div>
            </label>
            <span className="text-xs font-medium ml-2">USD</span>
          </div>
        </div>
        <p className="  text-[#969494] text-[10px] font-bold mt-1">
          Update at : {LastUpdate}
        </p>
      </div>
      <div id="Basic_Package" className="mt-[10px] pt-4 ml-6 relative w-auto">
        <span className="w-1 absolute -top-1 -left-4 h-[20px] border-l-2 border-l-white border-dotted"></span>
        <div className="flex flex-row justify-between relative">
          <Image
            src="/sparkle.svg"
            alt="sparkle"
            width={18}
            height={20}
            className="absolute top-1/2 -translate-y-1/2 -left-6"
          />
          <p className="text-xl font-bold text-mainColor">Basic Package</p>
          <div className="flex flex-row">
            {activePrice === "USD" && (
              <div className="flex flex-row align-text-bottom items-end font-bold">
                <p className="text-[10px]">USD</p>
                <span className="text-[14px]">{BasicUSD}</span>
              </div>
            )}
            {activePrice === "IDR" && (
              <div className="flex flex-row align-text-bottom items-end font-bold">
                <p className="text-[10px]">IDR</p>
                <span className="text-[14px]">{BasicIDR}</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-1">
          <div className="relative pl-5">
            <Image
              src="/green-check.svg"
              width={13}
              height={11}
              alt="check"
              className="absolute top-[6px] left-0"
            />
            <p className="text-base font-medium">General Chat</p>
            <p className="text-xs">
              Chat from viewer, Moderator, member, and owner
            </p>
          </div>
        </div>
        <div className="mt-1">
          <div className="relative pl-5">
            <Image
              src="/red-x.svg"
              width={11}
              height={11}
              alt="check"
              className="absolute top-[6px] left-0"
            />
            <p className="text-base font-medium text-gray-400">Event Chat</p>
            <p className="text-xs text-gray-400">
              Event chat style will be Youtube default for this package
            </p>
          </div>
        </div>
      </div>
      <div id="Full_Package" className="mt-[10px] pt-4 ml-6 relative w-auto">
        <span className="w-1 absolute -top-1 -left-4 h-[20px] border-l-2 border-l-white border-dotted"></span>
        <div className="flex flex-row justify-between relative">
          <Image
            src="/sparkle.svg"
            alt="sparkle"
            width={18}
            height={20}
            className="absolute top-1/2 -translate-y-1/2 -left-6"
          />
          <p className="text-xl font-bold text-mainColor">Full Package</p>
          <div className="flex flex-row">
            {activePrice === "USD" && (
              <div className="flex flex-row align-text-bottom items-end font-bold">
                <p className="text-[10px]">USD</p>
                <span className="text-[14px]">{FullUSD}</span>
              </div>
            )}
            {activePrice === "IDR" && (
              <div className="flex flex-row align-text-bottom items-end font-bold">
                <p className="text-[10px]">IDR</p>
                <span className="text-[14px]">{FullIDR}</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-1">
          <div className="relative pl-5">
            <Image
              src="/green-check.svg"
              width={13}
              height={11}
              alt="check"
              className="absolute top-[6px] left-0"
            />
            <p className="text-base font-medium">General Chat</p>
            <p className="text-xs">
              Chat from viewer, Moderator, member, and owner
            </p>
          </div>
        </div>
        <div className="mt-1">
          <div className="relative pl-5">
            <Image
              src="/green-check.svg"
              width={13}
              height={11}
              alt="check"
              className="absolute top-[6px] left-0"
            />
            <p className="text-base font-medium">Event Chat</p>
            <p className="text-xs">
              Superchat, Membership Join and Achivement, Member gift, and
              superstciker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
