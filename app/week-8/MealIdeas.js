"use client";
import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);


  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }


  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-black text-white border-4 border-white p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold mb-6 uppercase tracking-widest text-center border-b-2 border-white pb-2">
        Meal Ideas {ingredient ? `for ${ingredient}` : ""}
      </h2>
      
      {ingredient === "" ? (
        <p className="text-center font-bold uppercase tracking-widest text-gray-400">Select an item to see ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-center font-bold uppercase tracking-widest text-gray-400">No meals found for {ingredient}</p>
      ) : (
        <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {meals.map((meal) => (
            <li 
              key={meal.idMeal} 
              className="p-2 border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center gap-4 group"
            >
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className="w-16 h-16 object-cover border-2 border-transparent group-hover:border-black" 
              />
              <span className="font-extrabold uppercase tracking-wider text-sm">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}