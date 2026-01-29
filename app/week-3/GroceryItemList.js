import Item from './GroceryItem.js';

export default function ItemList() {
const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "Dairy",
};
 
const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "Bakery",
};
 
const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "Dairy",
};
 
const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "Produce",
};
 
const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "Produce",
};
 
const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "Meat",
};
 
const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "Canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "Dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "Household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "Household",
};
 
const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "Household",
};
 
const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "Household",
};

  return (
    <ul>
      <Item name={item1.name} quantity={item1.quantity} category={item1.category} />
      <Item name={item2.name} quantity={item2.quantity} category={item2.category} />
      <Item name={item3.name} quantity={item3.quantity} category={item3.category} />
      <Item name={item4.name} quantity={item4.quantity} category={item4.category} />
      <Item name={item5.name} quantity={item5.quantity} category={item5.category} />
      <Item name={item6.name} quantity={item6.quantity} category={item6.category} />
      <Item name={item7.name} quantity={item7.quantity} category={item7.category} />
      <Item name={item8.name} quantity={item8.quantity} category={item8.category} />
      <Item name={item9.name} quantity={item9.quantity} category={item9.category} />
      <Item name={item10.name} quantity={item10.quantity} category={item10.category} />
      <Item name={item11.name} quantity={item11.quantity} category={item11.category} />
      <Item name={item12.name} quantity={item12.quantity} category={item12.category} />
    </ul>
  );
}