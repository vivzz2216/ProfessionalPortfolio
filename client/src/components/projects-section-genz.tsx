import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Star, Code, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  featured: boolean;
  liveDemo: string;
  github: string;
  image: string;
  stats: {
    stars?: number;
    forks?: number;
    views?: number;
  };
}

export default function ProjectsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'FastAPI E-Commerce Platform',
      description: 'Full-stack e-commerce solution with FastAPI backend and React frontend',
      longDescription: 'A complete e-commerce platform built with FastAPI, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Includes real-time inventory tracking and automated email notifications.',
      technologies: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Redux', 'Stripe'],
      category: 'Full Stack',
      status: 'Completed',
      featured: true,
      liveDemo: 'https://demo.example.com',
      github: 'https://github.com/vivek/ecommerce-fastapi',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      stats: { stars: 234, forks: 67, views: 1200 }
    },
    {
      id: '2',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence and data visualization',
      longDescription: 'A powerful analytics dashboard that processes large datasets and provides real-time insights through interactive charts and graphs. Features machine learning predictions and automated report generation.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'NumPy', 'Scikit-learn'],
      category: 'Data Science',
      status: 'Completed',
      featured: true,
      liveDemo: 'https://analytics.example.com',
      github: 'https://github.com/vivek/analytics-dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      stats: { stars: 189, forks: 45, views: 890 }
    },
    {
      id: '3',
      title: 'AI-Powered Chatbot',
      description: 'Intelligent chatbot with natural language processing capabilities',
      longDescription: 'An advanced chatbot system using NLP and machine learning to understand and respond to user queries. Integrates with multiple platforms and provides contextual responses with learning capabilities.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'OpenAI', 'Docker'],
      category: 'AI/ML',
      status: 'In Progress',
      featured: false,
      liveDemo: 'https://chatbot.example.com',
      github: 'https://github.com/vivek/ai-chatbot',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      stats: { stars: 156, forks: 32, views: 650 }
    },
    {
      id: '4',
      title: 'Real-time Collaboration Tool',
      description: 'Web-based platform for team collaboration with real-time features',
      longDescription: 'A collaborative workspace that enables teams to work together in real-time with features like shared documents, video calls, task management, and instant messaging. Built with WebSocket technology for seamless communication.',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Express', 'Socket.io'],
      category: 'Full Stack',
      status: 'Prototype',
      featured: false,
      liveDemo: 'https://collab.example.com',
      github: 'https://github.com/vivek/collab-tool',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      stats: { stars: 78, forks: 23, views: 420 }
    },
    {
      id: '5',
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto price tracking with portfolio management',
      longDescription: 'A comprehensive cryptocurrency tracking application with real-time price updates, portfolio management, price alerts, and technical analysis tools. Features include historical data visualization and market sentiment analysis.',
      technologies: ['React', 'Python', 'WebSocket', 'Chart.js', 'CoinGecko API', 'Firebase'],
      category: 'Web App',
      status: 'Completed',
      featured: false,
      liveDemo: 'https://crypto.example.com',
      github: 'https://github.com/vivek/crypto-tracker',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
      stats: { stars: 198, forks: 56, views: 980 }
    },
    {
      id: '6',
      title: 'Smart Home IoT System',
      description: 'IoT-based home automation system with mobile app control',
      longDescription: 'An intelligent home automation system that connects various IoT devices for smart control of lighting, temperature, security, and energy management. Includes mobile app for remote control and monitoring.',
      technologies: ['Python', 'Raspberry Pi', 'IoT', 'React Native', 'MQTT', 'Firebase'],
      category: 'IoT',
      status: 'In Progress',
      featured: true,
      liveDemo: 'https://smarthome.example.com',
      github: 'https://github.com/vivek/smart-home',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      stats: { stars: 145, forks: 38, views: 720 }
    }
  ];

  const categories = ['All', 'Full Stack', 'Data Science', 'AI/ML', 'Web App', 'IoT'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-300 border-green-500/40';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40';
      case 'Prototype': return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 font-['Orbitron'] ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
            <Sparkles className="inline-block ml-4 text-yellow-400 animate-pulse" />
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mt-6 font-['Inter'] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing innovative solutions and cutting-edge technology implementations
          </motion.p>
        </div>

        {/* Featured Projects Carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-['Orbitron'] flex items-center">
            <Star className="mr-3 text-yellow-400" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    <Badge 
                      variant="outline" 
                      className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 font-['Orbitron']">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3 font-['Inter']">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="bg-cyan-500/10 text-cyan-300 border-cyan-500/40 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="bg-gray-500/10 text-gray-300 border-gray-500/40 text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center">
                          <Github className="w-4 h-4 mr-1" />
                          {project.stats.forks}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-purple-500/20 border-purple-500/40 hover:bg-purple-500/30"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-['Orbitron'] transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    <Badge 
                      variant="outline" 
                      className={`absolute top-3 right-3 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-white font-['Orbitron']">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm font-['Inter']">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="bg-cyan-500/10 text-cyan-300 border-cyan-500/40 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-400" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center">
                          <Code className="w-3 h-3 mr-1" />
                          {project.stats.forks}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 p-8 backdrop-blur-sm">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 mb-6 font-['Inter']">
                Let's build something amazing together. Check out my GitHub for more projects or get in touch!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50">
                  <Zap className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}