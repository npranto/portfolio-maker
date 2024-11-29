'use client';

import React, { useState } from 'react';
import DesignSelection from './DesignSelection'; // The design selection component
import SiteCustomization from './SiteCustomization'; // The site customization component

const NewSiteFlow = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [step, setStep] = useState(1);
  const showPreviousStep = step > 1;
  const showNextStep =
    step === 1 && selectedDesign !== null ? true : step === 2 ? true : false;

  const handleSelectDesign = (design) => {
    setSelectedDesign(design);
  };

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="h-1 bg-gray-300 rounded-full">
          <div
            className="h-1 bg-indigo-600 rounded-full"
            style={{ width: `${(step / 2) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Design Selection</span>
          <span>Site Customization</span>
        </div>
      </div>

      {/* Steps Content */}
      {step === 1 && (
        <DesignSelection
          selectedDesign={selectedDesign}
          onSelectDesign={handleSelectDesign}
        />
      )}
      {step === 2 && <SiteCustomization selectedDesign={selectedDesign} />}

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        {showPreviousStep && (
          <button
            className="bg-gray-200 text-gray-800 p-3 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
        )}
        {showNextStep && (
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            onClick={handleNextStep}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default NewSiteFlow;
