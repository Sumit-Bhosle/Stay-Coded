"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconStack2Filled, IconFolder, IconBriefcase } from "@tabler/icons-react"; // Import the icons you want

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tech Stack",
      link: "#techstack",
      icon: <IconStack2Filled className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },  
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />, // Use a relevant icon
    },
        {
        name: "Experience",
        link: "#experience",
        icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />, // Use a relevant icon
        },

  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}