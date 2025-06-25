import React from 'react'
import { resumeData } from '../data'
import { InfiniteMovingCardsDemo } from '../components/movin-slide'
import { motion } from "motion/react";
const About:React.FC = () => {
  return (
      <section className="relative">
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
                  <a target="_blank" href={`mailto:${resumeData.email}`}>
                    <p className="break-all">{resumeData.email}</p>
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a target="_blank" href={`tel:+${resumeData.phone}`}>
                    <p className="break-all">{resumeData.phone}</p>
                  </a>
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
                <div className="sm:col-span-2">
                  <p className="text-sm text-gray-400">Resume</p>
                  <a
                    href={resumeData.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline break-all"
                  >
                    Get my resume
                  </a>
                </div>
              </div>
            </section>
          </section>
  )
}

export default About