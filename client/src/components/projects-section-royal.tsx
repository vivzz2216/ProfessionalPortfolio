import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Users, Eye } from 'lucide-react';
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
    stats: { stars: 85, contributors: 4, views: 2100 }
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
    stats: { stars: 120, contributors: 6, views: 3200 }
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
    stats: { stars: 95, contributors: 3, views: 1800 }
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
    stats: { stars: 67, contributors: 2, views: 1200 }
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
    stats: { stars: 75, contributors: 2, views: 1500 }
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
    stats: { stars: 45, contributors: 1, views: 800 }
  }
];

const statusColors = {
  'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
  'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Prototype': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
};

export default function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-black via-portfolio-neutral to-portfolio-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-portfolio-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-['Cinzel']">
            Featured <span className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            A curated collection of innovative solutions, each demonstrating expertise in modern technologies and problem-solving capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-portfolio-secondary/40 to-portfolio-neutral/20 backdrop-blur-lg border-portfolio-primary/20 hover:border-portfolio-accent/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-portfolio-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${statusColors[project.status]} font-['Cormorant_Garamond'] text-sm`}>
                      {project.status}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-portfolio-secondary/30 hover:bg-portfolio-primary/20 transition-colors duration-300 group-hover:scale-110"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-portfolio-secondary/30 hover:bg-portfolio-accent/20 transition-colors duration-300 group-hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2 font-['Playfair_Display'] group-hover:text-portfolio-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-lg font-['Cormorant_Garamond']">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm font-['Cormorant_Garamond'] leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-portfolio-secondary/20 border-portfolio-primary/30 text-portfolio-accent hover:bg-portfolio-primary/20 transition-colors duration-300 font-['Cormorant_Garamond']"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-portfolio-primary/20">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span>{project.stats.contributors}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-green-400" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-portfolio-accent font-['Playfair_Display'] italic mb-4">
            "Innovation distinguishes between a leader and a follower."
          </p>
          <a
            href="https://github.com/vivekpillai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-portfolio-primary to-portfolio-accent px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 font-['Cormorant_Garamond']"
          >
            <Github className="w-5 h-5" />
            <span>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}