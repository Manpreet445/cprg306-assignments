export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      onClick={() => onSelect(name)}
      className="p-4 bg-black w-full border-2 border-white flex justify-between items-center transition-all hover:bg-white hover:text-black group cursor-pointer"
    >
      <h2 className="text-xl font-extrabold text-white group-hover:text-black uppercase tracking-wider">
        {name}
      </h2>
      <div className="text-sm font-extrabold text-black bg-white px-3 py-1 uppercase tracking-widest group-hover:bg-black group-hover:text-white border-2 border-white group-hover:border-black">
        {quantity} | {category}
      </div>
    </li>
  );
}