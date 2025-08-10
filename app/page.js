"use client"
import React , {useEffect} from 'react';
import Hero from '../components/ui/Hero';
import FluidCursor from '@/components/ui/FluidCursor';
import TechStack from '@/components/ui/TechStack';
import Projects from '@/components/ui/Projects';
import Experience from '@/components/ui/Experience';
import Footer from '@/components/ui/Footer';
import Contact from '@/components/ui/Contact';
import { Navbar } from '@/components/ui/NavBar';

export default function Home() {

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    // }
  }, []);

  return (
  <>      
      <Navbar/>
      <FluidCursor/>    
      <Hero />
      <TechStack/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}