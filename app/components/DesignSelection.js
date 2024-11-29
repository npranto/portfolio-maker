'use client';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaLink, FaEye } from 'react-icons/fa';

const DESIGNS = [
  {
    id: 1,
    name: 'Shakib | Personal Portfolio',
    source: 'Individual Contributor',
    mainPreviewUrl:
      '/site-designs/personal-portfolio-shakib/screenshots/l.snapshot.png',
    liveDemoUrl: 'https://npranto.dev',
    referenceUrl: null,
    snapshots: [
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.full-page.png',
        deviceSize: 'l',
        tags: ['full-page'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.about.png',
        deviceSize: 'l',
        tags: ['about', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.blog.png',
        deviceSize: 'l',
        tags: ['blog', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.contact.png',
        deviceSize: 'l',
        tags: ['contact', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.education.png',
        deviceSize: 'l',
        tags: ['education', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.jumbotron.png',
        deviceSize: 'l',
        tags: ['jumbotron', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.navigation.png',
        deviceSize: 'l',
        tags: ['navigation', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.projects.png',
        deviceSize: 'l',
        tags: ['projects', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.section.work.png',
        deviceSize: 'l',
        tags: ['work', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/l.snapshot.png',
        deviceSize: 'l',
        tags: ['snapshot'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/m.fullpage.png',
        deviceSize: 'm',
        tags: ['full-page'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/m.snapshot.png',
        deviceSize: 'm',
        tags: ['snapshot'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.fullpage.png',
        deviceSize: 's',
        tags: ['full-page'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.about.png',
        deviceSize: 's',
        tags: ['about', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.blog.png',
        deviceSize: 's',
        tags: ['blog', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.contact.png',
        deviceSize: 's',
        tags: ['contact', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.education.png',
        deviceSize: 's',
        tags: ['education', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.jumbotron.png',
        deviceSize: 's',
        tags: ['jumbotron', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.navigation.png',
        deviceSize: 's',
        tags: ['navigation', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.projects.png',
        deviceSize: 's',
        tags: ['projects', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.section.work.png',
        deviceSize: 's',
        tags: ['work', 'section'],
      },
      {
        url: '/site-designs/personal-portfolio-shakib/screenshots/s.snapshot.png',
        deviceSize: 's',
        tags: ['snapshot'],
      },
    ],
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
        {DESIGNS.map((design) => (
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
              src={design.mainPreviewUrl}
              alt={design.name}
              className="w-full h-56 object-cover transition-all duration-300 cursor-pointer"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors duration-300">
                {design.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{design.source}</p>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-[95vw] w-full overflow-scroll max-h-[95vh]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
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

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                {modalDesign.referenceUrl && (
                  <a
                    href={modalDesign.referenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    <FaLink size={20} className="inline-block mr-1" />
                    View References
                  </a>
                )}
                {modalDesign.liveDemoUrl && (
                  <a
                    href={modalDesign.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    <FaEye size={20} className="inline-block mr-1" />
                    Live Preview
                  </a>
                )}
              </div>
              <button
                onClick={() => handleSelectDesign(modalDesign)}
                className={`py-2 px-6 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 w-full sm:w-auto ${
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

            {/* Snapshot Images Grid */}
            <div className="grid grid-cols-1 place-content-center sm:max-w-[75%] mx-auto gap-6 mt-6">
              {/* Laptop View */}
              <div className="bg-indigo-50 bg-opacity-60 p-6 rounded-md mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                  Laptop View
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {modalDesign.snapshots
                    .filter((snapshot) =>
                      snapshot.url.startsWith(
                        '/site-designs/personal-portfolio-shakib/screenshots/l.',
                      ),
                    )
                    .map((snapshot, index) => (
                      <div
                        key={index}
                        className="border-4 border-indigo-600 rounded-md relative group"
                      >
                        <img
                          src={snapshot.url}
                          alt={`Snapshot ${index + 1}`}
                          className="w-full h-auto max-w-full rounded-md transition-all duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Tablet View */}
              <div className="bg-green-50 bg-opacity-60 p-6 rounded-md mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Tablet View
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {modalDesign.snapshots
                    .filter((snapshot) =>
                      snapshot.url.startsWith(
                        '/site-designs/personal-portfolio-shakib/screenshots/m.',
                      ),
                    )
                    .map((snapshot, index) => (
                      <div
                        key={index}
                        className="border-4 border-green-600 rounded-md relative group"
                      >
                        <img
                          src={snapshot.url}
                          alt={`Snapshot ${index + 1}`}
                          className="w-full h-auto max-w-full rounded-md transition-all duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Mobile View */}
              <div className="bg-blue-50 bg-opacity-60 p-6 rounded-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Mobile View
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {modalDesign.snapshots
                    .filter((snapshot) =>
                      snapshot.url.startsWith(
                        '/site-designs/personal-portfolio-shakib/screenshots/s.',
                      ),
                    )
                    .map((snapshot, index) => (
                      <div
                        key={index}
                        className="border-4 border-blue-600 rounded-md relative group"
                      >
                        <img
                          src={snapshot.url}
                          alt={`Snapshot ${index + 1}`}
                          className="w-full h-auto max-w-full rounded-md transition-all duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>
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
