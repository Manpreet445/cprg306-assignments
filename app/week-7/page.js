"use client";

import { useState } from "react";
import NewItem from "./new-item"; 
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center uppercase tracking-widest border-b-4 border-white pb-2 w-full max-w-sm">
          Shopping List
        </h1>
        
        <div className="mb-8 w-full flex justify-center">
          <NewItem onAddItem={handleAddItem} />
        </div>
        
        <div className="w-full flex justify-center">
          <ItemList items={items} />
        </div>
        
      </div>
    </main>
  );
}