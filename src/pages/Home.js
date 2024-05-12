import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Homepagepic from '../assets/pexels-ella-olsson-572949-1640777.jpg';



export default function Home() {
  

  return (
    <section className="text-gray-600 body-font bg-orange-50">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
                <br className="hidden lg:inline-block"/>Discover Simple<br/> Delicious and <br/> <span style={{color:'orange'}}>Fast Recipe</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg">A Recipe is Soulless. The essence of Recipe<br/> must come from you. The Cook</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore</button>
            </div>
        </div>
        <div className="lg:max-w-7/8 lg:w-7/8 md:w-5/6 w-7/8 " >
            <img className="object-cover object-center rounded" alt="hero" src={Homepagepic}/>
        </div>
    </div>
</section>

  )
}
