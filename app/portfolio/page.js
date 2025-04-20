"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

function page() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`/api/portfolio`);
        const data = await response.json();
        const sortedItems = sortItemsByDate(data[0].data, sortOrder);
        setItems(sortedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, [sortOrder]);

  const sortItemsByDate = (items, order) => {
    return items.sort((a, b) => {
      const dateA = new Date(a.Datecreated);
      const dateB = new Date(b.Datecreated);
      return order === "latest" ? dateB - dateA : dateA - dateB;
    });
  };

  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "latest" ? "oldest" : "latest"));
  };

  // const filteredItems = category
  //   ? items.filter((item) => item.category === category)
  //   : items;

  // const handleFilterChange = (category) => {
  //   setCategory(category);
  // };

  return (
    <div className="px-4 md:px-6">
      {/* <div>
        <button
          onClick={() => handleFilterChange("")}
          className={`${!category ? "bg-gray-300" : ""} px-4 py-2`}
        >
          All
        </button>
        {Object.keys(
          items.reduce((acc, cur) => ({ ...acc, [cur.category]: true }), {})
        ).map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`${
              category === category ? "bg-gray-300" : ""
            } px-4 py-2`}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="flex flex-row justify-between h-full">
        <div className="flex flex-row space-x-2 pb-4">
          <h3 className="font-kaushan text-xl">Portfolios</h3>
          <p className="text-xs align-middle font-bold border-2 rounded-full border-white py-1 px-2">
            {items.length + 1}
          </p>
        </div>
        <button
          onClick={handleSortToggle}
          className="flex mt-[3] gap-2 p-0 border-none"
        >
          {sortOrder === "latest" ? (
            <div className="flex flex-row justify-start mr-4">
              <p className="text-sm font-bold">Latest</p>
              <FaSortDown />
            </div>
          ) : (
            <div className="flex flex-row justify-start content-center mr-4">
              <p className="text-sm font-medium">Oldest</p>
              <FaSortUp />
            </div>
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border-mainColor border-2 rounded-md p-4 flex flex-col items-center justify-center"
          >
            <Image width={300} height={300} src={item.image} alt={item.name} />
            <div className="flex flex-row justify-between items-center w-full px-4 pt-4">
              <h1 className="py-2 font-bold">{item.name}</h1>
              <Link
                className="cursor-pointer py-1 px-3 bg-mainColor hover:bg-mainColor/80 transition-all duration-200 rounded-md hover:shadow-lg hover:shadow-mainColor/45 text-white font-bold"
                href={item.sourceLink}
              >
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
