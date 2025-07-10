import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, Zap, Rocket, Code, Database, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  liveDemo: string;
  github: string;
  gradient: string;
  icon: any;
  stats: {
    stars?: number;
    contributors?: number;
    views?: number;
  };
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time notifications.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    category: 'Full Stack',
    status: 'Completed',
    liveDemo: 'https://ecommerce-demo.com',
    github: 'https://github.com/vivekpillai/ecommerce',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: Globe,
    stats: { stars: 128, contributors: 5, views: 2400 }
  },
  {
    id: '2',
    title: 'AI Data Analytics Dashboard',
    description: 'Machine learning powered analytics platform with predictive insights',
    longDescription: 'Advanced analytics dashboard using Python, FastAPI, and React. Implements machine learning models for predictive analytics and data visualization.',
    technologies: ['Python', 'FastAPI', 'React', 'TensorFlow', 'PostgreSQL'],
    category: 'AI/ML',
    status: 'Completed',
    liveDemo: 'https://analytics-ai.com',
    github: 'https://github.com/vivekpillai/ai-analytics',
    gradient: 'from-purple-500 via-violet-500 to-pink-500',
    icon: Database,
    stats: { stars: 95, contributors: 3, views: 1800 }
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    description: 'Scalable messaging platform with end-to-end encryption',
    longDescription: 'Modern chat application with real-time messaging, file sharing, and video calls. Built with WebSocket technology and secure encryption.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    category: 'Real-time',
    status: 'Completed',
    liveDemo: 'https://secure-chat.com',
    github: 'https://github.com/vivekpillai/secure-chat',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: Zap,
    stats: { stars: 156, contributors: 4, views: 3200 }
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'Collaborative project management tool with advanced features',
    longDescription: 'Comprehensive task management platform with team collaboration, time tracking, and project analytics. Includes Kanban boards and Gantt charts.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
    category: 'Productivity',
    status: 'In Progress',
    liveDemo: 'https://taskmanager-pro.com',
    github: 'https://github.com/vivekpillai/task-manager',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    icon: Rocket,
    stats: { stars: 78, contributors: 2, views: 1500 }
  },
  {
    id: '5',
    title: 'API Gateway Service',
    description: 'Microservices API gateway with load balancing and monitoring',
    longDescription: 'High-performance API gateway built with FastAPI, featuring rate limiting, authentication, load balancing, and comprehensive monitoring.',
    technologies: ['FastAPI', 'Docker', 'Kubernetes', 'Redis', 'Prometheus'],
    category: 'Infrastructure',
    status: 'Completed',
    liveDemo: 'https://api-gateway.com',
    github: 'https://github.com/vivekpillai/api-gateway',
    gradient: 'from-slate-500 via-gray-500 to-zinc-500',
    icon: Code,
    stats: { stars: 203, contributors: 8, views: 4100 }
  },
  {
    id: '6',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking solution with biometric authentication',
    longDescription: 'React Native mobile banking app with advanced security features, transaction management, and investment tracking.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'JWT'],
    category: 'Mobile',
    status: 'Prototype',
    liveDemo: 'https://mobilebank-demo.com',
    github: 'https://github.com/vivekpillai/mobile-banking',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    icon: Star,
    stats: { stars: 89, contributors: 3, views: 2100 }
  }
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="projects" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono"
            style={{
              left: `${(i * 2.5) % 100}%`,
              top: '0%',
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {['0', '1', '{', '}', '<', '>', '(', ')', '[', ']'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotateY: [0, 5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block"
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-6 font-['Cinzel'] relative z-10">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">
                Project Showcase
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Innovative solutions crafted with cutting-edge technology and creative vision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30 overflow-hidden relative">
                
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  {Array.from({ length: 8 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-br ${project.gradient} shadow-lg`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <Badge
                      variant="outline"
                      className={`${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 border-green-500/40 text-green-400' 
                          : project.status === 'In Progress'
                          ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                          : 'bg-blue-500/20 border-blue-500/40 text-blue-400'
                      } font-['Cormorant_Garamond']`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-3 font-['Playfair_Display'] group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-lg font-['Cormorant_Garamond'] leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-400 text-sm font-['Cormorant_Garamond'] mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-slate-800/30 border-blue-500/40 text-cyan-400 hover:bg-blue-500/20 transition-all duration-300 font-['Cormorant_Garamond'] backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pt-4 border-t border-blue-500/20">
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Code className="w-4 h-4 text-blue-400" />
                      <span>{project.stats.contributors}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span>{project.stats.views}</span>
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 hover:from-blue-500/30 hover:to-cyan-400/30 transition-all duration-300 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/vivekpillai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-4 rounded-full text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 font-['Cormorant_Garamond'] text-lg backdrop-blur-sm"
          >
            <Github className="w-6 h-6" />
            <span>Explore More Creations</span>
            <Rocket className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}