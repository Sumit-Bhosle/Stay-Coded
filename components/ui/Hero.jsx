"use client";
import { montserrat } from "@/lib/font";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from 'gsap';
import FluidCursor from '@/components/ui/FluidCursor';
import { ShimmerButton } from "../magicui/shimmer-button";



const layers = [
  { count: 50, className: "opacity-20 blur-sm", speed: 0.2 },
  { count: 30, className: "opacity-40 blur-[1px]", speed: 0.4 },
  { count: 20, className: "opacity-60", speed: 0.6 },
];

function Starfield({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up old stars
    container.innerHTML = "";

    layers.forEach(({ count, className: layerClass, speed }) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = cn(
          "absolute w-0.5 h-0.5 rounded-full bg-white animate-twinkle",
          layerClass
        );
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.setProperty("--twinkle-speed", `${speed}`);
        container.appendChild(star);
      }
    });
  }, []);

  return <div ref={containerRef} className={cn("fixed inset-0 z-0", className)} />;
}




export function Hero() {
  const nameWords = [
    { text: "Sumit", className: "text-white" },
    { text: "\u00A0Bhosle", className: "text-white" },
  ];
  const caption = "Shaping tomorrow, one stack at a time";
  const underlineRef = useRef(null);
  const nameRef = useRef(null);
  const subtleLinesRefLeft = useRef(null);
  const subtleLinesRefRight = useRef(null);

  useEffect(() => {
    // GSAP Animations

    // Initial fade-in for main elements
    gsap.fromTo([nameRef.current, ".caption", ".developer-info", ".description"], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.2 });

    // Underline animation
    const underline = underlineRef.current;
    if (underline) {
      gsap.fromTo(underline.children[1], { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power3.out", delay: 0.8 });
    }

    // Subtle background shapes animation
    gsap.to(".background-shape-1", { opacity: 0.2, y: 5, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut" });

    // Subtle flowing lines animation (example)
    const linesLeft = subtleLinesRefLeft.current ? subtleLinesRefLeft.current.querySelectorAll('div') : [];
    linesLeft.forEach((line, index) => {
      gsap.to(line, { x: 5, y: -3, repeat: -1, yoyo: true, duration: 2 + index * 0.3, ease: "sine.inOut", delay: index * 0.1 });
    });

    const linesRight = subtleLinesRefRight.current ? subtleLinesRefRight.current.querySelectorAll('div') : [];
    linesRight.forEach((line, index) => {
      gsap.to(line, { x: -5, y: 3, repeat: -1, yoyo: true, duration: 2.5 + index * 0.2, ease: "sine.inOut", delay: index * 0.15 });
    });

    // Consider subtle mouse move parallax (example - adjust values as needed)
    const handleMouseMove = (e) => {
      gsap.to(".background-shape-1", { x: (e.clientX - window.innerWidth / 2) * 0.01, y: (e.clientY - window.innerHeight / 2) * 0.01, overwrite: true, duration: 0.5 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

    // Will evaluate ScrollTrigger usage later if needed for the hero section itself
  }, []);

  // Smooth scroll to #contact section
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="h-screen w-full bg-black relative overflow-hidden">
      <FluidCursor />
      {/* Animated Background Shapes */}
      <Starfield number={25} className="absolute inset-0 z-0 opacity-50" /> 

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat text-xl sm:text-base md:text-lg text-slate-300 mt-4 sm:mt-6 mb-[-15px] opacity-70 sm:opacity-100"
        >
          Hi, I'm
        </motion.h2>

        <div className="relative flex flex-col items-center" ref={nameRef}>
          <TypewriterEffectSmooth
            words={nameWords}
            className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-1" // Adjusted className
            cursorClassName="bg-sky-400"
          />
          <div className="relative h-1.5 w-[90vw] sm:w-[70vw] md:w-[40rem] lg:min-w-[600px] max-w-3xl mt-[-2px] mb-[-3px]" ref={underlineRef}>
            <div className="absolute top-0 h-[0px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-[2px]" />
            <div className="absolute top-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent origin-left" />
          </div>
        </div>

        <motion.p
          className="caption font-montserrat mt-2 text-lg sm:text-lg md:text-xl text-sky-400 font-semibold max-w-xs sm:max-w-lg"
        >
          {caption}
        </motion.p>

        <motion.div className="developer-info z-1 font-montserrat mt-1 text-md sm:text-md md:text-lg text-gray-400">
          <span className="text-sky-200 font-semibold">Full Stack Developer</span> <span className="text-gray-400">
            {/* </span> <span className="text-sky-200 font-semibold"> */}
          </span>
        </motion.div>

        <motion.p
          className="description z-1 font-montserrat mt-2 max-w-sm sm:max-w-md md:max-w-2xl text-base sm:text-sm text-gray-500 leading-relaxed"
        >
          I fuse full-stack magic with AI brains to build solutions that matter.
        </motion.p>
        <div
          className="mt-3 flex flex-col sm:flex-row gap-4 justify-center"
          onClick={handleContactClick}
        >
          <ShimmerButton className="shadow-2xl">
            <span
              className="whitespace-pre-wrap text-center
              text-lg sm:text-base font-medium leading-none tracking-tight
              text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact Me 👋
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}



export default Hero;