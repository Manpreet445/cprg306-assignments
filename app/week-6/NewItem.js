"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const id = Math.random().toString(36).substring(2, 9);
    const item = { id, name, quantity, category };
    
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mb-8 bg-black text-white max-w-sm w-full mx-auto rounded-xl shadow-2xl border border-gray-800"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Add New Item</h2>
      
      {/* Name Field */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          // Black background for inputs
          className="w-full p-2 rounded-full bg-black border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition"
        />
      </div>

      {/* Quantity and Category Row */}
      <div className="flex gap-4">
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-24 p-2 rounded-full bg-black border border-white-600 text-white focus:ring-2 focus:ring-white focus:outline-none transition"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-3 rounded-full bg-black border border-white-600 text-white focus:ring-2 focus:ring-white focus:outline-none transition"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-6 py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-full shadow-lg active:scale-95 transition-all duration-200 text-xl"
      >
        + Add
      </button>
    </form>
  );
}