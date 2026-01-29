// /app/week-3/GroceryItem.js
export default function Item({ name, quantity, category }) {
  return (
    // 'border-white' and 'border' create the thin outline
    // 'p-2' makes the box short
    // 'text-left' ensures the text doesn't center
    <li className="p-2 mb-2 bg-black border border-white w-full rounded-sm list-none text-left">
      <h2 >{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}