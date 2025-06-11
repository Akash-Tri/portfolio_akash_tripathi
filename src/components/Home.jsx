import { useState, useEffect, useMemo } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const texts = [
    "Full Stack MERN Stack Developer",
    "Frontend Specialist",
    "Software Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    const publicUrl = window.location.origin;
    link.href = `${publicUrl}/akash-resume.pdf`;
    link.download = "akash-resume.pdf";

    fetch(link.href)
      .then((response) => {
        if (response.ok) {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert("Resume file not found. Please contact me directly.");
        }
      })
      .catch(() => {
        alert("Resume file not found. Please contact me directly.");
      });
  };

  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/akashtripathi215",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Akash-Tri",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/akash-tripathi-03b501243",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: style.left,
              top: style.top,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div
            className={`relative group transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10">
                {!imageError ? (
                  <img
                    src="/akash.png"
                    alt="Akash Tripathi - Full Stack Developer"
                    className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                    role="img"
                    aria-label="Akash Tripathi fallback avatar"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-2">👨‍💻</div>
                      <div className="text-sm font-medium">Akash Tripathi</div>
                    </div>
                  </div>
                )}

                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`max-w-2xl text-center lg:text-left transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium border border-white/20">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Akash Tripathi
              </span>
            </h1>

            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl text-white/90 mr-3">I'm a</span>
              <div className="relative">
                <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {texts[currentText]}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform origin-left animate-pulse"></div>
              </div>
            </div>

            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
              Passionate about creating amazing web experiences with modern technologies. 
              6 months of industry experience and constantly learning new skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Download Resume"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaDownload className="transition-transform group-hover:animate-bounce" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={handleContactClick}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Contact Me"
              >
                <FaEnvelope />
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  className={`group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color} focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="transition-transform duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
