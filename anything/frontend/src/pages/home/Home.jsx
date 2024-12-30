import Hero from "../../components/Hero"
import CategoryWarpper from "../category/CategoryWarpper"
import AboutSection from "./AboutSection"
import CompanyLogo from "./CompanyLogo"
import FeaturedSection from "./FeaturedSection"
import LatestRecipe from "./LatestRecipe"
import NewsLatter from "./NewsLatter"
import Subscription from "./Subscription"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
      <Hero/>
      <CategoryWarpper/>
      </div>

      {/* other components */}
      <FeaturedSection />
      <LatestRecipe />
      <NewsLatter />
      <AboutSection />
      <CompanyLogo />
      <Subscription />
    </div>
  )
}

export default Home