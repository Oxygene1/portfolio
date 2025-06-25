import React from "react";
import { resumeData, skillIcons } from "../data";

const Skills: React.FC = () => {
  return (
    <section className="animate-fade-in-up py-6 md:py-0 px-3 md:px-0">
      <h2 className="text-2xl font-semibold mb-4 md:mb-6">Skills</h2>
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
  );
};

export default Skills;
