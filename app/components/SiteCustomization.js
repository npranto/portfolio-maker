'use client';

import React, { useState } from 'react';
import AboutSection from './AboutSectionEditable'; // Import the AboutSection component

const SiteCustomization = () => {
  // State to manage all sections and their data
  const [sections, setSections] = useState({
    about: {
      content: {
        title: 'About',
        paragraphs: [
          'I am a front-end engineer with hands-on experience...',
          'Over the past few years, I had the honor...',
        ],
        linkText: 'Read more',
        linkUrl: '#',
      },
      style: {
        backgroundColor: '#fde8e8',
        textColor: '#2d3748',
        headingColor: '#1a202c',
      },
    },
    // Add other sections here as needed (e.g., Projects, Contact)
  });

  // Function to handle saving changes from a section
  const handleSave = (sectionKey, updatedData) => {
    setSections((prevSections) => ({
      ...prevSections,
      [sectionKey]: {
        ...prevSections[sectionKey],
        ...updatedData, // Update the specific section's content and style
      },
    }));
  };

  return (
    <div className="site-customization">
      <h1 className="text-2xl font-bold mb-4">Customize Your Site</h1>

      {/* Render Sections */}
      <div className="space-y-8">
        {/* About Section */}
        <AboutSection
          content={sections.about.content}
          style={sections.about.style}
          onSave={(updatedData) => handleSave('about', updatedData)}
        />

        {/* Additional Sections (e.g., Projects, Contact) */}
        {/* <ProjectsSection ... />
            <ContactSection ... /> */}
      </div>

      {/* Save All Button (optional, for saving all at once) */}
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          console.log('Save all sections:', sections);
          // Call an API or save to local storage here
        }}
      >
        Save All
      </button>
    </div>
  );
};

export default SiteCustomization;
