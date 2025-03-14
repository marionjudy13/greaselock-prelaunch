"use client";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Pdfs } from "@/components/Pdfs";
import { ProductDetails } from "@/components/ProductDetails";
import { Videos } from "@/components/Videos";
import { Footer } from "@/components/Footer";
import React, { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  return (
    <main className="flex flex-col flex-auto">
      <Header scrollToRef={targetRef} />
      <Hero />
      <ProductDetails />
      <Pdfs />
      <Videos />
      <Contact targetRef={targetRef} />
      <Footer />
    </main>
  );
}
