"use client";

import { useState } from "react";
import NewItem from "./new-item"; 
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {

    let cleanedName = itemName.split(',')[0].trim();
    

    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center uppercase tracking-widest border-b-4 border-white pb-2 w-full max-w-3xl">
        Shopping List
      </h1>
        

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 justify-center items-start">
        

        <div className="flex-1 w-full flex flex-col items-center">
          <div className="mb-8 w-full flex justify-center">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <div className="w-full flex justify-center">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>


        <div className="flex-1 w-full flex justify-center sticky top-8">
          <MealIdeas ingredient={selectedItemName} />
        </div>
        
      </div>
    </main>
  );
}