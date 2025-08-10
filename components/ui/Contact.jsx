"use client";
import React, { useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { fadeInDown } from "../../app/data/variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const controls = useAnimation();
  const isInView = useInView(sectionRef, {
    amount: 0.1, // Reduced from 0.2 to trigger earlier
    once: false,
  });

  // Control animations based on scroll visibility
  React.useEffect(() => {
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

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    const name = form.name.value;

    // Form validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setTimeout(() => setEmailError(""), 4000);
      return;
    } else {
      setEmailError("");
    }

    if (message.trim().length < 10) {
      setMessageError("Please enter at least 10 characters.");
      setTimeout(() => setMessageError(""), 4000);
      return;
    } else {
      setMessageError("");
    }

    try {
      setLoading(true);

      // Next.js environment variables syntax Creat .env.local in root folder to add your credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("Missing EmailJS environment variables");
        setStatus("Configuration error. Please contact the administrator.");
        setLoading(false);
        return;
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setStatus(null);
    }, 4000);
  }

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="font-montserrat bg-black flex flex-col items-center justify-center text-neutral-100 min-h-[auto] py-16 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full text-center mb-12">
        <div className="flex flex-col items-center justify-center mb-2">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInDown}
            viewport={{ once: true, margin: "-50px" }} // Changed from -200px to -50px and once to true
            className="inline-block text-[11px] border border-neutral-700/50 bg-neutral-900/80 rounded-full px-3 py-0.5 
            items-center gap-1 relative mb-3 mx-auto backdrop-blur-sm"
            style={{
              maxWidth: "fit-content",
              fontSize: "13px",
              padding: "0.375rem 0.875rem",
            }}
          >
            <span className="text-1xl w-1 h-1 rounded-full">Get In Touch</span>
          </motion.p>

          <motion.h2
            variants={headingVariants}
            className="text-[22px] md:text-[32px] font-semibold text-neutral-100 relative inline-block mb-8"
            ref={headingRef}
          >
            Contact Me
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
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-center">
        {/* Image placeholder on the left */}
        <div className="lg:w-1/3 w-full flex justify-center">
          <div className="h-64 w-64 rounded-full bg-neutral-900 overflow-hidden shadow-lg shadow-blue-500/10">
            <img
              src="/images/me.jpg"
              alt="SUMIT BHOSLE"
              className="w-full h-full object-cover transition-all hover:scale-[1.02] duration-500 text-center"
            />
          </div>
        </div>

        {/* Contact form on the right */}
        <div className="lg:w-2/3 w-full">
          <div className="border border-neutral-600 p-6 md:p-8 rounded-2xl shadow-md text-neutral-100 bg-neutral-950/80 backdrop-blur-sm">
            <div className="flex max-md:flex-col md:flex-row w-full gap-4 mb-8 justify-center">
              {/* Email button */}
              <motion.a
                href="mailto:sumit.bhosle98@gmail.com"
                className="flex items-center text-sm justify-center gap-2 py-3 px-4 border border-neutral-600 rounded-lg font-medium hover:bg-neutral-900 transition-colors md:flex-1"
                whileHover={{ scale: 1.01 }}
              >
                <FiMail className="text-lg" />sumit.bhosle98@gmail.com
              </motion.a>

              {/* LinkedIn button */}
              <motion.a
                href="https://www.linkedin.com/in/sumitbhosle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm justify-center gap-2 py-3 px-4 border border-neutral-600 rounded-lg font-medium hover:bg-neutral-900 transition-colors md:flex-1"
                whileHover={{ scale: 1.01 }}
              >
                <FaLinkedin className="text-lg" /> LinkedIn Profile
              </motion.a>
            </div>

            <motion.form
              ref={formRef}
              className="w-full space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Name input field */}
              <motion.div className="space-y-1">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none focus:border-white transition-colors"
                  required
                />
              </motion.div>

              {/* Email input field */}
              <motion.div className="space-y-1">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none focus:border-white transition-colors"
                  required
                />
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
              </motion.div>

              {/* Message textarea */}
              <motion.div>
                <motion.textarea
                  placeholder="Your Message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
                  required
                />
                {messageError && (
                  <p className="text-red-500 text-xs">{messageError}</p>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 cursor-pointer px-4 py-3 rounded-lg text-sm font-medium text-white flex justify-center hover:brightness-110 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>

            {status && (
              <p className="mt-4 text-center text-sm font-medium text-blue-400">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
