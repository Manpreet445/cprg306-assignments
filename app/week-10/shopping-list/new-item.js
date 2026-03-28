"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mb-8 bg-black text-white max-w-sm w-full mx-auto border-4 border-white"
    >
      <h2 className="text-2xl font-extrabold mb-6 text-center uppercase tracking-widest">Add Item</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="ITEM NAME"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-black border-2 border-white text-white placeholder-white focus:bg-white focus:text-black focus:outline-none uppercase font-bold transition-colors"
        />
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-24 p-3 bg-black border-2 border-white text-white focus:bg-white focus:text-black focus:outline-none font-bold transition-colors text-center"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-3 bg-black border-2 border-white text-white focus:bg-white focus:text-black focus:outline-none uppercase font-bold transition-colors cursor-pointer"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-3 bg-white hover:bg-black hover:text-white border-2 border-white text-black font-extrabold uppercase tracking-widest transition-colors duration-200 text-xl"
      >
        + ADD
      </button>
    </form>
  );
}