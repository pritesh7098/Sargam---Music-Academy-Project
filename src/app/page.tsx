import HeroSection from "@/components/HeroSection";
import FeaturedSection from "./../components/FeaturedSection";
import WhyUs from "@/components/WhyUs";
import { CourseTestimonials } from "@/components/CourseTestimonials";
import Webinars from "@/components/Webinars";
import Instructors from "./../components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhyUs />
      <CourseTestimonials />
      <Webinars />
      <Instructors />
      <Footer />
    </>
  );
}
