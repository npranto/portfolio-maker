'use client';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaLink, FaEye } from 'react-icons/fa'; // Using icons for interactivity

const designs = [
  {
    id: 1,
    name: 'Eight',
    reference:
      'https://elements.envato.com/eight-creative-portfolio-html5-template-UMSPVJ',
    livePreviewUrl:
      'https://preview.themeforest.net/item/eight-creative-portfolio-html5-template/UMSPVJ',
    source: {
      name: 'Envato',
    },
    previewUrl:
      'https://elements-resized.envatousercontent.com/elements-cover-images/ce4e0565-dfb9-4680-9b9c-1b3fdafdcdd5?w=710&cf_fit=scale-down&q=85&format=auto&s=6e676acd9617b1685cd49af4d31f0661901abf786b0a1c43bcd94204a492d8b4',
  },
  {
    id: 2,
    name: 'Glint - Portfolio Template',
    reference: 'https://elements.envato.com/glint-portfolio-template-LHHWTYT',
    livePreviewUrl:
      'https://preview.themeforest.net/item/glint-portfolio-template/LHHWTYT',
    source: {
      name: 'Envato',
    },
    previewUrl:
      'https://elements-resized.envatousercontent.com/elements-cover-images/13eddf87-e45c-4127-9790-8e4cd68c1e10?w=710&cf_fit=scale-down&q=85&format=auto&s=57b2ed5787ddbb79fb462bfa23c8fb8aed82ca96480dd42b4d206b9bf6e74576',
  },
  {
    id: 3,
    name: 'Sonex — Minimalistic Portfolio',
    reference:
      'https://elements.envato.com/sonex-minimalistic-portfolio-FRJK4T',
    livePreviewUrl:
      'https://preview.themeforest.net/item/sonex-minimalistic-portfolio/FRJK4T',
    source: {
      name: 'Envato',
    },
    previewUrl:
      'https://elements-resized.envatousercontent.com/elements-cover-images/3d62d3f9-62f2-4360-b980-33af98900c69?w=710&cf_fit=scale-down&q=85&format=auto&s=d526babc120810f2b3da2419f80b5756951eda4e80914408ea02447e1772fac2',
  },
  {
    id: 4,
    name: 'Adrian - Portfolio Template',
    reference: 'https://elements.envato.com/adrian-portfolio-template-GLXYZ6R',
    livePreviewUrl:
      'https://preview.themeforest.net/item/adrian-portfolio-template/GLXYZ6R',
    source: {
      name: 'Envato',
    },
    previewUrl:
      'https://elements-resized.envatousercontent.com/elements-cover-images/cdfac636-1599-4eda-9423-9bc627d18f03?w=710&cf_fit=scale-down&q=85&format=auto&s=af9b6c5b0069d8cc1dacf0690b142ddba4a3db9e0f2ea831951e98ec6db7274d',
  },
];
const DesignSelection = ({ selectedDesign, onSelectDesign }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDesign, setModalDesign] = useState(null);

  const handleSelectDesign = (design) => {
    onSelectDesign(design);
    setIsModalOpen(false); // Close modal after selection
  };

  const handleOpenModal = (design) => {
    setModalDesign(design);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalDesign(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          New Site: Choose a Design
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Select a design for your new site. Preview them and decide which one
          fits your style.
        </p>
      </div>

      {/* Design Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designs.map((design) => (
          <div
            key={design.id}
            className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl ${
              selectedDesign?.id === design.id
                ? 'border-4 border-indigo-600'
                : 'border-4 border-transparent'
            }`}
          >
            {/* Thumbnail Image */}
            <img
              onClick={() => handleOpenModal(design)}
              src={design.previewUrl}
              alt={design.name}
              className="w-full h-56 object-cover transition-all duration-300 cursor-pointer"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors duration-300">
                {design.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{design.source.name}</p>
            </div>
            {/* Select Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => handleSelectDesign(design)}
                className={`py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ${
                  selectedDesign?.id === design.id
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={selectedDesign?.id === design.id}
              >
                {selectedDesign?.id === design.id ? '✔︎ Selected' : 'Select'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Large Preview */}
      {isModalOpen && modalDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-4 transition-transform duration-300 ease-in-out transform scale-110">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-indigo-800">
                {modalDesign.name}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-indigo-600 hover:text-indigo-800 transition-all duration-200"
              >
                Close
              </button>
            </div>
            <div className="flex justify-center mb-6">
              {/* Left Pane: Preview Image */}
              <img
                src={modalDesign.previewUrl}
                alt={modalDesign.name}
                className="w-full max-w-2xl rounded-xl"
              />
            </div>
            {/* Icons and Select Button */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex justify-center items-center space-x-8">
                <a
                  href={modalDesign.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-base sm:text-lg"
                >
                  <FaLink size={24} className="inline-block mr-2" />
                  View Reference
                </a>
                <a
                  href={modalDesign.livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-base sm:text-lg"
                >
                  <FaEye size={24} className="inline-block mr-2" />
                  Live Preview
                </a>
              </div>
              <button
                onClick={() => handleSelectDesign(modalDesign)}
                className={`py-2 px-6 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ${
                  selectedDesign?.id === modalDesign.id
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={selectedDesign?.id === modalDesign.id}
              >
                {selectedDesign?.id === modalDesign.id
                  ? '✔︎ Selected'
                  : 'Select'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DesignSelection.propTypes = {
  selectedDesign: PropTypes.shape({
    id: PropTypes.number,
  }),
  onSelectDesign: PropTypes.func.isRequired,
};

export default DesignSelection;
