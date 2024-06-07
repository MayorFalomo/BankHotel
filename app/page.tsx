import Navbar from "@/components/navbar/Navbar";
import Faq from "@/components/navbar/faq/Faq";
import HeroHeader from "@/components/navbar/heroHeader/HeroHeader";
import HeroImage from "@/components/navbar/heroImage/HeroImage";
import Facilities from "@/components/navbar/homeFacilities/Facilities";
import Home_Slider from "@/components/navbar/home_Slider/Home_Slider";
import About_us from "@/components/navbar/home_about_us/About_us";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroHeader />
      <HeroImage />
      <About_us />
      <Home_Slider />
      <Facilities />
      <Faq />
    </div>
  );
}
