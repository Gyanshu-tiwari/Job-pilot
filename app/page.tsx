import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/homepage/Hero";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Features } from "@/components/homepage/Features";
import { Testimonial } from "@/components/homepage/Testimonial";
import { BottomCTA } from "@/components/homepage/BottomCTA";
import { SectionDivider } from "@/components/homepage/SectionDivider";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Testimonial />
        <SectionDivider />
        <BottomCTA />
        <SectionDivider />
      </main>
      <Footer />
    </div>
  );
}
