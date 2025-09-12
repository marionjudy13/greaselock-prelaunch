"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React, { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "Downtown Grill",
    location: "Chicago, IL",
    quote: "Grease Lock has revolutionized our kitchen operations. The filtration efficiency is outstanding and we've significantly reduced our maintenance costs.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "Taco Express",
    location: "Austin, TX",
    quote: "The fire-resistant fiber gives us peace of mind. Installation was simple and the results were immediate. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    company: "Golden Wok Restaurant",
    location: "San Francisco, CA",
    quote: "We've been using Grease Lock for over a year now. The disposable pads are convenient and the built-in baffle design works perfectly.",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Johnson",
    company: "Burger Palace",
    location: "Miami, FL",
    quote: "Our grease trap cleaning frequency has been cut in half since switching to Grease Lock. The cost savings are remarkable.",
    rating: 5
  },
  {
    id: 5,
    name: "Mike Thompson",
    company: "Pizza Corner",
    location: "New York, NY",
    quote: "The metal frame is durable and the filter pads are easy to replace. This system has exceeded our expectations.",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Wang",
    company: "Asian Fusion Bistro",
    location: "Seattle, WA",
    quote: "Grease Lock's patented design really shows. We've noticed a significant improvement in air quality and reduced odors.",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
      <StarRating rating={testimonial.rating} />
      <blockquote className="text-gray-700 mb-4 italic">
        "{testimonial.quote}"
      </blockquote>
      <div className="border-t pt-4">
        <div className="font-bold text-gray-900">{testimonial.name}</div>
        <div className="text-teal text-sm">{testimonial.company}</div>
        <div className="text-gray-500 text-sm">{testimonial.location}</div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const targetRef = useRef(null);

  return (
    <main className="flex flex-col flex-auto">
      <Header scrollToRef={targetRef} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal to-blue text-white pt-32 pb-16">
        <div className="wrapper">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Customer Testimonials
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              See what restaurant owners and kitchen managers are saying about Grease Lock
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the Grease Lock difference in your kitchen. Contact us today for a consultation.
          </p>
          <button
            onClick={() =>
              targetRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg text-white bg-teal px-8 py-4 transition-all ease-in-out duration-500 border rounded-full border-teal hover:bg-white hover:text-teal font-bold tracking-wide"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={targetRef}>
        <section className="bg-gray-100 py-16">
          <div className="wrapper text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="tel:8008289638"
                className="text-teal hover:text-blue text-lg font-semibold"
              >
                📞 800.828.9638
              </a>
              <a
                href="mailto:sales@greaselock.com"
                className="text-teal hover:text-blue text-lg font-semibold"
              >
                ✉️ sales@greaselock.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}