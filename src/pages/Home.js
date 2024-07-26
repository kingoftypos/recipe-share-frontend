import HeroSection from "../components/Herosection";
import RandomRecipe from "../components/RandomRecipe";
import RecipeCard from "../components/RecipeCard";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <RandomRecipe />

      <br />
      <br />
      <RecipeCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSQJSmQVeio2pPEKoLEuQEqNO4SdP9g1cFkhXtz1RWQ&s">
        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSQJSmQVeio2pPEKoLEuQEqNO4SdP9g1cFkhXtz1RWQ&s */}
        <h3 className="text-xl font-bold mb-2"> Spicy Tomato Recipe</h3>
        <p>
          Tomato rice, or tomato biryani, is a special type of spiced rice
          traditionally cooked in South India.
        </p>
        <div className="space-x-4 mt-4">
          <button className="social-media-btn ">
            <FaRegHeart className="icon" />
          </button>
          <button className="social-media-btn">
            <CiBookmark className="icon" />
          </button>
          <button className="social-media-btn ">
            <FaShareAlt className="icon" />
          </button>
        </div>
      </RecipeCard>
    </div>
  );
};
export default Home;
