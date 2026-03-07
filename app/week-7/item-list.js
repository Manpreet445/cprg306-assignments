"use client";
import { useState } from 'react';
import Item from './item'; // Adjust to GroceryItem if that's your exact filename

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a copy of the items array before sorting to avoid mutating the prop
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex mb-4 items-center">
        <label className="mr-4 text-white">Sort by:</label>
        <button 
          onClick={() => setSortBy("name")} 
          className={`px-4 py-2 mr-2 ${sortBy === "name" ? "bg-orange-500" : "bg-orange-700"} text-white`}
        >
          Name
        </button>
        <button 
          onClick={() => setSortBy("category")} 
          className={`px-4 py-2 ${sortBy === "category" ? "bg-orange-500" : "bg-orange-700"} text-white`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}