import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface MealDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<MealDetail | null>(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMeal();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg w-full max-w-md" />
      <p className="mt-4 text-lg"><strong>Category:</strong> {meal.strCategory}</p>
      <p className="text-lg"><strong>Area:</strong> {meal.strArea}</p>
      <p className="mt-4">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-4 block"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default ProductDetail;
