"use client";

import { useState } from "react";
import NewItem from "./newitem";
import ItemList from "./item-list";
import itemsData from "./items.json"; 

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      
      {/* Pass the handler */}
      <div className="mb-4">
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/* Pass the items state */}
      <ItemList items={items} />
    </main>
  );
}