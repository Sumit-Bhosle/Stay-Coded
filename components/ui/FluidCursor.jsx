'use client';
import { useEffect, useState } from 'react';
import useFluidCursor from './Fluid';

const FluidCursor = () => {
  // Track when TechStack is in view
  const [reducedIntensity, setReducedIntensity] = useState(false);
  
  useEffect(() => {
    const fluidInstance = useFluidCursor();
    
    // Set up intersection observer for TechStack section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When TechStack section is in view, reduce intensity
        if (entry.isIntersecting) {
          setReducedIntensity(true);
          // Reduce fluid parameters
          if (fluidInstance) {
            fluidInstance.config.SPLAT_FORCE = 2000; // Reduced from 6000
            fluidInstance.config.DENSITY_DISSIPATION = 6; // Increased from 3.5
            fluidInstance.config.VELOCITY_DISSIPATION = 3.5; // Increased from 2
            fluidInstance.config.CURL = 1.5; // Reduced from 3
          }
        } else {
          setReducedIntensity(false);
          // Reset to normal intensity
          if (fluidInstance) {
            fluidInstance.config.SPLAT_FORCE = 6000; 
            fluidInstance.config.DENSITY_DISSIPATION = 3.5;
            fluidInstance.config.VELOCITY_DISSIPATION = 2;
            fluidInstance.config.CURL = 3;
          }
        }
      });
    }, { threshold: 0.2 }); // Start transition when 20% of section is visible
    
    // Find and observe the TechStack section
    const techStackSection = document.querySelector('#techstack-section');
    if (techStackSection) {
      observer.observe(techStackSection);
    }
    
    return () => {
      if (techStackSection) observer.unobserve(techStackSection);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-10 pointer-events-none w-full h-full">
      <canvas id="fluid" className={`w-screen h-screen pointer-events-none ${reducedIntensity ? 'opacity-50' : 'opacity-90'}`} />
    </div>
  );
};

export default FluidCursor;