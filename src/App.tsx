import { useState } from "react";
import { motion } from "motion/react";
import { InfiniteMovingCardsDemo } from "./components/movin-slide";
import ibrahim from "./assets/ibrahim.webp";
import { resumeData, skillIcons } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans">
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
        {/* Desktop nav */}
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
        {/* Mobile nav */}
        {showMenu && (
          <nav className="flex flex-col space-y-2 mt-4 md:hidden w-full">
            {[
              "about",
              "experience",
              "skills",
              "education",
              "certifications",
            ].map((tab) => (
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
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto md:px-4 sm:px-[15px] md:py-10 space-y-16">
        {/* About Section */}
        {activeTab === "about" && (
          <section className="relative">
            {/* Decorative lines (hidden on small screens) */}
            <div className="hidden sm:block absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="hidden sm:block absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="hidden sm:block absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
              <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="px-2 py-8 sm:px-4 md:py-20">
              <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  About Me
                </motion.span>
              </h1>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                }}
                className="relative z-10 mx-auto max-w-xl py-4 text-center text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400"
              >
                {resumeData.summary}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1,
                }}
                className="relative z-10 mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="https://calendly.com/abdulganiyutechng/30min"
                  target="_blank"
                >
                  <button className="w-full sm:w-auto transform rounded-lg bg-[#26A69A] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Schedule a meeting with me
                  </button>
                </a>
                <a href="https://wa.me/+2347039901318" target="_blank">
                  <button className="w-full sm:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                    Chat with Me
                  </button>
                </a>
              </motion.div>
              <div className="mt-8">
                <InfiniteMovingCardsDemo />
              </div>
            </div>
            <section className="animate-fade-in-up px-5">
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>{resumeData.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="break-all">{resumeData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="break-all">{resumeData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline break-all"
                  >
                    View Profile
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline break-all"
                  >
                    View Repositories
                  </a>
                </div>
              </div>
            </section>
          </section>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <section className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experience.map((job, idx) => (
                <div key={idx} className="border-l-4 border-teal-500 pl-4 pb-4">
                  <h3 className="text-xl font-medium">{job.role}</h3>
                  <p className="text-gray-400">
                    {job.company}, {job.location}
                  </p>
                  <p className="text-sm text-gray-500 italic">{job.duration}</p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <section className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="space-y-6">
              {Object.entries(resumeData.skills)?.map(([category, items]) => (
                <div key={category}>
                  <h3 className="capitalize text-lg font-medium text-gray-300 mb-2">
                    {category.replace("_", " ")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[])?.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 px-3 py-1 rounded-full text-sm text-teal-400 border border-gray-700 flex items-center space-x-2"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: skillIcons[item] || "",
                          }}
                        />{" "}
                        {/* Render SVG icon */}
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <section className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-lg font-medium">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {activeTab === "certifications" && (
          <section className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ibrahim Abdulganiyu
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
