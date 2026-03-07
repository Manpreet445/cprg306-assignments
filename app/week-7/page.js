"use client";
import { useState } from 'react';
import NewItem from './new-item'; // Adjust to NewGroceryItem if that's your exact filename
import ItemList from './item-list'; // Adjust to GroceryItemList if that's your exact filename
import itemsData from './grocery-items.json';

export default function Page() {
  // Initialize state with the data from the JSON file
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the state
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}