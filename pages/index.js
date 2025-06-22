import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import SeoHead from "../components/SeoHead";
import Galeri from "../components/Galeri";
import Unggul from "../components/Unggul";
import Faq from "../components/Faq";
import Maps from "../components/Maps";
import Benefit from "../components/Benefit";

export default function Home() {
  return (
    <>
      <SeoHead title="Bagong Biru Pariwisata" />
      <Hero />
      <Benefit />
      <Pricing />
      <Galeri />
      <Faq/>
      <Maps />
      {/* <Unggul /> */}
    </>
  );
}
