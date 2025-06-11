import { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart } from "react-icons/fa";
import myFirstImage from "../assets/img1.jpg";
import mySecondImage from "../assets/img2.jpg";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: "6+", label: "Months Experience", icon: FaBriefcase },
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "2", label: "Degrees Earned", icon: FaGraduationCap },
    { number: "∞", label: "Passion for Coding", icon: FaHeart },
  ];

  const highlights = [
    "3 months as Software Support Engineer at Invader Technologies",
    "3 months as Web developer intern at Orinson Technologies",
    "Currently pursuing Full Stack MERN development course",
    "Master's degree in Science & Bachelor's in Biotechnology",
    "Experience in client support and troubleshooting",
    "Passionate about learning new technologies"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Images */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={mySecondImage}
                  alt="About Akash"
                  className="w-full h-96 md:h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent"></div>
              </div>

              {/* Second Image - Positioned as overlay */}
              <div className="absolute -top-6 -left-6 w-32 h-40 md:w-40 md:h-48 overflow-hidden rounded-xl shadow-xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-500">
                <img
                  src={myFirstImage}
                  alt="About Akash Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-indigo-100 transform group-hover:translate-y-2 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">6+</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ number, label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`bg-white rounded-xl p-4 shadow-lg border border-indigo-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Icon className="mx-auto text-indigo-600 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">{number}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                My Journey
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                I have around 6 months of experience working as a software developer and currently
                pursuing a Full Stack MERN development course. My education includes a Master's
                degree in Science and a Bachelor's degree in Biotechnology.
              </p>

              {/* Expandable Content */}
              {readMore && (
                <div className="space-y-4 mb-6 animate-fadeIn">
                  <p className="text-gray-600 leading-relaxed">
                    During my 3 months at Invader Technologies, I provided software support for a
                    product installed in various prison canteens. I handled client calls,
                    troubleshooting, and issue resolution, gaining valuable problem-solving and
                    communication skills.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I have also developed several projects including a React-based Online Library
                    System, a JavaScript Weather Forecast App, a personal Portfolio, ShoppyGlobe
                    E-commerce Application, and a Capstone Project demonstrating my MERN stack
                    skills.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I am passionate about coding, learning new technologies, and contributing to
                    impactful projects.
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Read More Button */}
              <button
                onClick={() => setReadMore(!readMore)}
                className="group relative inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300"
              >
                {readMore ? "Read Less" : "Read More"}
                <div
                  className={`w-4 h-4 border-2 border-current rounded-full transition-transform duration-300 ${
                    readMore ? "rotate-180" : ""
                  }`}
                >
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current transform rotate-45 -translate-x-0.5 -translate-y-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
