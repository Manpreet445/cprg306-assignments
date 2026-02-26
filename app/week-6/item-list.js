"use client";
import { useState } from "react";
import Item from "./item"; 

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const activeStyle = "bg-white text-black";

  const inactiveStyle = "bg-gray-800 text-white hover:bg-gray-700";

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <span className="font-bold text-lg text-white">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${sortBy === "name" ? activeStyle : inactiveStyle}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${sortBy === "category" ? activeStyle : inactiveStyle}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${sortBy === "group" ? activeStyle : inactiveStyle}`}
        >
          Grouped Category
        </button>
      </div>

      {sortBy === "group" ? (
        Object.entries(
          items.reduce((acc, item) => {
            const cat = item.category;
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
          }, {})
        )
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([category, categoryItems]) => (
          <div key={category} className="mb-6 text-white">
            <h3 className="text-xl font-bold capitalize mb-2">{category}</h3>
            <ul className="list-disc list-inside ml-2">
              {categoryItems
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="list-disc list-inside text-white">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}