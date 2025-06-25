import React from "react";
import { resumeData } from "../data";

const Experience: React.FC = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
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
      </div>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-6">Open Source Projects</h2>
        <div className="space-y-8">
          {resumeData.additional.openSource.map((source, idx) => (
            <div key={idx} className="border-l-4 border-teal-500 pl-4 pb-4">
              <h3 className="text-xl font-medium">{source.name}</h3>
              <p className="text-gray-400">{source.description}</p>
              <a
                href={source.link}
                target="_blank"
                className="text-sm text-gray-500 italic"
              >
                {source.link}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Mobile Apps</h2>
        <div className="space-y-8">
          {resumeData.additional.mobileApps.map((source, idx) => (
            <div key={idx} className="border-l-4 border-teal-500 pl-4 pb-4">
              <h3 className="text-xl font-medium">{source.name}</h3>
              <a
                href={source.link}
                target="_blank"
                className="text-sm text-gray-500 italic"
              >
                {source.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
