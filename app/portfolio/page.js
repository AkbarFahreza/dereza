"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function page() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`/api/portfolio`);
        const data = await response.json();
        const sortedItems = data[0].data.sort((a, b) => new Date(b.Datecreated) - new Date(a.Datecreated));
        setItems(sortedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  const filteredItems = category ? items.filter((item) => item.category === category) : items;

  const handleFilterChange = (category) => {
    setCategory(category);
  }

  return (
    <div>
      {/* <div className="flex flex-wrap gap-2">
        <button onClick={() => handleFilterChange('')} className={`${!category ? 'bg-gray-300' : ''} px-4 py-2`}>All</button>
        {Object.keys(items.reduce((acc, cur) => ({ ...acc, [cur.category]: true }), {})).map((category) => (
          <button key={category} onClick={() => handleFilterChange(category)} className={`${category === category ? 'bg-gray-300' : ''} px-4 py-2`}>{category}</button>
        ))}
      </div> */}
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <Image width={200} height={200} src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <Link className="cursor-pointer py-2 px-3 bg-mainColor rounded-md text-white font-bold" href={item.sourceLink}>Detail</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page;


