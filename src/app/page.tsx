import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CaseStudy } from "@/components/sections/CaseStudy";
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
        <Services />
        <CaseStudy />
        <Process />
        <WhyUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
