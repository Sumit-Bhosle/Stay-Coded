"use client";
import React, { useEffect, useState, useRef } from "react";
import { projects } from "../../app/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import {
  fadeInDown,
  fadeInUp,
  fadeInUpDelay,
  fadeInUpLarge,
} from "../../app/data/variants";

const Projects = React.forwardRef((props, ref) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const videoRefs = useRef([]); // Store refs for all videos

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Intersection Observer to handle play/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Auto-play when visible
          } else {
            video.pause(); // Pause when hidden
          }
        });
      },
      { threshold: 0.3 } // 30% visible triggers play
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="font-montserrat bg-black flex flex-col justify-center items-center mt-20 text-neutral-100 py-6 sm:py-16"
    >

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 pb-1 mb-4 md:mb-10 text-neutral-100"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={fadeInUpLarge}
        initial="hidden"
        whileInView="visible"
        className="px-4 lg:w-4xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project flex max-lg:flex-col max-lg:pb-4 bg-neutral-950 gap-4 my-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition sticky border border-neutral-600"
            style={{
              top: `calc(72px + ${index * 30}px)`,
            }}
          >
            {/* Project Info */}
            <motion.div
              variants={fadeInUpDelay}
              initial="hidden"
              whileInView="visible"
              className="projectinfo flex flex-1 flex-col p-4 md:p-8 h-96"
            >
              <h3 className="text-xl md:text-3xl border-b border-neutral-600 pb-2 text-neutral-100 font-semibold">
                {project.name}
              </h3>
              <p className="text-neutral-100 mt-2">{project.description}</p>
              <ul>
                {project.points.map((listItem, index) => (
                  <li className="text-sm pt-2" key={index}>
                    - {listItem}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-4">
                {project.techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  const color = tech.color;
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-600"
                    >
                      <Icon style={{ color }} /> {tech.name}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 mt-5">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-neutral-800 hover:text-white transition-transform duration-6 ease-out hover:scale-105 hover:-translate-y-0.5"
                >
                  GitHub
                  <FaGithub />
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
                  >
                    Live Site
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Media */}
            {(project.video || project.image) && (
              <motion.div
                variants={fadeInUpDelay}
                initial="hidden"
                whileInView="visible"
                className="relative flex-1 overflow-visible"
              >
                <motion.div
                  className="projectimg lg:absolute lg:top-20 lg:right-[-55%] w-full h-40 sm:h-80 md:h-96 lg:w-[167%] lg:border border-neutral-600 rounded-xl lg:h-[22rem] hover:cursor-pointer"
                  whileHover={isLargeScreen ? { x: -320, y: -65 } : {}}
                  transition={
                    isLargeScreen
                      ? { duration: 0.3, ease: "easeOut", delay: 0.3 }
                      : {}
                  }
                >
                  {project.video ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          el.playbackRate = 1.3; // Slight speed increase
                          videoRefs.current[index] = el;
                        }
                      }}
                      src={project.video}
                      className="rounded-xl object-cover border w-full h-full"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={project.image}
                      fill
                      className="rounded-xl object-cover border"
                      alt={`${project.name} screenshot`}
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});
Projects.displayName = "Projects";
export default Projects;
