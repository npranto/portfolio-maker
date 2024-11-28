import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 px-8 sm:px-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-800 opacity-70 animate-gradient bg-cover bg-center"></div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          PortfolioMaker
        </h1>
        <hr className="w-16 h-1 bg-yellow-500 mb-8" />
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal leading-tight mb-4">
          Build Your Portfolio in{' '}
          <strong>
            <u>15 Minutes</u>
          </strong>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Create and deploy your personal portfolio with ease. No coding skills
          required!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Get Started Button */}
          <SignedOut>
            <Link
              href="/sign-up"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold text-lg hover:bg-yellow-400 transition duration-300"
            >
              Get Started
            </Link>

            {/* Login Button */}
            <Link
              href="/sign-in"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-semibold text-lg hover:bg-white hover:text-black transition duration-300"
            >
              Login
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold text-lg hover:bg-yellow-400 transition duration-300"
            >
              My Dashboard
            </Link>
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
