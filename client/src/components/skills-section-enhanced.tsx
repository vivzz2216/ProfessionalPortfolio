import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch, 
  Terminal,
  Layers,
  Zap,
  Brain,
  Shield,
  Cloud,
  Sparkles,
  Star,
  Hexagon
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  color: string;
  category: string;
  glowColor: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400', category: 'Languages', glowColor: 'shadow-yellow-400/50' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-400', category: 'Languages', glowColor: 'shadow-blue-400/50' },
  { name: 'Python', icon: Code, color: 'text-green-400', category: 'Languages', glowColor: 'shadow-green-400/50' },
  { name: 'Java', icon: Code, color: 'text-red-400', category: 'Languages', glowColor: 'shadow-red-400/50' },
  
  // Frontend
  { name: 'React', icon: Globe, color: 'text-cyan-400', category: 'Frontend', glowColor: 'shadow-cyan-400/50' },
  { name: 'Next.js', icon: Globe, color: 'text-white', category: 'Frontend', glowColor: 'shadow-white/50' },
  { name: 'Vue.js', icon: Globe, color: 'text-green-400', category: 'Frontend', glowColor: 'shadow-green-400/50' },
  { name: 'Tailwind CSS', icon: Layers, color: 'text-teal-400', category: 'Frontend', glowColor: 'shadow-teal-400/50' },
  
  // Backend
  { name: 'Node.js', icon: Server, color: 'text-green-400', category: 'Backend', glowColor: 'shadow-green-400/50' },
  { name: 'Express', icon: Server, color: 'text-gray-400', category: 'Backend', glowColor: 'shadow-gray-400/50' },
  { name: 'FastAPI', icon: Zap, color: 'text-teal-400', category: 'Backend', glowColor: 'shadow-teal-400/50' },
  { name: 'Django', icon: Server, color: 'text-green-600', category: 'Backend', glowColor: 'shadow-green-600/50' },
  
  // Database
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-400', category: 'Database', glowColor: 'shadow-blue-400/50' },
  { name: 'MongoDB', icon: Database, color: 'text-green-400', category: 'Database', glowColor: 'shadow-green-400/50' },
  { name: 'Redis', icon: Database, color: 'text-red-400', category: 'Database', glowColor: 'shadow-red-400/50' },
  
  // Tools & Others
  { name: 'Git', icon: GitBranch, color: 'text-orange-400', category: 'Tools', glowColor: 'shadow-orange-400/50' },
  { name: 'Docker', icon: Cloud, color: 'text-blue-400', category: 'Tools', glowColor: 'shadow-blue-400/50' },
  { name: 'AWS', icon: Cloud, color: 'text-yellow-400', category: 'Tools', glowColor: 'shadow-yellow-400/50' },
  { name: 'Linux', icon: Terminal, color: 'text-yellow-400', category: 'Tools', glowColor: 'shadow-yellow-400/50' },
  
  // Mobile & AI
  { name: 'React Native', icon: Smartphone, color: 'text-blue-400', category: 'Mobile', glowColor: 'shadow-blue-400/50' },
  { name: 'Machine Learning', icon: Brain, color: 'text-purple-400', category: 'AI/ML', glowColor: 'shadow-purple-400/50' },
  { name: 'Data Analysis', icon: Brain, color: 'text-pink-400', category: 'AI/ML', glowColor: 'shadow-pink-400/50' },
  { name: 'Cybersecurity', icon: Shield, color: 'text-red-400', category: 'Security', glowColor: 'shadow-red-400/50' }
];

const categories = [
  { name: 'Languages', icon: Code, color: 'from-yellow-400 to-orange-400' },
  { name: 'Frontend', icon: Globe, color: 'from-cyan-400 to-blue-400' }, 
  { name: 'Backend', icon: Server, color: 'from-green-400 to-teal-400' },
  { name: 'Database', icon: Database, color: 'from-blue-400 to-indigo-400' },
  { name: 'Tools', icon: GitBranch, color: 'from-orange-400 to-red-400' },
  { name: 'Mobile', icon: Smartphone, color: 'from-blue-400 to-purple-400' },
  { name: 'AI/ML', icon: Brain, color: 'from-purple-400 to-pink-400' },
  { name: 'Security', icon: Shield, color: 'from-red-400 to-pink-400' }
];

export default function SkillsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-neutral to-black relative overflow-hidden">
      {/* Crazy Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-portfolio-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-portfolio-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="w-8 h-8 text-portfolio-accent" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mind-Blowing Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 font-['Cinzel'] relative z-10">
              <span className="bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-primary bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/30 to-portfolio-accent/30 blur-3xl animate-pulse"></div>
          </motion.div>
          
          <motion.div
            animate={{ 
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-6"
          />
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-['Cormorant_Garamond'] leading-relaxed">
            Mastering the art of code with cutting-edge technologies, each skill forged through countless hours of dedication and innovation.
          </p>
        </motion.div>

        {/* Hexagonal Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                className="relative bg-gradient-to-br from-portfolio-secondary/60 to-portfolio-neutral/40 backdrop-blur-lg rounded-2xl p-8 border border-portfolio-primary/30 hover:border-portfolio-accent/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-portfolio-primary/30"
              >
                {/* Hexagonal Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-portfolio-primary/20 to-portfolio-accent/20 rounded-2xl"></div>
                </div>
                
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-2xl`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white font-['Playfair_Display'] mb-2">
                    {category.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto rounded-full"></div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === category.name).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-portfolio-secondary/30 backdrop-blur-sm border border-portfolio-primary/20 hover:border-portfolio-accent/40 transition-all duration-300 group-hover:shadow-lg cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-lg bg-gradient-to-r from-portfolio-secondary/50 to-portfolio-neutral/50 shadow-lg ${skill.glowColor}`}
                      >
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <span className="text-white font-semibold font-['Cormorant_Garamond'] text-lg group-hover:text-portfolio-accent transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <Star className="w-4 h-4 text-portfolio-accent" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-portfolio-accent rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Epic Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-center relative"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotateZ: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block"
          >
            <p className="text-3xl text-portfolio-accent font-['Playfair_Display'] italic relative z-10">
              "Code is poetry written in logic, and I am the poet of possibilities."
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 blur-2xl animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}