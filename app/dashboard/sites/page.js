'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa'; // Importing icons

const sites = [
  {
    id: 1,
    name: 'Portfolio Site',
    status: 'Active',
    description: 'Personal portfolio website.',
  },
  {
    id: 2,
    name: 'Project Showcase',
    status: 'Inactive',
    description: 'Showcase of my projects.',
  },
  {
    id: 3,
    name: 'Blog Site',
    status: 'Active',
    description: 'My personal blog about tech.',
  },
];

const SitesPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Sites
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage and organize all your websites from here. <br />
          You can view, edit, or delete sites.
        </p>
      </div>

      {/* Sites Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sites.map((site) => (
          <div
            key={site.id}
            className={`group cursor-pointer flex-1 bg-white shadow-xl rounded-2xl p-6 sm:p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:rotate-2 relative overflow-hidden neumorphism-effect
              ${site.status === 'Inactive' ? 'opacity-60 border border-gray-300' : 'border-2 border-indigo-600 shadow-lg'}`}
          >
            {/* Neumorphism background effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors">
              {site.name}
            </h2>
            <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-all ease-in-out">
              {site.description}
            </p>
            <div className="flex justify-between items-center mt-6">
              <span
                className={`text-sm font-semibold ${site.status === 'Active' ? 'text-green-600' : 'text-gray-400'}`}
              >
                {site.status}
              </span>
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  className={`text-indigo-600 hover:text-indigo-800 transition-all duration-200 ${site.status === 'Inactive' ? 'opacity-40' : ''}`}
                >
                  <FaEdit size={18} />
                </button>
                <button
                  className={`text-red-600 hover:text-red-800 transition-all duration-200 ${site.status === 'Inactive' ? 'opacity-40' : ''}`}
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating "Create New Site" Button */}
      <div className="fixed bottom-8 right-8">
        <button
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center"
          onClick={() => router.push('/dashboard/sites/new-site')}
        >
          <FaPlusCircle size={30} />
          <span className="ml-2 text-lg">Create Site</span>
        </button>
      </div>
    </div>
  );
};

export default SitesPage;
