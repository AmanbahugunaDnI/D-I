import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Service1 from '../assets/service01.jpg';
import Service2 from '../assets/service02.jpg';
import Service3 from '../assets/service03.jpg';
import Service4 from '../assets/service04.jpg';
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

        <div className='text-center text-3xl sm:text-5xl pt-32 font-bold '>
          Home Services, on demand!
        </div>
        <div className='text-center text-2xl sm:text-3xl mt-28 text-blue-500 italic font-bold '>
          Explore services!
        </div>
      </div>
      <div className="justify-between py-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4 mt-20 mb-40">
        <Link href={route('book.index')}>
          <img
            src={Service1}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('book.index')}>
          <img
            src={Service2}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('book.index')}>
          <img
            src={Service3}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('book.index')}>
          <img
            src={Service4}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}
