import { useState } from "react";
import Experience from "./layers/Experience";
import Skills from "./layers/Skills";
import Education from "./layers/Education";
import About from "./layers/About";
import Certifications from "./layers/Certifications";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans">
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      <main className="max-w-4xl mx-auto md:px-4 sm:px-[15px] md:py-10 space-y-16">
        {activeTab === "about" && <About />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "education" && <Education />}
        {activeTab === "certifications" && <Certifications />}
      </main>
      <Footer />
    </div>
  );
}
