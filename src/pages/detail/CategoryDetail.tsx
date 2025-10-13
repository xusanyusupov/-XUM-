import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryDetail = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState<Meal[]>([]);
    const [count,setCount] = useState(8)
    const [isMobile,setIsMobile] = useState(window.innerWidth < 1300)
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
    const handleResize = () => (setIsMobile(window.innerWidth < 1300))
    window.addEventListener('resize',handleResize)
    return () => window.addEventListener('resize',handleResize)
  }, [name]);
  
  function handleNext(){
    setCount((prev) => prev + 8)
  }
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{name} Meals</h1>
      <div className={`grid place-items-center gap-5 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1`}>
        
        {
          meals.slice(0,count).map((meal) => (
              <div key={meal.idMeal} className="border border-hLinkHover/10 rounded-lg px-3 py-2 max-sm:w-full">

              <div className={`h-64 rounded-lg ${ isMobile ? "w-72 max-[670px]:w-64 max-sm:w-full" : "w-80" } max-lg:w-72 max-lg:h-60`} >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={meal.strMealThumb}
                  alt=""
                />
              </div>


                <p className="py-2 inter font-bold">{meal.strMeal}</p>
                <p className="inter ">$26</p>
                <div className="flex flex-col gap-3">

                  <div className="flex items-center justify-center gap-3">
                    <button className="w-full flex items-center justify-center h-10 px-4 bg-mainColor text-secondary inter rounded-lg whitespace-nowrap">
                      <Link to={`/meal/${meal.idMeal}`}>View on food</Link> 
                    </button>
                    <button className="w-full flex items-center justify-center h-10 px-4 bg-mainColor text-secondary inter rounded-lg">
                      <FaHeart/>
                    </button>
                  </div>

                  <button className="h-12 px-4 bg-[#d8d4d4] rounded-lg">Install App</button>

                </div>
              </div>            
          ))
        }

      </div>

        <div className="w-full flex items-center justify-center mt-20">
        {
          count < meals.length && (
            <button onClick={handleNext} className="bg-mainColor text-secondary px-8 py-3 rounded-xl">Next Page</button>
          )
        }
        </div>

    </div>
    </>
    
  )
}

export default CategoryDetail




{/* <div key={meal.idMeal} className="border rounded-lg shadow hover:scale-105 transition">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-t-lg w-full" />
              <p className="p-2 text-center font-semibold">{meal.strMeal}</p>
            </div> */}