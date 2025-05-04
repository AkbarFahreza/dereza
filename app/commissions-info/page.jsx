"use client";
import PriceList from "@/components/comms-info/Price_List";
import Term_Of_Services from "@/components/comms-info/Term_Of_Services";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const items = [
    {
      id: 1,
      date: "May 2025",
      desc: "Closed",
    },
    {
      id: 2,
      date: "June 2025",
      desc: "Selective",
    },
  ];
  return (
    <div className="flex flex-col align-top content-center relative w-auto px-[5vw] md:px-[5vw] h-screen">
      <span className="w-1 h-[80vh] hidden lg:block absolute bottom-0  left-1/2 border-l-2 border-dashed border-white"></span>
      <Image
        src="/commissions_title.svg"
        width={332}
        height={123}
        alt="alah mboh"
        className="scale-[65%] absolute top-2 left-1/2 -translate-x-1/2"
      />
      <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-[15vh] justify-between mt-[20vh]">
        <div className="w-full md:w-6/12 flex flex-col">
          <h3 className="font-kaushan text-2xl font-bold text-secondaryColor mb-3">
            Commissions Status
          </h3>
          <div className="mb-4">
            {items.map((status) => (
              <div className="relative ml-10 pt-5" key={status.id}>
                <span className="w-1 absolute -top-1 -left-4 h-[20px] border-l-2 border-l-white border-dotted"></span>
                <span className="w-1 absolute -bottom-1 -left-4 h-[50%] border-l-2 border-l-white border-dotted"></span>

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
                  <p className="text-base font-bold pb-3">{status.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/commissions-info/waiting-list"
            className="typograph-subtext hover:text-mainColor transition-all duration-200 font-bold text-secondaryColor "
          >
           See Waiting Lists &gt;
          </Link>
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
      {activeMenu === "termsOfServices" && <Term_Of_Services />}
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
