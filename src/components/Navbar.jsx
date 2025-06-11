import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope,
  FaArrowUp,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "About", href: "#about", icon: FaUser },
    { name: "Skills", href: "#skills", icon: FaCogs },
    { name: "Projects", href: "#projects", icon: FaProjectDiagram },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/akash-tri", color: "hover:bg-gray-800" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/akash-tripathi-03b501243", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: FaInstagram , href: "https://instagram.com/akashtripathi215", color: "hover:bg-blue-400" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);

      // Enhanced active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Enhanced dark mode with system preference detection
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemPreference);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Add the CSS styles to the document head */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        /* Smooth scrolling for all browsers */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced dark mode */
        html.dark {
          background-color: #0f0f0f;
          color: #f0f0f0;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #a855f7);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #9333ea);
        }
        
        /* Improved focus styles */
        .focus-visible:focus {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }
        
        /* Better mobile touch targets */
        @media (max-width: 1024px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-white/5 border-b border-gray-200/30 dark:border-gray-700/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div
              className={`relative group cursor-pointer transition-all duration-500 select-none ${
                scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl lg:text-4xl"
              }`}
              onClick={() => handleNavClick("#home")}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleNavClick("#home")}
              aria-label="Scroll to Home"
            >
              <div className="relative overflow-hidden">
                <span className="block font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl filter drop-shadow-lg">
                  Akash Tripathi
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform transition-all duration-500 rounded-full opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  
                  return (
                    <li key={link.name} className="relative group">
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30"
                            : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        }`}
                        aria-label={`Navigate to ${link.name}`}
                      >
                        <Icon className={`text-sm transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                        <span className="text-sm font-medium">{link.name}</span>

                        {/* Enhanced background effects */}
                        {!isActive && (
                          <>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/5 to-purple-600/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Enhanced Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-4 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  darkMode 
                    ? "text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20 shadow-lg shadow-yellow-400/20" 
                    : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 bg-gray-100 dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                }`}
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
              >
                <div className="relative w-5 h-5">
                  <FaSun className={`absolute inset-0 transition-all duration-500 ${darkMode ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}`} />
                  <FaMoon className={`absolute inset-0 transition-all duration-500 ${darkMode ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-0"}`} />
                </div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                scrolled
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 shadow-lg shadow-indigo-500/20"
                  : "text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm shadow-lg shadow-black/20"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <FaBars
                  className={`absolute inset-0 transition-all duration-500 ${
                    isOpen ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <FaTimes
                  className={`absolute inset-0 transition-all duration-500 ${
                    isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-3xl shadow-2xl transform transition-all duration-700 ease-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-gray-200/50 dark:border-gray-700/50`}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        {/* Enhanced Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/30 dark:to-purple-900/30">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Navigation
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Explore my portfolio</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Enhanced Menu Items */}
        <div className="p-6 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <li
                  key={link.name}
                  className={`transform transition-all duration-700 ease-out ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`group flex items-center space-x-4 w-full px-4 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30"
                    }`}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 group-hover:bg-white/50 dark:group-hover:bg-gray-700"
                    }`}>
                      <Icon className={`text-lg transition-transform duration-300 ${
                        isActive ? "text-white scale-110" : "text-gray-600 dark:text-gray-400 group-hover:scale-110"
                      }`} />
                    </div>
                    <span className="text-base font-semibold tracking-wide flex-1 text-left">
                      {link.name}
                    </span>
                    
                    {/* Active indicator */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-white scale-100" : "bg-indigo-400 scale-0"
                    }`} />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Enhanced Social Links */}
          <div
            className={`mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-700 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                Let's connect and collaborate!
              </p>
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`group relative w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  );
                })}
              </div>
              
              {/* Dark mode toggle for mobile */}
              <div className="mt-6 pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20"
                      : "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  <div className="relative w-4 h-4">
                    <FaSun className={`absolute inset-0 transition-all duration-500 ${darkMode ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}`} />
                    <FaMoon className={`absolute inset-0 transition-all duration-500 ${darkMode ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-0"}`} />
                  </div>
                  <span className="text-sm font-medium">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/50 hover:scale-110 hover:shadow-indigo-500/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group"
          title="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
        </button>
      )}
    </>
  );
};

export default Navbar;