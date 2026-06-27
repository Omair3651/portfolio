import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ResultsStrip } from "@/components/sections/ResultsStrip";
import { Services } from "@/components/sections/Services";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ResultsStrip />
        <Services />
        <CaseStudy />
        <Testimonials />
        <Process />
        <WhyUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
