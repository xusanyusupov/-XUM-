import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category{
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}
const MainCategory = () => {
  const [data,setData] = useState<Category[]>([])
  const [itemsToShow,setItemsToShow] = useState(5)
  const [isMobile,setIsMobile] = useState(window.innerWidth < 1300)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        console.log(res)
        setData(res.data.categories)
      } catch (error) {
        console.log('axios error',error)
      }
    }
    fetchData()
    const windowWidth = () => (setIsMobile(window.innerWidth < 1300))
    window.addEventListener('resize',windowWidth)
    return () => window.removeEventListener('resize',windowWidth)
  },[])

  function handleNext() {
    setItemsToShow((prev) => prev + 5)
  }
  function handleLess() {
    setItemsToShow((prev) => prev - 5)
  }

  return (
    <div className="container max-3xl:mt-96 max-xl:min-w-full max-xl:w-full max-md:mt-60 max-xs:mt-24">
      <span className="inter flex justify-center text-6xl font-bold pb-16 whitespace-nowrap max-sm:pl-5 max-sm:text-4xl">All food categories</span>
      <div className="w-full grid grid-cols-7 gap-5 place-items-center max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-0">
        {
          (isMobile ? data.slice(0,itemsToShow): data).map((el) => (
            <Link
            to={`/detail/${el.strCategory}`}
            key={el.idCategory}
            className="w-48 flex flex-col items-center rounded-lg hover:scale-105 transition overflow-hidden max-sm:w-40"
          >
            <img src={el.strCategoryThumb} alt={el.strCategory} className="rounded-full w-40 h-40 object-contain bg-secondary hover:bg-mainColor max-sm:w-32 max-sm:h-32" />
            <p className="p-2 inter font-bold">{el.strCategory}</p>
          </Link>
          ))
        }
      </div>
      <div className='flex justify-center mt-10 gap-5'>
      {
        isMobile && itemsToShow < data.length && (
            <button 
              onClick={handleNext}
              className="bg-mainColor text-secondary border border-mainColor px-10 py-2 rounded-xl hover:bg-secondary hover:text-mainColor">
                More
            </button>
        )
      }
      {
        isMobile && itemsToShow > 5 && (
          <button 
          className="bg-secondary text-mainColor border border-mainColor px-10 py-2 rounded-xl"
          onClick={handleLess}
          >Less
          </button>
        )
      }
      </div>
    </div>
  );
};

export default MainCategory;





