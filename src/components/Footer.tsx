
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-foreground text-background py-12">
      <div className="section-container">
        <div className="text-center">
          <h3 className="font-display text-3xl font-bold text-primary mb-3">FINSPIRE CAPITAL</h3>
          <p className="text-background/80 mb-6 text-lg">Fuel Your Financial Freedom</p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://wa.me/919630909495" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors font-medium">
              WhatsApp
            </a>
            <a href="mailto:teamfinspirecapital@gmail.com" className="text-background/70 hover:text-primary transition-colors font-medium">
              Email
            </a>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-center text-background/60">
              © 2025 Finspire Capital. All rights reserved.
            </p>
            <p className="text-center text-background/50 text-sm mt-2">
              SEBI Registered | Trusted by 500+ clients
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
