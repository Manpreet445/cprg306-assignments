// /app/week-3/page.js
import ItemList from './GroceryItemList';

export default function Page() {
  return (

    <main className="bg-black p-5 flex flex-col items-center">
      <div className="w-full max-w-lg"> 
        <h1 className="text-2xl font-bold text-white mb-3">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}