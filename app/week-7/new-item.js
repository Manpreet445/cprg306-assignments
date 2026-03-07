"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-slate-900 text-white max-w-sm w-full rounded-lg shadow-lg border border-slate-800">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md text-black bg-white outline-none" 
        />
      </div>

      <div className="flex items-center justify-between gap-2 mb-4">
        {/* Quantity Section*/}
        <div className="flex items-center bg-slate-800 rounded-lg p-2 border border-slate-700">
          <span className="text-white font-semibold mr-3 text-sm">Quantity: {quantity}</span>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={decrement}
              className="w-8 h-8 flex items-center justify-center bg-slate-600 text-white rounded-md hover:bg-slate-500 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={quantity === 1}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md text-black bg-white flex-1 text-sm outline-none"
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

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-md transition-all active:scale-95"
      >
        Add to List
      </button>
    </form>
  );
}