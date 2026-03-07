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

  // Strict high contrast styles
  const activeStyle = "bg-white text-black border-2 border-white";
  const inactiveStyle = "bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors";

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
        <span className="font-extrabold text-lg text-white uppercase tracking-widest">Sort:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 font-extrabold uppercase tracking-widest ${sortBy === "name" ? activeStyle : inactiveStyle}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 font-extrabold uppercase tracking-widest ${sortBy === "category" ? activeStyle : inactiveStyle}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 font-extrabold uppercase tracking-widest ${sortBy === "group" ? activeStyle : inactiveStyle}`}
        >
          Group
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
          <div key={category} className="mb-8 w-full">
            <h3 className="text-2xl font-extrabold uppercase tracking-widest text-white border-b-2 border-white mb-4 pb-1">
              {category}
            </h3>
            <ul className="space-y-4 w-full">
              {[...categoryItems]
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
        <ul className="space-y-4 w-full">
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