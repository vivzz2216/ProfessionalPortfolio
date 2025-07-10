import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiFastapi, 
  SiDjango, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiGit, 
  SiDocker, 
  SiAmazon, 
  SiLinux, 
  SiJavascript, 
  SiTypescript, 
  SiPython 
} from 'react-icons/si';
import { Code, Database, Globe, Layers, Settings, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  color: string;
  level: number;
  description: string;
}

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400', level: 95, description: 'Component-based UI development' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 90, description: 'Full-stack React framework' },
      { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400', level: 85, description: 'Progressive framework' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: 98, description: 'Utility-first CSS framework' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', level: 92, description: 'Type-safe JavaScript' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 96, description: 'Modern ES6+ development' }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    gradient: "from-purple-500 to-pink-400",
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', level: 93, description: 'JavaScript runtime' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400', level: 90, description: 'Web application framework' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400', level: 88, description: 'High-performance Python API' },
      { name: 'Django', icon: SiDjango, color: 'text-green-600', level: 82, description: 'Full-featured Python framework' },
      { name: 'Python', icon: SiPython, color: 'text-green-400', level: 90, description: 'Versatile programming language' }
    ]
  },
  {
    title: "Database & Storage",
    icon: Layers,
    gradient: "from-emerald-500 to-teal-400",
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', level: 87, description: 'Relational database' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', level: 85, description: 'Document database' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400', level: 80, description: 'In-memory data store' }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    gradient: "from-orange-500 to-red-400",
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-400', level: 92, description: 'Version control system' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400', level: 82, description: 'Containerization platform' },
      { name: 'AWS', icon: SiAmazon, color: 'text-yellow-400', level: 78, description: 'Cloud services' },
      { name: 'Linux', icon: SiLinux, color: 'text-yellow-400', level: 88, description: 'Operating system' }
    ]
  }
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Cinzel'] relative z-10">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className={`p-4 rounded-full bg-gradient-to-r ${category.gradient} mr-4`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="flex items-center space-x-4 group/skill hover:bg-slate-700/30 rounded-lg p-3 transition-all duration-300"
                  >
                    {/* Skill Icon */}
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <skill.icon className={`w-10 h-10 ${skill.color} group-hover/skill:scale-110 transition-all duration-300`} />
                    </motion.div>

                    {/* Skill Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white font-['Cormorant_Garamond']">
                          {skill.name}
                        </h4>
                        <span className="text-cyan-400 font-bold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm font-['Cormorant_Garamond'] mb-3">
                        {skill.description}
                      </p>

                      {/* Skill Level Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 2,
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {Array.from({ length: 6 }, (_, i) => (
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
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '20+', label: 'Technologies' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-cyan-400 mb-2 font-['Cinzel']"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm font-['Cormorant_Garamond']">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}