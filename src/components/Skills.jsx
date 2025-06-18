import { useState, useEffect } from 'react';

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600"
  },
  {
    category: "Backend Technologies", 
    skills: ["Node.js", "Express.js", "MongoDB"],
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    hoverGradient: "from-green-600 to-emerald-600"
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
    icon: "🔄",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600"
  },
  {
    category: "Development Tools",
    skills: ["Visual Studio", "Chrome DevTools"],
    icon: "🛠️",
    gradient: "from-orange-500 to-red-500",
    hoverGradient: "from-orange-600 to-red-600"
  },
  {
    category: "Core Skills",
    skills: ["Responsive Design", "Web Performance", "Cross-browser Compatibility"],
    icon: "💡",
    gradient: "from-indigo-500 to-purple-500",
    hoverGradient: "from-indigo-600 to-purple-600"
  },
  {
    category: "Additional Skills",
    skills: ["Problem Solving", "Debugging"],
    icon: "🧩",
    gradient: "from-teal-500 to-green-500",
    hoverGradient: "from-teal-600 to-green-600"
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"],
    icon: "🤝",
    gradient: "from-rose-500 to-pink-500",
    hoverGradient: "from-rose-600 to-pink-600"
  },
];

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Exploring the technologies and tools that power modern web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillsData.map((item, index) => (
            <div
              key={item.category}
              data-index={index}
              className={`skill-card group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden ${
                visibleCards.has(index.toString()) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hoveredCard === index ? item.hoverGradient : item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {item.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {item.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center space-x-3 transform transition-all duration-300 ${
                        visibleCards.has(index.toString()) 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect - Skill Count */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-sm font-bold transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                  {item.skills.length}
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Floating Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Technologies", count: skillsData.reduce((acc, item) => acc + item.skills.length, 0) },
            { label: "Categories", count: skillsData.length },
            { label: "Months Experience", count: "5+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 transform transition-all duration-500 hover:scale-105 ${
                visibleCards.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${1000 + (index * 200)}ms`
              }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.count}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;