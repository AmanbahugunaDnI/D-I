import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Service1 from '../assets/service01.jpg';
import Service2 from '../assets/service02.jpg';
import Service3 from '../assets/service03.jpg';
import Service4 from '../assets/service04.jpg';
import { Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <NavBar />
      <div className="relative welcome-page bg-center bg-cover bg-no-repeat h-136 d-flex flex-column">
        <div className='text-center text-3xl sm:text-5xl pt-32 font-bold '>
          Home Services, on demand!
        </div>
        <div className='text-center text-2xl sm:text-3xl mt-28 text-blue-500 italic font-bold '>
          Explore services!
        </div>
      </div>
      <div className="justify-between py-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4 mt-20 mb-40">
        <Link href={route('customer.index')}>
          <img
            src={Service1}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('customer.index')}>
          <img
            src={Service2}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('customer.index')}>
          <img
            src={Service3}
            alt="D & I"
            title="Decorate and Innovate"
            className="h-36 hover:scale-105"
          />
        </Link>
        <Link href={route('customer.index')}>
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
