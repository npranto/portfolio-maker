import React, { useState } from 'react';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="about"
      className="about bg-red-100 rounded-md px-4 py-10 font-serif
"
      data-e2e="about"
    >
      <h2
        className="md:text-4xl md:leading-10 tracking-tight text-gray-900 mt-2 mb-2 text-3xl font-extrabold leading-9 flex
"
      >
        About
      </h2>
      <div className="text-base text-gray-500">
        <p className="my-2 text-base text-gray-500">
          I am Nazmuz (Shakib) Pranto, a front-end engineer with hands-on
          experience building single and multi-page web applications. I’m
          passionate about crafting clean, responsive, reusable user interfaces
          with modern technologies including{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-indigo-600"
          >
            React
          </a>
          ,{' '}
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-indigo-600"
          >
            Redux
          </a>
          , and{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-indigo-600"
          >
            Next.js
          </a>
          . I also love creating products that serve instant value to customers.
        </p>
        <p className="my-2 text-base text-gray-500">
          Over the past few years, I had the honor of helping build a highly
          customizable eCommerce platform as an engineer at Newfold Digital.
          This, in return, accelerated development time and feature delivery for
          multiple client-side teams within the organization. On the side, I
          also built and published mini utility libraries and APIs using{' '}
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 text-indigo-600"
          >
            Node.js
          </a>{' '}
          for external use.
        </p>
        <p className="my-2 text-base text-gray-500">
          Currently, I am learning techniques to better architect client-side
          applications to deliver more reliability and performance. So, if you
          are looking for a front-end focused developer who can improve
          developer experience, create dynamic user interfaces, and collaborate
          effectively, feel free to{' '}
          <a href="#contact" className="hover:text-indigo-500 text-indigo-600">
            reach out!
          </a>
        </p>
      </div>

      {/* Conditionally Render "Read More" Content */}
      {isExpanded && (
        <div
          id="read-more-content"
          className="ease-in-out transition"
          data-e2e="read-more-content"
        >
          <h3 className="font-semibold mt-3">My Journey</h3>
          <p className="my-2 text-base text-gray-500">
            I started my journey in web development during my first year of
            college as a Computer Science student. I was learning HTML and CSS
            for the very first time, not through a college course though, but on
            an online learning platform called -{' '}
            <a
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 text-indigo-600"
            >
              Codecademy
            </a>
            .
          </p>
          <p className="my-2 text-base text-gray-500">
            Since my exposure to DevMountain, I have taken on a junior role at{' '}
            <a
              href="https://www.lexialearning.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 text-indigo-600"
            >
              Lexia Learning
            </a>{' '}
            to a full-time Software Engineer gig at{' '}
            <a
              href="https://newfold.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 text-indigo-600"
            >
              Newfold Digital
            </a>
            .
          </p>
          <h3 className="font-semibold mt-3">Future Ambitions</h3>
          <p className="my-2 text-base text-gray-500">
            Of course, I still have a long way to go and I am working on getting
            better one day at a time.
          </p>
        </div>
      )}

      {/* Expand/Collapse Buttons */}
      <div>
        {!isExpanded ? (
          <button
            type="button"
            id="read-more-btn"
            className="flex font-medium hover:text-indigo-500 space-x-1 text-indigo-600"
            onClick={toggleExpand}
            data-e2e="read-more-btn"
          >
            Read more
            <span className="arrow-down-icon">
              <svg
                className="icon icon-tabler icon-tabler-chevron-down"
                width="24"
                height="24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
        ) : (
          <button
            type="button"
            id="collapse-read-more-btn"
            className="flex font-medium hover:text-indigo-500 space-x-1 text-indigo-600"
            onClick={toggleExpand}
            data-e2e="collapse-btn"
          >
            Collapse
            <span className="arrow-up-icon">
              <svg
                className="icon icon-tabler icon-tabler-chevron-up"
                width="24"
                height="24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <polyline points="6 15 12 9 18 15"></polyline>
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
