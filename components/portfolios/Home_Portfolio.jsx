"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Home_Portfolio() {
  const [items, setItems] = useState([]);
  const [originalDataLength, setOriginalDataLength] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOriginalDataLength(data[0].data.length);
        const commissionItems = data[0].data.filter(
          (item) => item.category === "YT Chat Commissions"
        );
        const sortedCommissionItems = commissionItems.sort(
          (a, b) => b.id - a.id
        );
        const top4CommissionItems = sortedCommissionItems.slice(0, 4);

        setItems(top4CommissionItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  const Skeleton = () => (
    <div className="flex flex-col shrink-0 min-w-[200px] p-3 rounded-lg border-[1px] border-mainColor lg:pb-4">
      <div className="w-[200px] h-[200px] bg-gray-300 animate-pulse rounded-md"></div>
      <div className="mt-2 flex flex-col space-y-2">
        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div id="portfolio" className="mt-5 max-w-[90vw]">
      <div className="my-1 flex flex-row justify-between">
        <div className="flex flex-row space-x-2">
          <h3 className="font-kaushan text-xl">Portfolios</h3>
          <p className="text-xs font-bold border-2 rounded-full border-white py-1 px-2">
            {loading ? "..." : originalDataLength - 4}+
          </p>
        </div>
        <Link
          href="/portfolio"
          className="py-1 px-3 hover:bg-mainColor transition-all duration-100 rounded-full border-white border-2 text-xs"
        >
          More
        </Link>
      </div>
      <div className="mt-4 py-3 flex flex-row space-x-4 lg:space-x-5 whitespace-nowrap overflow-x-scroll md:overflow-visible pb-2">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          items.map((item) => (
            <Link
              href={item.sourceLink}
              key={item.id}
              className="flex flex-col shrink-0 min-w-[200px] py-5 px-3 bg-ghostColor rounded-lg lg:pb-4 hover:shadow-lg cursor-pointer hover:shadow-mainColor/30 transition-all duration-200"
            >
              <Image
                width={200}
                height={200}
                alt={item.image}
                className="w-[200px] h-auto rounded-md "
                src={item.image}
              />
              <div className="mt-2 flex flex-col space-y-2">
                <h1 className="font-bold mobile-title-b text-white .typograph-subtext">
                  {item.name}
                </h1>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home_Portfolio;
