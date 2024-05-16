import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Homepagepic from "../assets/pexels-ella-olsson-572949-1640777.jpg";
import { Link } from "react-router-dom";
import HeroSection from "../components/Herosection";
import RandomRecipe from "../components/RandomRecipe";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardSection/>
      <RandomRecipe />
    </div>
  );
};
export default Home;
