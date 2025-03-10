import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Pdfs } from "@/components/pdfs";
import { ProductDetails } from "@/components/ProductDetails";
import { Videos } from "@/components/Videos";

export default function Home() {
  return (
    <main className="flex flex-col flex-auto">
      <Hero />
      <ProductDetails />
      <Pdfs />
      <Videos />
      <Contact />
    </main>
  );
}
