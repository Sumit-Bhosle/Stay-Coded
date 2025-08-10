"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { expCards } from "../../app/data/data";
import { Timeline } from "./timeline";
import { fadeInDown } from "../../app/data/variants";

const Experience = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: false,
  });

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
        duration: 0.5,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Transform expCards data for Timeline component
  const timelineData = expCards.map((card) => ({
    // Left side: company logo and name (keep this as is)
    title: (
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
          <img
            src={card.logoPath}
            alt={`${card.companyName} logo`}
            className="h-8 w-8 object-contain"
          />
        </div>
        <span className="text-neutral-200 font-medium text-lg">
          {card.companyName || "Company"}
        </span>
      </div>
    ),
    // Right side: EXACT match to the provided code
    content: (
      <div className="ml-8 mt-2 mb-8">
        {" "}
        {/* Adjusted margins to create space */}
        <div className="flex items-start">
          <div className="timeline-wrapper">
            {/* <div className="timeline" /> */}
            <div className="w-1 h-full" />
          </div>
          <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
            {/* <div className="timeline-logo">
              <img
                src={card.logoPath}
                alt="logo"
                className="w-3/4 h-3/4 object-contain"
              />
            </div> */}
            <div>
              <h1 className="font-semibold text-3xl">{card.title}</h1>
              <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
              {/* <p className="text-[#839CB5] italic">Responsibilities</p> */}
              <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-white-50">
                {card.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-lg text-start">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    // Override Timeline component's default classes
    contentClassName: "!bg-black !border-none !p-0 !mb-0",
    titleClassName: "text-neutral-100",
  }));

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="font-montserrat *:bg-black flex flex-col items-center justify-center text-neutral-100 min-h-[auto] py-8 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center mb-2">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInDown}
            viewport={{ once: false, margin: "-100px" }}
            className="inline-block text-[11px] border border-neutral-700/50 bg-neutral-900/80 rounded-full px-3 py-0.5 
            items-center gap-1 relative mb-3 mx-auto backdrop-blur-sm"
            style={{
              maxWidth: "fit-content",
              fontSize: "13px",
              padding: "0.375rem 0.875rem",
            }}
          >
            <span className="text-1xl w-1 h-1 rounded-full">
              My Career Overview
            </span>
          </motion.p>

          <motion.h2
            variants={headingVariants}
            className="text-[22px] md:text-[32px] font-semibold text-neutral-100 relative inline-block mb-[-300px]"
            ref={headingRef}
          >
            Work Experience
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

        {/* Timeline section */}
        <div className="timeline-dark w-full max-w-5xl mx-auto">
          <Timeline
            data={timelineData}
            timelineClassName="!bg-black"
            containerClassName="!bg-black !relative"
            options={{
              customHeight: true,
              maxHeight: "100%",
              lineEndOffset: 100, // Increased padding at bottom
              disableAutoScrollOnClick: true,
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;