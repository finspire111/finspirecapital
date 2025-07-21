
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-8">
      <div className="section-container">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">Finspire Capital</h3>
          <p className="text-gray-400 mb-4">Expert Stock Market Advisory by Yuvraj Shukla</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://wa.me/919630909495" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              WhatsApp
            </a>
            <a href="mailto:teamfinspirecapital@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              Email
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-center text-gray-400 text-sm">
              Finspire Capital © 2025 | Built with 💛 by{" "}
              <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Lovable.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
