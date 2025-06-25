import React from "react";
import { resumeData } from "../data";

const Certifications: React.FC = () => {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        {resumeData.certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
