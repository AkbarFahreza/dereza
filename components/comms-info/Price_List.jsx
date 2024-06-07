"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PriceList() {
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
