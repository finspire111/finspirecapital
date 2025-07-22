import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
        : "bg-background/80 backdrop-blur-sm"
    )}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
           className="font-display text-2xl font-bold text-foreground flex items-center">
          <span className="text-primary mr-2">📈</span>
          FINSPIRE CAPITAL
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
          <a href="#about-yuvraj" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="https://wa.me/919630909495" target="_blank" rel="noopener noreferrer"
             className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl transition-all duration-300 font-semibold">
            Free Consultation
          </a>
        </div>

        <button className="md:hidden text-muted-foreground hover:text-foreground p-3" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 z-40 bg-background flex flex-col pt-20 px-6 md:hidden transition-all duration-300",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <a href="#hero" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-secondary" 
             onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Home</a>
          <a href="#about-yuvraj" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-secondary"
             onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>About</a>
          <a href="#services" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-secondary"
             onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Services</a>
          <a href="#testimonials" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-secondary"
             onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Testimonials</a>
          <a href="#contact" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-secondary"
             onClick={() => { setIsMenuOpen(false); document.body.style.overflow = ''; }}>Contact</a>
          <a href="https://wa.me/919630909495" target="_blank" rel="noopener noreferrer"
             className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold w-full text-center">
            Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;