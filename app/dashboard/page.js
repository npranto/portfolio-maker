/* eslint-disable react/no-unescaped-entities */
'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center text-gray-900 px-6 py-10 sm:py-16">
      {/* Dashboard Header */}
      <header className="text-center mb-12 sm:mb-16 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Welcome, {user?.firstName || 'User'}!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Choose your next step and let's get started!
        </p>
      </header>

      {/* Interactive Options with Neumorphism and Glow Effects */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 w-full max-w-4xl">
        {/* Sites Option */}
        <div
          onClick={() => handleNavigation('/dashboard/sites')}
          className="group cursor-pointer flex-1 bg-white shadow-xl rounded-2xl p-8 sm:p-10 transition-all transform hover:scale-105 hover:shadow-2xl hover:rotate-2 relative overflow-hidden neumorphism-effect"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors">
            Sites
          </h2>
          <p className="mt-6 text-gray-600 group-hover:text-gray-800 transition-all ease-in-out">
            Manage, customize, and showcase your portfolio sites in an
            interactive environment.
          </p>
        </div>

        {/* Settings Option */}
        <div
          onClick={() => handleNavigation('/dashboard/settings')}
          className="group cursor-pointer flex-1 bg-white shadow-xl rounded-2xl p-8 sm:p-10 transition-all transform hover:scale-105 hover:shadow-2xl hover:rotate-2 relative overflow-hidden neumorphism-effect"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors">
            Settings
          </h2>
          <p className="mt-6 text-gray-600 group-hover:text-gray-800 transition-all ease-in-out">
            Adjust your profile, preferences, and settings to match your
            personalized needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
