import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Cpu, Award, User, FolderOpen, Briefcase, GraduationCap, Terminal, Shield, Server, Globe, ChevronDown, ExternalLink, Star, Zap, Rocket, Heart, Bot } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500', category: 'Programming' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600', category: 'Programming' },
    { name: 'React.js', icon: '⚛️', color: 'from-blue-400 to-cyan-500', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500', category: 'Backend' },
    { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500', category: 'Database' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700', category: 'Database' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-500', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600', category: 'DevOps' },
    { name: 'Git', icon: '🔧', color: 'from-purple-500 to-pink-500', category: 'Tools' },
    { name: 'VS Code', icon: '💻', color: 'from-indigo-500 to-purple-600', category: 'Tools' }
  ];

  const projects = [
    {
      title: 'InsaanAi Chat Bot',
      description: 'AI-powered conversational assistant with natural language processing and machine learning capabilities. Features real-time chat, context awareness, and intelligent responses.',
      tech: ['React', 'Node.js', 'AI/ML', 'NLP', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: 'Heart Disease ML Paper',
      description: 'Machine learning research paper on predictive heart disease analysis using advanced algorithms. Implemented various ML models for accurate disease prediction.',
      tech: ['Python', 'Machine Learning', 'Data Science', 'Research', 'TensorFlow'],
      color: 'from-red-500 to-rose-500',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const certifications = [
    { name: 'Advance Java with DSA', issuer: 'Coding Shuttle', color: 'from-orange-500 to-red-500', icon: '☕', link: 'https://drive.google.com/file/d/1e7qRLZ4tXDh8IFKVuspvZRfK1bnAF0TX/view?usp=sharing' },
    { name: 'Networking Essentials', issuer: 'Cisco', color: 'from-blue-500 to-indigo-500', icon: '🌐', link: 'https://drive.google.com/file/d/1NcMZ7dovI3WqG7sdgSuRe2Ue7KCPaoP_/view?usp=sharing' },
    { name: 'Cyber Forensic', issuer: 'Great Learning', color: 'from-purple-500 to-violet-500', icon: '🔍', link: 'https://drive.google.com/file/d/1nkyMPxSVkYEnLutKB9jYl9V28sAN81rj/view?usp=sharing' },
    { name: 'Advent of Cyber 2022', issuer: 'Try Hack Me', color: 'from-green-500 to-emerald-500', icon: '🛡️', link: 'https://drive.google.com/file/d/1UzOV5PR55MWHH6PsW4dsXx92xLv-6BMI/view?usp=sharing' }
  ];

  const experience = {
    title: 'Full Stack Web Development Trainer',
    company: 'Angel Wallah',
    location: 'Mhow, India',
    duration: 'July 2024 – Jan 2025',
    responsibilities: [
      'Conducted comprehensive workshops on full stack web development, covering both frontend and backend technologies',
      'Designed and facilitated practical, real-world coding projects to reinforce student learning and application'
    ]
  };

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'SGSITS, Indore, MP',
      status: 'Expected Graduation: 2027',
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Bachelor of Science in Computer Science (B.Sc.)',
      institution: 'Medi-Caps University, Indore',
      status: 'Graduated 2024 | CGPA: 7.09',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Exp' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'education', label: 'Education' },
            { id: 'certifications', label: 'Certs' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-white text-purple-900 shadow-lg transform scale-105'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-4
        sm:right-4 sm:top-auto sm:bottom-4 sm:left-auto sm:-translate-x-0 sm:-translate-y-0 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          href="https://github.com/InsaanAyu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group sm:w-10 sm:h-10"
        >
          <Github className="w-6 h-6 text-white group-hover:text-purple-300 sm:w-5 sm:h-5" />
        </a>
        <a
          href="https://linkedin.com/in/ayushsupath"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group sm:w-10 sm:h-10"
        >
          <Linkedin className="w-6 h-6 text-white group-hover:text-blue-300 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-24 pb-12 sm:pt-16 sm:pb-8">
        <div className="container mx-auto px-6 py-12 sm:px-2 sm:py-6">
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center sm:block">
            {/* Character/Workspace Illustration */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Workspace Background */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Dual Monitors */}
                  <div className="flex space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 flex-1 transform hover:scale-105 transition-transform duration-300">
                      <div className="bg-slate-900 rounded p-2 text-xs text-green-400 font-mono">
                        <div className="animate-pulse">$ npm run dev</div>
                        <div className="text-blue-400">✓ Server running...</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-3 flex-1 transform hover:scale-105 transition-transform duration-300">
                      <div className="bg-slate-900 rounded p-2 text-xs text-white font-mono">
                        <div className="text-yellow-400">Training Model...</div>
                        <div className="text-green-400">█████████░ 95%</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Character Representation */}
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl animate-bounce">
                    👨‍💻
                  </div>
                  
                  {/* Floating Code Icons */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-spin-slow">
                    <Code className="w-4 h-4 text-yellow-900" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                    <Database className="w-4 h-4 text-green-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse sm:text-3xl">
                  Ayush Supath
                </h1>
                <h2 className="text-2xl lg:text-3xl text-purple-300 font-light sm:text-lg">
                  Full Stack Developer & AI Enthusiast
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed sm:text-base">
                Passionate about creating innovative solutions that bridge the gap between 
                cutting-edge technology and real-world problems. Specialized in building 
                scalable web applications and exploring the frontiers of artificial intelligence.
              </p>

              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 animate-pulse">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3 animate-pulse" style={{animationDelay: '0.5s'}}>
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 animate-pulse" style={{animationDelay: '1s'}}>
                  <Cloud className="w-6 h-6 text-white" />
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse flex items-center space-x-2 sm:px-4 sm:py-2 sm:text-base"
              >
                <span>Explore My Journey</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl sm:p-4">
              <div className="flex items-center justify-center mb-8 sm:mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl animate-bounce sm:w-20 sm:h-20 sm:text-4xl">
                  👨‍💻
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 sm:text-base sm:mb-4">
                I'm a passionate Full Stack Developer and AI enthusiast currently pursuing my Master's in Computer Applications. 
                With a strong foundation in modern web technologies and a keen interest in artificial intelligence, 
                I love creating innovative solutions that make a real impact.
              </p>
              <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-1">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Rocket className="w-8 h-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
                  <p className="text-white/80 text-sm">Always exploring new technologies and pushing boundaries</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
                  <p className="text-white/80 text-sm">Building fast, scalable, and efficient applications</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Star className="w-8 h-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-white mb-2">Quality</h3>
                  <p className="text-white/80 text-sm">Delivering clean, maintainable, and robust code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              🎯 Professional Experience
            </h2>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden sm:p-4">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-spin-reverse"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6 sm:mb-3 sm:flex-col sm:text-center">
                    <Briefcase className="w-10 h-10 text-white mr-4 sm:mr-0 sm:mb-2" />
                    <div>
                      <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
                      <p className="text-white/90 text-xl">{experience.company} | {experience.location}</p>
                      <p className="text-white/80 text-lg">{experience.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 animate-pulse"></div>
                        <p className="text-white/90 text-lg leading-relaxed sm:text-base">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              🧠 Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:grid-cols-1">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative transform transition-all duration-500 hover:scale-110"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden sm:p-4`}>
                    <div className="text-center">
                      <div className="text-4xl mb-3 animate-bounce group-hover:animate-pulse sm:text-2xl sm:mb-1">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 sm:text-base">
                        {skill.name}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-xs">{skill.category}</p>
                      <div className="w-full bg-white/20 rounded-full h-1 mt-3 sm:mt-1">
                        <div className="bg-white rounded-full h-1 transition-all duration-1000" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 sm:grid-cols-1 sm:gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative transform transition-all duration-700 hover:scale-105"
                >
                  <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden sm:p-4`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full animate-spin-slow"></div>
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-spin-reverse"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4 sm:mb-2 sm:flex-col sm:text-center">
                        <div className="text-white mr-4 sm:mr-0 sm:mb-2">{project.icon}</div>
                        <h3 className="text-2xl font-bold text-white sm:text-lg">{project.title}</h3>
                      </div>
                      
                      <p className="text-white/90 text-lg mb-6 leading-relaxed sm:text-base sm:mb-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 sm:mb-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white border border-white/30 sm:px-2 sm:py-0.5 sm:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 sm:px-2 sm:py-1 sm:text-xs">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              🎓 Education
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-4">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="group relative transform transition-all duration-700 hover:scale-105"
                >
                  <div className={`bg-gradient-to-br ${edu.color} rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden sm:p-4`}>
                    <div className="absolute top-4 right-4">
                      <GraduationCap className="w-8 h-8 text-white/80 animate-pulse" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3 sm:text-lg sm:mb-1">{edu.degree}</h3>
                      <p className="text-white/90 text-lg mb-2 sm:text-base sm:mb-1">{edu.institution}</p>
                      <p className="text-white/80 text-md sm:text-sm">{edu.status}</p>
                    </div>
                    
                    {/* Education Badge */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 animate-spin-slow">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              📜 Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group relative transform transition-all duration-700 hover:scale-105"
                >
                  <div className={`bg-gradient-to-br ${cert.color} rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden sm:p-4`}>
                    <div className="absolute top-4 right-4">
                      <Award className="w-8 h-8 text-white/80 animate-pulse" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3 sm:mr-0 sm:mb-2">{cert.icon}</div>
                        <div>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-white mb-1 sm:text-base underline hover:text-yellow-300 transition-colors"
                          >
                            {cert.name}
                          </a>
                          <p className="text-white/80 text-lg sm:text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>
                    {/* Certification Badge */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 animate-spin-slow">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 py-20 sm:py-10">
        <div className="container mx-auto px-6 sm:px-2">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent sm:text-2xl sm:mb-8">
              Let's Connect
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl sm:p-4">
              <div className="grid md:grid-cols-3 gap-8 text-center sm:grid-cols-1 sm:gap-4">
                <div className="group transform transition-all duration-300 hover:scale-110">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce sm:w-12 sm:h-12 sm:mb-2">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 sm:text-base sm:mb-1">Email</h3>
                  <p className="text-gray-300 sm:text-sm">ayushsupath1829@example.com</p>
                </div>
                
                <div className="group transform transition-all duration-300 hover:scale-110">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce sm:w-12 sm:h-12 sm:mb-2">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 sm:text-base sm:mb-1">Phone</h3>
                  <p className="text-gray-300 sm:text-sm">+91 8718801591</p>
                </div>
                
                <div className="group transform transition-all duration-300 hover:scale-110">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce sm:w-12 sm:h-12 sm:mb-2">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 sm:text-base sm:mb-1">Location</h3>
                  <p className="text-gray-300 sm:text-sm">Indore, India</p>
                </div>
              </div>
              
              <div className="mt-12 text-center sm:mt-6">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse sm:px-4 sm:py-2 sm:text-base">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-r from-purple-900 to-slate-900 text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 relative z-20">
        <div className="text-center md:text-left text-sm opacity-80">
          © {new Date().getFullYear()} Ayush Supath. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/InsaanAyu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-300 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/ayushsupath" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </footer>

      {/* Loading Animation */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-xl">Loading Portfolio...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;