import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import WelcomeBanner from '../assets/decorate.jpg'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <NavBar />
      <img
        src={WelcomeBanner}
        alt="D & I"
        title="Decorate and Innovate"
        className=""
      />
      <Footer />
    </>
  );
}
