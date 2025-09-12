"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TestimonialsHubSpotForm from "@/components/TestimonialsHubspotForm";
import React, { useRef } from "react";

export default function Testimonials() {
  const targetRef = useRef(null);

  return (
    <main className="flex flex-col flex-auto">
      <Header scrollToRef={targetRef} />

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-teal to-blue text-white pt-32 pb-16">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Testimonial</h1>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section ref={targetRef} className="px-8 py-24 lg:py-32 bg-gray" id="contact">
        <div className="wrapper">
          <div className="bg-white py-10 lg:pt-20 lg:pb-16 lg:px-14">
            <div className="-mt-4">
              <TestimonialsHubSpotForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
