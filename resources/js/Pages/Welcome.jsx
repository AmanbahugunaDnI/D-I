import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Service1 from '../assets/service01.jpg';
import Service2 from '../assets/service02.jpg';
import Service3 from '../assets/service03.jpg';
import Service4 from '../assets/service04.jpg';
import Floors from '../assets/floors_and_tiles.jpeg';
import HomeRepairs from '../assets/home_repairs.jpeg';
import MetalWorks from '../assets/metal_works.jpeg';
import ModularKitchen from '../assets/modular_kitchen.jpeg';
import PestControl from '../assets/pest_control.jpeg';
import WallpaperInstallation from '../assets/wallpaper_installation.jpeg';
import { Link } from '@inertiajs/react';
import Carousel from '../assets/decorate.jpg'
import Carousel01 from '../assets/carousel01.jpg';
import Carousel02 from '../assets/carousel02.jpg';
import Carousel03 from '../assets/carousel03.jpg';
import React from "react";

export default function Welcome() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [
    { value: Carousel03 },
    { value: Carousel01 },
    { value: Carousel },
    { value: Carousel02 },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const captions = [
    "D&I Services",
    "D&I Services",
    "D&I Services",
    "D&I Services"
  ];


  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 7000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <NavBar />
      <div className="relative h-136">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              className="h-full w-full object-cover"
              src={image.value}
              alt={`Image ${index + 1}`}
            />
            <div className="absolute inset-0 flex justify-center items-center ">
              <div className="bg-transparent bg-opacity-50 px-4 py-2 ">
                <h2 className="text-white text-3xl">{captions[index]}</h2>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 w-full flex justify-center">
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-white"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-white shadow max-w-7xl md:w-480 rounded-lg mx-auto px-4 mt-8 p-12 sm:px-6 lg:px-8 mb-20'>
        <div className='text-center text-2xl mb-12 italic font-semibold'>
          Checkout our services...
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <Link href={route('book.index')}>
            <img
              src={Floors}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'> Hardwood floors & tiles installation & refinishing</div>
          </Link>
          <Link href={route('book.index')}>
            <img
              src={HomeRepairs}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'>Home building and repairs</div>
          </Link>
          <Link href={route('book.index')}>
            <img
              src={MetalWorks}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'>Metal Works</div>
          </Link>
          <Link href={route('book.index')}>
            <img
              src={ModularKitchen}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'>Modular Kitchen Service</div>
          </Link>
          <Link href={route('book.index')}>
            <img
              src={PestControl}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'>Pest Control Services</div>
          </Link>
          <Link href={route('book.index')}>
            <img
              src={WallpaperInstallation}
              alt="D & I"
              title="Decorate and Innovate"
              className="h-96 w-96 hover:scale-105"
            />
            <div className='text-xl font-semibold text-center italic text-blue-400 hover:underline mt-4'>Wallpaper & contact paper installation</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
