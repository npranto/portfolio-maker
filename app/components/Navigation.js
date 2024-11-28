'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-indigo-600 text-white py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Logo or App Name */}
        <div className="text-2xl font-extrabold">
          <Link
            href="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            PortfolioMaker
          </Link>
        </div>

        {/* Toggle Button for Small Screens */}
        <div className="sm:hidden">
          <button
            className="text-white hover:text-yellow-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (for larger screens) */}
        <nav className="hidden sm:flex space-x-8">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-lg hover:text-yellow-400 transition duration-300"
            >
              Dashboard
            </Link>
          </SignedIn>
          <SignedIn>
            <Link
              href="/settings"
              className="text-lg hover:text-yellow-400 transition duration-300"
            >
              Settings
            </Link>
          </SignedIn>

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="block text-lg hover:text-yellow-400 transition duration-300"
            >
              Login
            </Link>
          </SignedOut>
          <SignedOut>
            <Link
              href="/sign-up"
              className="block text-lg hover:text-yellow-400 transition duration-300"
            >
              Sign Up
            </Link>
          </SignedOut>
        </nav>
      </div>

      {/* Collapsible Menu (for small screens) */}
      <div
        className={`${
          isMenuOpen
            ? 'max-h-screen opacity-100 py-4 px-8'
            : 'max-h-0 opacity-0 py-0 px-0'
        } sm:hidden overflow-hidden bg-indigo-700 text-white space-y-4 transition-all duration-500 ease-in-out transform  text-right`}
      >
        <SignedIn>
          <Link
            href="/dashboard"
            className="block text-lg hover:text-yellow-400 transition duration-300"
          >
            Dashboard
          </Link>
        </SignedIn>
        <SignedIn>
          <Link
            href="/settings"
            className="block text-lg hover:text-yellow-400 transition duration-300"
          >
            Settings
          </Link>
        </SignedIn>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-in"
            className="block text-lg hover:text-yellow-400 transition duration-300"
          >
            Login
          </Link>
        </SignedOut>
        <SignedOut>
          <Link
            href="/sign-up"
            className="block text-lg hover:text-yellow-400 transition duration-300"
          >
            Sign Up
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};

export default Navigation;
