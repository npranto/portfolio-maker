import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: App Info */}
        <p className="text-sm">Build your portfolio in 15 minutes</p>

        {/* Right side: Links and Social Media */}
        <div className="flex items-center gap-6">
          {/* Links Section */}
          <div className="flex gap-6 text-sm">
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Portfolio Maker. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
