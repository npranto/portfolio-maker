import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 px-8 sm:px-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-800 opacity-70 animate-gradient bg-cover bg-center"></div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Build Your Portfolio in <br /> 15 Minutes
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Create and deploy your personal portfolio with ease. No coding skills
          required!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Get Started Button */}
          <a
            href="#get-started"
            className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold text-lg hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>

          {/* Login Button */}
          <a
            href="#login"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-semibold text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
