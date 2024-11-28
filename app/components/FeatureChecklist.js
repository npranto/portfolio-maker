/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaPaintBrush, FaEdit, FaEye, FaRocket } from 'react-icons/fa';

const FeatureChecklist = () => {
  return (
    <section className="bg-white py-16 px-8 sm:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12">
          Step-by-Step Guide to Build Your Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Choose a Design */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 text-white rounded-full p-6 mb-4">
              <FaPaintBrush size={36} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 1: Choose a Design
            </h3>
            <p className="text-lg text-gray-600">
              Select a pre-built design template to kickstart your portfolio.
            </p>
          </div>

          {/* Step 2: Customize Your Content */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 text-white rounded-full p-6 mb-4">
              <FaEdit size={36} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 2: Customize Your Content
            </h3>
            <p className="text-lg text-gray-600">
              Add your personal details like About, Work, Projects, and more.
            </p>
          </div>

          {/* Step 3: Preview Your Site */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 text-white rounded-full p-6 mb-4">
              <FaEye size={36} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 3: Preview Your Site
            </h3>
            <p className="text-lg text-gray-600">
              See a live preview of your portfolio before making it public.
            </p>
          </div>

          {/* Step 4: Deploy Your Site */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 text-white rounded-full p-6 mb-4">
              <FaRocket size={36} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 4: Deploy Your Site
            </h3>
            <p className="text-lg text-gray-600">
              Once you're satisfied, deploy your portfolio with just a click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureChecklist;
