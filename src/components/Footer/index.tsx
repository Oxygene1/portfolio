import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Ibrahim Abdulganiyu
    </footer>
  );
};

export default Footer;
