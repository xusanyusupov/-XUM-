import MainCategory from "@/components/category/MainCategory"
import Hero from "@/components/hero/Hero"
import Location from "@/components/location/Location"

const Home = () => {
  return (
    <>
        <div className="flex flex-col">
          <Hero/>
          <MainCategory/>
          <Location/>
        </div>
    </>
  )
}

export default Home