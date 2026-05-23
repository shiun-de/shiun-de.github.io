import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Specs } from '@/components/sections/Specs';
import { FAQ } from '@/components/sections/FAQ';
import { Preorder } from '@/components/sections/Preorder';

function Break() {
  return <p className="section-break" aria-hidden="true">* * *</p>;
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Break />
      <HowItWorks />
      <Break />
      <Specs />
      <Break />
      <FAQ />
      <Break />
      <Preorder />
      <Footer />
    </>
  );
}
