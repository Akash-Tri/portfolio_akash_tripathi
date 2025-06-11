import { useState, useEffect } from 'react';

// SVG Icons
const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 10.5L10.5 12 12 13.5 13.5 12 12 10.5zM19 19l1.5 1.5L19 22l-1.5-1.5L19 19zM5 19l1.5 1.5L5 22l-1.5-1.5L5 19z" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const projects = [
  {
    title: "Online Library System",
    description: "A React + Redux toolkit app ,an intuitive and responsive online library management system built with React and Vite. This application allows users to browse, add, and manage books seamlessly, providing a user-friendly interface for efficient library operations.",
    repo: "https://github.com/Akash-Tri/online-library-system-react",
    live: "https://akash-tri.github.io/online-library-system-react/",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
    tech: ["React", "Redux", "JavaScript"],
    category: "Web App"
  },
  {
    title: "ShoppyGlobe E-commerce",
    description: "A modern e-commerce platform with cart functionality, product filtering, and secure checkout process.",
    repo: "https://github.com/Akash-Tri/shoppy-globe-website-react-project",
    live: "https://akash-tri.github.io/shoppy-globe-website-react-project/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    tech: ["React", "Redux-toolkit", "CSS3","API"],
    category: "E-commerce"
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with beautiful UI, location-based forecasts, and detailed weather metrics.",
    repo: "https://github.com/Akash-Tri/WeatherForecastApp",
    live: "https://akash-tri.github.io/WeatherForecastApp/",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
    tech: ["JavaScript", "API", "CSS3","HTML5"],
    category: "Utility"
  },

  {
    title: "Task Management System",
    description: "A simple and responsive Todo List application built using React.It has various features like ,Add new tasks ,Mark tasks as completed ,Delete tasks.",
    repo: "https://github.com/Akash-Tri/react-todo-app",
    live: "https://akash-tri.github.io/react-todo-app/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
    tech: ["MERN", "Socket.io", "JWT"],
    category: "Productivity"
  },
  {
    title: "Students Registration System",
    description: "Student registration website built with html ,css and javascript.It helps in managing the students record and their data and necessary info for the future use.",
    repo: "https://github.com/Akash-Tri/AssignmentStudentRegistrationSystem",
    live: "https://akash-tri.github.io/AssignmentStudentRegistrationSystem/",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop&crop=center",
    tech: ["HTML5","CSS3","JavaScript"],
    category: "AI/ML"
  },
  {
    title: "Myntra Clone App",
    description: "A simple myntra clone ui built in only html and css just to showcase the design and the user interface built fully responsive. ",
    repo: "https://github.com/Akash-Tri/Project-Myntra-Clone",
    live: "https://akash-tri.github.io/Project-Myntra-Clone/",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=center",
    tech: ["HTML5","CSS3","JavaScript"],
    category: "Health"
  },
];

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleRepoClick = (repoUrl) => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = (liveUrl) => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>
        {`
          @keyframes animate-in {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-in {
            animation: animate-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .slide-in-from-bottom-8 {
            transform: translateY(2rem);
          }
          
          .fade-in-0 {
            opacity: 0;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
      
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Featured Work</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of projects showcasing full-stack development skills, 
              modern design principles, and cutting-edge technologies
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-index={index}
                className={`project-card group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/50 ${
                  visibleCards.includes(index) 
                    ? 'animate-in slide-in-from-bottom-8 fade-in-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-indigo-400/10 transition-all duration-500 rounded-2xl"></div>
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-white/50">
                    {project.category}
                  </div>
                  
                  {/* Hover Overlay with Links */}
                  <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button 
                      onClick={() => handleRepoClick(project.repo)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button 
                      onClick={() => handleLiveClick(project.live)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/80 backdrop-blur-sm border border-blue-400/50 rounded-lg text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200/50"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleRepoClick(project.repo)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                    >
                      <Code className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                    
                    <button 
                      onClick={() => handleLiveClick(project.live)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-2 opacity-0'
                  }`}>
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <span>View More Projects</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;