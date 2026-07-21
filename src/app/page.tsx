import { Hero } from "@/sections/Hero";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { Capabilities } from "@/sections/Capabilities";
import { Problems } from "@/sections/Problems";
import { Products } from "@/sections/Products";
import { Sectors } from "@/sections/Sectors";
import { Company } from "@/sections/Company";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Capabilities />
      <Problems />
      <Products />
      <Sectors />
      <Company />
      <CallToAction />
      <Footer />
    </>
  );
}
