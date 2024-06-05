"use client";
import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col  align-top content-center relative w-auto px-[5vw] md:px-[10vw] h-screen">
      <span className="w-1 h-[75vh] hidden lg:block absolute bottom-0 left-1/2 border-l-2 border-dashed border-white"></span>
      <Image
        src="/commissions_title.svg"
        width={332}
        height={123}
        alt="alah mboh"
        className="scale-[65%] absolute top-5 left-1/2 -translate-x-1/2"
      />
      <div className="flex flex-col md:flex-row justify-between mt-[20vh]">
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
        <div className="w-6/12">Price List</div>
      </div>
    </div>
  );
}

export default page;
