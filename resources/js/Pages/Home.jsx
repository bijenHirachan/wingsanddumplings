import Navbar from "@/Components/Navbar";
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Menu from '@/Components/Menu';
import Feedback from '@/Components/Feedback';
import OpeningHours from '@/Components/OpeningHours';
import Footer from '@/Components/Footer';

export default function Home({ foodItems, categories }) {

  return (
    <div className="font-sans bg-[#28282b] text-gray-200 scroll-smooth relative">
        <Navbar/>
        <Hero/>
        <About/>
        <Menu foodItems={foodItems} categories={categories}/>
        <Feedback />
        <OpeningHours />
        <Footer/>
    </div>
  );
}
