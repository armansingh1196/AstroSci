import HeroSection from '@/components/sections/HeroSection';
import FeaturedServices from '@/components/sections/FeaturedServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutAcharya from '@/components/sections/AboutAcharya';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <AboutAcharya />
      <TestimonialsPreview />
      <CallToAction />
    </>
  );
}
