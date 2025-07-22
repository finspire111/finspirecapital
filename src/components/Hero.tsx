
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/finspire-hero-dashboard.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-background" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 60px' : '140px 20px 80px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-primary/20 to-accent/10 opacity-30 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 opacity-0 animate-fade-in font-medium" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-3 text-sm font-bold">✓</span>
              <span>Trusted by 500+ Investors</span>
            </div>
            
            <h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground opacity-0 animate-fade-in font-bold" 
              style={{ animationDelay: "0.3s" }}
            >
              Grow Your Wealth with<br className="hidden sm:inline" />
              <span className="text-primary">Expert Stock Market</span><br className="hidden sm:inline" />
              Guidance
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-6 sm:mt-8 mb-6 sm:mb-10 leading-relaxed opacity-0 animate-fade-in text-muted-foreground font-normal text-lg sm:text-xl text-left max-w-2xl"
            >
              Yuvraj Shukla, Founder of Finspire Capital, has helped 500+ investors build lasting wealth through personalized investment strategies backed by 9+ years of market experience.
            </p>
            
            <div 
              className="inline-flex items-center text-sm text-muted-foreground mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="font-medium italic">Fuel Your Financial Freedom</span>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.8s" }}
            >
              <a 
                href="https://wa.me/919630909495" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary group flex items-center justify-center w-full sm:w-auto"
              >
                Book Free Advisory Call
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="mailto:teamfinspirecapital@gmail.com"
                className="button-secondary group flex items-center justify-center w-full sm:w-auto"
              >
                Email Consultation
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl -z-10 shadow-2xl blur-sm"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-border">
              <img 
                ref={imageRef} 
                src={heroImage} 
                alt="Professional Stock Market Analysis Dashboard - Finspire Capital" 
                className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                style={{ transformStyle: 'preserve-3d' }} 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
