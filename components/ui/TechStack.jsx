"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { skills } from "../../app/data/data";
import { motion, useInView, useAnimation } from "framer-motion";
import { fadeInDown } from "../../app/data/variants";
import debounce from 'lodash/debounce'; // You may need to install lodash

const Techstack = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const skillsRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, {
    amount: 0.2, // Trigger when 20% of section is visible
    once: false, // Allow repeated animations
  });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Control animations based on scroll visibility
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Section variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Faster section fade-in
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  // Heading variants
  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2, // Faster heading fade-in
        ease: "easeOut",
      },
    },
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger
        delayChildren: 0.1, // Slightly faster delay
      },
    },
  };

  // Individual skill item variants
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3, // Faster skill item animation
        ease: "backOut",
      },
    },
  };

  // Add debounced handlers for smoother hover transitions
  const debouncedSetHoveredIndex = useCallback(
    debounce((index) => {
      setHoveredIndex(index);
    }, 50),
    []
  );

  const handleMouseEnter = (index) => {
    // Clear any pending hover outs
    debouncedSetHoveredIndex.cancel();
    // Set the hover state immediately
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    // Debounce the leave event to prevent flickering
    debouncedSetHoveredIndex(null);
  };

  return (
    <motion.section
      id="techstack"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className=" font-montserrat bg-black flex flex-col items-center justify-center text-neutral-100 min-h-[auto] py-8 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center mb-2">
          <motion.h2
            variants={headingVariants}
            className="text-[22px] md:text-[32px] font-semibold mb-8 text-neutral-100 relative inline-block"
            ref={headingRef}
          >
            Tech Stack
            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 overflow-hidden">
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 animate-gradient-x"
                style={{
                  width: "200%",
                  backgroundSize: "200% 100%",
                  animation: "gradientFlow 8s linear infinite",
                }}
              />
              <span
                className="absolute top-0 left-0 w-full h-full opacity-70 blur-sm bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 animate-gradient-x"
                style={{
                  width: "200%",
                  backgroundSize: "200% 100%",
                  animation: "gradientFlow 8s linear infinite",
                }}
              />
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          className="flex gap-7 md:gap-9 flex-wrap justify-center w-full"
          ref={skillsRef}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const color = skill.color;
            const isHovered = index === hoveredIndex;

            return (
              <motion.div
                key={index}
                variants={skillVariants}
                className="relative flex flex-col items-center justify-center p-5 rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 500 }}
              >
                <motion.div
                  style={{ color: color }}
                  className="text-[34px] md:text-[44px] transition-all duration-300"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 1 : 0.8,
                    transition: { duration: 0.15 } // Faster hover
                  }}
                >
                  <Icon />
                </motion.div>
                <motion.span
                  className="absolute top-full mt-2 text-[15px] md:text-[17px] font-medium"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    transition: { duration: 0.15 } // Faster hover
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.p
          variants={headingVariants}
          className="text-[15px] md:text-[17px] font-light text-neutral-400 mt-24 self-end"
        >
          I actively enhance my toolkit to stay ahead in development.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Techstack;