import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Users, Eye, Zap, Award, Rocket, Code, Database, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  stats: {
    stars?: number;
    contributors?: number;
    views?: number;
  };
  categoryIcon: any;
  categoryColor: string;
  glowColor: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring user authentication, payment integration, inventory management, and real-time analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    category: 'Full Stack',
    status: 'Completed',
    liveDemo: 'https://ecommerce-demo.com',
    github: 'https://github.com/vivekpillai/ecommerce',
    stats: { stars: 85, contributors: 4, views: 2100 },
    categoryIcon: Code,
    categoryColor: 'from-blue-400 to-purple-400',
    glowColor: 'shadow-blue-400/50'
  },
  {
    id: '2',
    title: 'AI Data Analytics Dashboard',
    description: 'Machine learning powered analytics platform',
    longDescription: 'Advanced analytics dashboard leveraging machine learning algorithms to provide predictive insights and data visualization for business intelligence.',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'React', 'D3.js'],
    category: 'AI/ML',
    status: 'Completed',
    liveDemo: 'https://analytics-ai.com',
    github: 'https://github.com/vivekpillai/ai-analytics',
    stats: { stars: 120, contributors: 6, views: 3200 },
    categoryIcon: Brain,
    categoryColor: 'from-purple-400 to-pink-400',
    glowColor: 'shadow-purple-400/50'
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    description: 'Scalable messaging platform with WebSocket integration',
    longDescription: 'A real-time chat application supporting multiple rooms, file sharing, message encryption, and user presence indicators built with modern web technologies.',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'JWT'],
    category: 'Full Stack',
    status: 'Completed',
    liveDemo: 'https://chat-app-demo.com',
    github: 'https://github.com/vivekpillai/chat-app',
    stats: { stars: 95, contributors: 3, views: 1800 },
    categoryIcon: Zap,
    categoryColor: 'from-green-400 to-teal-400',
    glowColor: 'shadow-green-400/50'
  },
  {
    id: '4',
    title: 'Cybersecurity Monitoring Tool',
    description: 'Network security analysis and threat detection system',
    longDescription: 'A comprehensive cybersecurity tool that monitors network traffic, detects anomalies, and provides real-time alerts for potential security threats.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Docker'],
    category: 'Security',
    status: 'In Progress',
    liveDemo: 'https://security-monitor.com',
    github: 'https://github.com/vivekpillai/security-tool',
    stats: { stars: 67, contributors: 2, views: 1200 },
    categoryIcon: Award,
    categoryColor: 'from-red-400 to-orange-400',
    glowColor: 'shadow-red-400/50'
  },
  {
    id: '5',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform health and fitness monitoring app',
    longDescription: 'A comprehensive fitness tracking application with workout planning, nutrition tracking, progress monitoring, and social features for motivation.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    category: 'Mobile',
    status: 'Completed',
    liveDemo: 'https://fitness-tracker-app.com',
    github: 'https://github.com/vivekpillai/fitness-tracker',
    stats: { stars: 75, contributors: 2, views: 1500 },
    categoryIcon: Rocket,
    categoryColor: 'from-cyan-400 to-blue-400',
    glowColor: 'shadow-cyan-400/50'
  },
  {
    id: '6',
    title: 'Cloud Infrastructure Manager',
    description: 'Automated cloud resource management platform',
    longDescription: 'An intelligent cloud infrastructure management tool that automates resource provisioning, monitoring, and optimization across multiple cloud providers.',
    technologies: ['TypeScript', 'AWS', 'Terraform', 'React', 'GraphQL'],
    category: 'DevOps',
    status: 'Prototype',
    liveDemo: 'https://cloud-manager.com',
    github: 'https://github.com/vivekpillai/cloud-manager',
    stats: { stars: 45, contributors: 1, views: 800 },
    categoryIcon: Database,
    categoryColor: 'from-yellow-400 to-orange-400',
    glowColor: 'shadow-yellow-400/50'
  }
];

const statusColors = {
  'Completed': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30',
  'In Progress': 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30',
  'Prototype': 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30'
};

export default function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-black via-portfolio-neutral to-portfolio-secondary relative overflow-hidden">
      {/* Insane Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-72 h-72 bg-portfolio-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-portfolio-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-primary/20 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-portfolio-accent/50 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Epic Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotateX: [0, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 font-['Cinzel'] relative z-10">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">
                Project Showcase
              </span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 blur-3xl animate-pulse"></div>
          </motion.div>
          
          <motion.div
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-2 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-8 rounded-full"
            style={{ width: '200px' }}
          />
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-['Cormorant_Garamond'] leading-relaxed">
            Behold the digital masterpieces born from passion, precision, and countless nights of coding brilliance.
          </p>
        </motion.div>

        {/* Mind-Blowing Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 100
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <Card className={`h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30 overflow-hidden`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse`}></div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-portfolio-accent rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.categoryColor} flex items-center justify-center shadow-lg`}
                      >
                        <project.categoryIcon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <Badge className={`${statusColors[project.status]} font-['Cormorant_Garamond'] text-sm backdrop-blur-sm`}>
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
                  
                  <CardContent className="pt-0 relative z-10">
                    <div className="mb-6">
                      <p className="text-gray-400 text-sm font-['Cormorant_Garamond'] leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 hover:from-blue-500/30 hover:to-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 backdrop-blur-sm"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-blue-500/20">
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
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{project.stats.contributors}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye className="w-4 h-4 text-green-400" />
                        <span>{project.stats.views}</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Epic Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotateZ: [0, 2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block mb-8"
          >
            <p className="text-3xl text-portfolio-accent font-['Playfair_Display'] italic relative z-10">
              "Innovation is the currency of the future, and these are my investments."
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 blur-2xl animate-pulse"></div>
          </motion.div>
          
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