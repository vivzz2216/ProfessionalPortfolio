import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star, Eye } from 'lucide-react';

export default function ProjectsSectionClean() {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'Full Stack',
      status: 'Completed',
      featured: true,
      liveDemo: 'https://demo.example.com',
      github: 'https://github.com/vivek/ecommerce',
      stats: {
        stars: 45,
        forks: 12,
        views: 1200
      },
      date: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'FastAPI', 'WebSocket', 'MongoDB', 'Redux'],
      category: 'Web App',
      status: 'Completed',
      featured: true,
      liveDemo: 'https://taskapp.example.com',
      github: 'https://github.com/vivek/taskapp',
      stats: {
        stars: 32,
        forks: 8,
        views: 890
      },
      date: '2024'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics with advanced charting capabilities and real-time data processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'FastAPI', 'React', 'Chart.js', 'Pandas'],
      category: 'Data Science',
      status: 'In Progress',
      featured: false,
      liveDemo: 'https://analytics.example.com',
      github: 'https://github.com/vivek/analytics',
      stats: {
        stars: 28,
        forks: 6,
        views: 650
      },
      date: '2024'
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and load balancing capabilities built with FastAPI.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'JWT'],
      category: 'Backend',
      status: 'Completed',
      featured: false,
      liveDemo: 'https://api.example.com',
      github: 'https://github.com/vivek/api-gateway',
      stats: {
        stars: 18,
        forks: 4,
        views: 420
      },
      date: '2023'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'React Native mobile banking application with biometric authentication, real-time transactions, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
      category: 'Mobile',
      status: 'Prototype',
      featured: false,
      liveDemo: 'https://banking.example.com',
      github: 'https://github.com/vivek/banking-app',
      stats: {
        stars: 35,
        forks: 9,
        views: 780
      },
      date: '2023'
    },
    {
      id: 6,
      title: 'Smart Home IoT Platform',
      description: 'IoT platform for smart home automation with device management, scheduling, and energy monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['Python', 'Flask', 'MQTT', 'PostgreSQL', 'React'],
      category: 'IoT',
      status: 'In Progress',
      featured: true,
      liveDemo: 'https://smarthome.example.com',
      github: 'https://github.com/vivek/smart-home',
      stats: {
        stars: 22,
        forks: 5,
        views: 340
      },
      date: '2024'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Prototype': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my technical skills and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`h-full border-0 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:scale-105 ${project.featured ? 'ring-2 ring-blue-500/20' : ''}`}>
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getStatusColor(project.status)} font-medium`}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white font-medium">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-1 text-sm text-slate-600">
                          <Star className="w-4 h-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-slate-600">
                          <Users className="w-4 h-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-slate-600">
                          <Eye className="w-4 h-4" />
                          <span>{project.stats.views}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}