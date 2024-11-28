import PropTypes from 'prop-types';
import React, { useState } from 'react';

const SiteCustomization = ({ design }) => {
  const [about, setAbout] = useState('');
  const [projects, setProjects] = useState('');
  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const handleAboutChange = (e) => setAbout(e.target.value);
  const handleProjectsChange = (e) => setProjects(e.target.value);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          New Site: Site Customization
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Customize your site to match your preferences. Choose layouts, colors,
          and more.
        </p>
      </div>

      {/* Left Pane - Input Fields */}
      <div className="w-1/2 p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Edit Your Content
        </h3>

        <div className="mb-6">
          <label className="block text-lg text-gray-700 mb-2">
            About Section
          </label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md"
            placeholder="Write something about yourself"
            value={about}
            onChange={handleAboutChange}
          />
          <button
            className="mt-2 text-sm text-indigo-600 hover:underline"
            onClick={() => setShowAbout((prev) => !prev)}
          >
            {showAbout ? 'Hide About Section' : 'Show About Section'}
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-lg text-gray-700 mb-2">
            Projects Section
          </label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md"
            placeholder="Describe your projects"
            value={projects}
            onChange={handleProjectsChange}
          />
          <button
            className="mt-2 text-sm text-indigo-600 hover:underline"
            onClick={() => setShowProjects((prev) => !prev)}
          >
            {showProjects ? 'Hide Projects Section' : 'Show Projects Section'}
          </button>
        </div>
      </div>

      {/* Right Pane - Live Preview */}
      <div className="w-1/2 p-8 bg-gray-50 border-l-2 border-gray-300">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Live Preview
        </h3>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h4 className="text-xl font-bold text-gray-700">{design.name}</h4>

          {showAbout && (
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-gray-700">About</h5>
              <p className="text-gray-600">
                {about || 'Your about section content here'}
              </p>
            </div>
          )}

          {showProjects && (
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-gray-700">Projects</h5>
              <p className="text-gray-600">
                {projects || 'Your projects content here'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SiteCustomization.propTypes = {
  design: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SiteCustomization;
