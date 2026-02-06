import Item from "./item";
import items from "./items.json";

export default function ItemList() {
 
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});


  const categories = Object.keys(groupedItems).sort();

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-bold capitalize">{category}</h3>
          
        
          <ul className="list-disc list-inside ml-4">
            {groupedItems[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}