"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item"; 
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user?.uid]);

  if (!isClient) {
    return null;
  }

  if (!user) {
    return (
      <main className="bg-black min-h-screen p-8 flex flex-col items-center justify-center font-sans text-white">
        <p className="text-xl mb-4 text-gray-300">You must be logged in to view this page.</p>
        <Link href="/week-10" className="text-white hover:text-gray-300 underline transition-colors">
          Go back to Login
        </Link>
      </main>
    );
  }

  const handleAddItem = async (newItem) => {
    if (user) {
      const newId = await addItem(user.uid, newItem);
      const itemWithId = { ...newItem, id: newId };
      setItems((prevItems) => [...prevItems, itemWithId]);
    }
  };

  const handleItemSelect = (itemName) => {
    let cleanedName = itemName.split(',')[0].trim();
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center font-sans text-white">
      <div className="w-full max-w-6xl flex justify-between items-center mb-8 border-b-4 border-white pb-2">
        <h1 className="text-4xl font-extrabold text-white uppercase tracking-widest text-left">
          Shopping List
        </h1>
        <button 
          onClick={firebaseSignOut}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 transition-colors"
        >
          Sign Out
        </button>
      </div>
        
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