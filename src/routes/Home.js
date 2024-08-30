import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Image from "../assets/12.jpg";

function Home() {
  return (
    <>
    <Navbar/>
     <Hero
    cName="hero"
    heroImg={Image}
    title="Your Jouney Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan "
    url="/"
    btnClass="show"

     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  );
}

export default Home;
