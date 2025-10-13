import MainCategory from "@/components/category/MainCategory"
import Hero from "@/components/hero/Hero"

const Home = () => {
  return (
    <>
        <div className="flex flex-col">
          <Hero/>
          <MainCategory/>
        </div>
    </>
  )
}

export default Home