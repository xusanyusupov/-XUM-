import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryDetail = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState<Meal[]>([]);
    const [count,setCount] = useState(8)
  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
        setMeals(res.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }
    fetchMeals();
  }, [name]);
  function handleNext(){
    setCount((prev) => prev + 8)
  }
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{name} Meals</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        
        {
          meals.slice(0,count).map((meal) => (
            <div key={meal.idMeal} className="border rounded-lg shadow hover:scale-105 transition">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-t-lg w-full" />
              <p className="p-2 text-center font-semibold">{meal.strMeal}</p>
            </div>
          ))
        }

        {
          count < meals.length && (
            <button onClick={handleNext}>Next Page</button>
          )
        }
      </div>
    </div>
    </>
  )
}

export default CategoryDetail