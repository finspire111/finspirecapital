
import React, { useState } from "react";
import { toast } from "sonner";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="details" className="w-full bg-gray-900 py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - Why Choose Finspire */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Why Choose Finspire Capital
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-gray-800 p-4 sm:p-8 border border-gray-700">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary text-lg">🔐</span>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="font-semibold text-base text-white">Trusted by 500+ clients across India and globally</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary text-lg">📊</span>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="font-semibold text-base text-white">Client-first, ethics-based advisory</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary text-lg">📊</span>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="font-semibold text-base text-white">Real-world insights, not textbook theory</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary text-lg">🧠</span>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="font-semibold text-base text-white">Long-term thinking over short-term noise</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/20 rounded-lg border-l-4 border-primary">
                <blockquote className="text-white italic">
                  "My mission is to help people stop gambling with money — and start growing it wisely."
                </blockquote>
                <cite className="text-sm text-gray-300 mt-2 block">— Yuvraj Shukla, Founder</cite>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Free 15-Min Discovery Call Available
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Let's Talk About Your Money Goals
              </h2>
            </div>
            
            {/* Card Content - Contact Options */}
            <div className="bg-gray-800 p-4 sm:p-8 border border-gray-700">
              <p className="text-gray-300 mb-6 text-center">No pressure. Just a real conversation about what's possible.</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919630909495" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Yuvraj
                </a>
                
                <a 
                  href="mailto:teamfinspirecapital@gmail.com"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;
