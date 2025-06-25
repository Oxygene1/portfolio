import React, { useState } from "react";
import { resumeData } from "../../data";
import ibrahim from "../../assets/ibrahim.webp";
interface HeaderProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab:string;
}
const Header = ({ setActiveTab, activeTab }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="py-6 px-4 sm:px-10 border-b border-gray-700 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="flex items-center space-x-4 w-full md:w-auto justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={ibrahim}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-sm text-gray-400">{resumeData.title}</p>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-gray-400 hover:text-teal-400 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="space-x-6 hidden md:flex mt-4 md:mt-0">
        {["about", "experience", "skills", "education", "certifications"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize hover:text-teal-400 transition-all ${
                activeTab === tab ? "text-teal-400" : ""
              }`}
            >
              {tab}
            </button>
          )
        )}
      </nav>
      {showMenu && (
        <nav className="flex flex-col space-y-2 mt-4 md:hidden w-full">
          {["about", "experience", "skills", "education", "certifications"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setShowMenu(false);
                }}
                className={`capitalize text-left px-2 py-2 rounded hover:bg-gray-800 hover:text-teal-400 transition-all ${
                  activeTab === tab ? "text-teal-400" : ""
                }`}
              >
                {tab}
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
