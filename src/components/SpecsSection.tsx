
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-secondary/30" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-medium">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground mr-3 text-sm font-bold">03</span>
            <span>Our Expertise</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Financial Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From personalized stock advisory to long-term wealth planning, we offer complete financial solutions tailored to your investment goals.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">1:1 Stock Advisory</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">Personalized stock recommendations tailored to your risk appetite and financial goals. Direct consultation with Yuvraj for strategic investment decisions.</p>
          </div>

          <div className="bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Portfolio Review & Restructure</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">Complete analysis of your current investments. Remove underperforming assets and realign your portfolio with your wealth goals.</p>
          </div>

          <div className="bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Trading Strategy Support</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">Intraday, swing, and positional trading guidance with clear entry and exit strategies backed by technical and fundamental analysis.</p>
          </div>

          <div className="bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl p-8 group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Long-Term Wealth Planning</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">Build lasting financial freedom through the power of compounding. Strategic planning for retirement, children's education, and major life goals.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your <span className="text-primary">Financial Future?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ successful investors who trust Finspire Capital for their wealth-building journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919630909495" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center">
                Start Your Journey
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="mailto:teamfinspirecapital@gmail.com" className="button-secondary inline-flex items-center">
                Email Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
