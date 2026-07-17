
import Navbar from "../components/landings/Navbar";
import Hero from "../components/landings/Hero";
import Footer from "../components/footer/Footer";

export default function Landing() {
  return (
    <main className="bg-[#020817] min-h-screen">
      <Navbar />
       
      <Hero />
      
      <Footer /> 
      
    </main>
  );
}