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
import { Code, Brain, Zap, Star } from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  color: string;
  category: string;
  level: number;
  glow: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'Languages', level: 95, glow: 'shadow-yellow-400/50' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', category: 'Languages', level: 90, glow: 'shadow-blue-400/50' },
  { name: 'Python', icon: SiPython, color: 'text-green-400', category: 'Languages', level: 88, glow: 'shadow-green-400/50' },
  { name: 'Java', icon: Code, color: 'text-red-400', category: 'Languages', level: 85, glow: 'shadow-red-400/50' },
  
  // Frontend
  { name: 'React', icon: SiReact, color: 'text-cyan-400', category: 'Frontend', level: 92, glow: 'shadow-cyan-400/50' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', category: 'Frontend', level: 88, glow: 'shadow-white/50' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400', category: 'Frontend', level: 82, glow: 'shadow-green-400/50' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', category: 'Frontend', level: 95, glow: 'shadow-teal-400/50' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', category: 'Backend', level: 90, glow: 'shadow-green-400/50' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400', category: 'Backend', level: 88, glow: 'shadow-gray-400/50' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400', category: 'Backend', level: 85, glow: 'shadow-teal-400/50' },
  { name: 'Django', icon: SiDjango, color: 'text-green-600', category: 'Backend', level: 80, glow: 'shadow-green-600/50' },
  
  // Database
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', category: 'Database', level: 85, glow: 'shadow-blue-400/50' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', category: 'Database', level: 82, glow: 'shadow-green-400/50' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-400', category: 'Database', level: 78, glow: 'shadow-red-400/50' },
  
  // Tools
  { name: 'Git', icon: SiGit, color: 'text-orange-400', category: 'Tools', level: 90, glow: 'shadow-orange-400/50' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400', category: 'Tools', level: 80, glow: 'shadow-blue-400/50' },
  { name: 'AWS', icon: SiAmazon, color: 'text-yellow-400', category: 'Tools', level: 75, glow: 'shadow-yellow-400/50' },
  { name: 'Linux', icon: SiLinux, color: 'text-yellow-400', category: 'Tools', level: 85, glow: 'shadow-yellow-400/50' },
  
  // AI/ML
  { name: 'Machine Learning', icon: Brain, color: 'text-purple-400', category: 'AI/ML', level: 75, glow: 'shadow-purple-400/50' },
  { name: 'Data Analysis', icon: Brain, color: 'text-pink-400', category: 'AI/ML', level: 80, glow: 'shadow-pink-400/50' }
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {[<Code />, <Zap />, <Star />][Math.floor(Math.random() * 3)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Cinzel'] relative z-10">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">
                Technical Skills
              </span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-3xl animate-pulse"></div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        {/* Creative Skills Display */}
        <div className="relative">
          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl relative"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="text-white font-bold text-xl font-['Cinzel']"
              >
                VP
              </motion.div>
              
              {/* Orbiting rings */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping"></div>
              <div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-ping delay-1000"></div>
            </motion.div>
          </motion.div>

          {/* Skills in Orbital Pattern */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[800px] h-[800px]">
              {skills.map((skill, index) => {
                const angle = (index / skills.length) * 360;
                const radius = 250 + (index % 3) * 50; // Varying orbits
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      zIndex: 50,
                      rotateY: 360,
                    }}
                    className="absolute group cursor-pointer"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x - 40}px, ${y - 40}px)`,
                    }}
                  >
                    {/* Skill Icon Container */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-2 border-blue-500/30 group-hover:border-cyan-400/70 flex items-center justify-center transition-all duration-500 ${skill.glow} group-hover:shadow-2xl`}
                    >
                      <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-125 transition-all duration-300`} />
                    </motion.div>

                    {/* Skill Info Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-24 left-1/2 transform -translate-x-1/2 pointer-events-none"
                    >
                      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-lg p-3 border border-blue-500/30 min-w-[120px]">
                        <div className="text-center">
                          <p className="text-white font-bold text-sm font-['Playfair_Display'] mb-1">
                            {skill.name}
                          </p>
                          <p className="text-gray-400 text-xs font-['Cormorant_Garamond'] mb-2">
                            {skill.category}
                          </p>
                          
                          {/* Skill Level Bar */}
                          <div className="w-full bg-slate-700 rounded-full h-1.5 mb-1">
                            <motion.div
                              className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                              initial={{ width: 0 }}
                              whileHover={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                          <p className="text-cyan-400 text-xs font-bold">
                            {skill.level}%
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Line to Center */}
                    <motion.div
                      className="absolute top-10 left-10 w-px bg-gradient-to-t from-blue-500/20 to-transparent"
                      style={{
                        height: Math.sqrt(x*x + y*y),
                        transformOrigin: 'top',
                        transform: `rotate(${Math.atan2(y, x) * 180 / Math.PI + 90}deg)`,
                      }}
                      initial={{ scaleY: 0 }}
                      animate={isVisible ? { scaleY: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Floating Skill Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {['Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'AI/ML'].map((category, index) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-full border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <span className="text-white font-semibold font-['Cormorant_Garamond']">
                  {category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}