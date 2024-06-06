"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function HomeGuide() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/guide");
        const data = await response.json();
        setItems(data[0].data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  const Skeleton = () => (
    <div className="rounded-lg shrink-0 max-w-[238px] animate-pulse">
      <div className="bg-gray-300 rounded-[5px] w-[238px] h-[142px]"></div>
      <div className="mt-3 space-y-3">
        <div className="bg-gray-400 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-500 h-3 w-1/4 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="pt-4 flex flex-row max-w-[90vw]  space-x-5 align-middle overflow-x-scroll no-scrollbar pb-2 ">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} />)
        : items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg shrink-0 max-w-[238px] hover:-translate-y-2 transition-all duration-200"
            >
              <Link href={`/guide/${item.params}`}>
                <div className="flex flex-col items-start">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={238}
                    height={142}
                    className="rounded-[5px] w-[238px] h-[142px]"
                    unoptimized
                  />
                  <div className="flex flex-col space-y-3 mt-3">
                    <h1 className="text-xs lg:text-sm font-medium text-white">
                      {item.title}
                    </h1>
                    <span
                      className={`py-[2px] px-2 text-xs w-fit rounded-full font-bold ${
                        item.type === "Source Code"
                          ? "text-[#0F0F15] bg-[#94F5AF]"
                          : "bg-[#262630] text-white"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
}

export default HomeGuide;
