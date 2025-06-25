import React from "react";
import { resumeData } from "../data";

const Education:React.FC = () => {
  return (
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
  );
};

export default Education;
