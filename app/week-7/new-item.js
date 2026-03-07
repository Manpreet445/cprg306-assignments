"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a random string for the ID
    const id = Math.random().toString(36).substring(2, 9);
    const item = { id, name, quantity, category };
    
    // Pass the item object up to the parent component
    onAddItem(item);

    // Reset the form state
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    // Keep your existing form JSX here! 
    // Just make sure your <form onSubmit={handleSubmit}> is wired up correctly.
    <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 max-w-sm w-full">
      {/* Your inputs for name, quantity, and category go here */}
      <button type="submit" className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        + Add Item
      </button>
    </form>
  );
}