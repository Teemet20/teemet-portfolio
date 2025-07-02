import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config/config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // More balanced margins for better detection
      threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better accuracy
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: Check which section is most visible when scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = "home";
      let maxVisibility = 0;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(elementTop, window.scrollY);
          const visibleBottom = Math.min(elementBottom, window.scrollY + window.innerHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleHeight / rect.height;

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id); // Immediately set as active when clicked
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-[60] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold font-orbitron text-orange-300">Portfolio</h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-gray-300 font-orbitron transition-colors duration-300 relative ${
                  activeSection === item.id 
                    ? "text-orange-300" 
                    : "text-white"
                }`}
              >
                {item.label}
                {/* Active indicator underline */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-300"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-orange-300 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-orange-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-orange-300 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-black/95 backdrop-blur-sm"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left font-orbitron transition-colors duration-300 py-2 relative ${
                      activeSection === item.id 
                        ? "text-orange-300" 
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator for mobile */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicatorMobile"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-orange-300 rounded-r"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;