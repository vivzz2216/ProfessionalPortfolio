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
  SiPython,
  SiMysql
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  color: string;
  category: string;
}

const skillCategories = [
  {
    title: "Frontend",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400', category: 'Frontend' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', category: 'Frontend' },
      { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400', category: 'Frontend' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400', category: 'Frontend' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', category: 'Frontend' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'Frontend' }
    ]
  },
  {
    title: "Backend", 
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', category: 'Backend' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400', category: 'Backend' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400', category: 'Backend' },
      { name: 'Django', icon: SiDjango, color: 'text-green-600', category: 'Backend' },
      { name: 'Python', icon: SiPython, color: 'text-green-400', category: 'Backend' }
    ]
  },
  {
    title: "Database",
    gradient: "from-emerald-500 to-teal-500", 
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', category: 'Database' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', category: 'Database' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', category: 'Database' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400', category: 'Database' }
    ]
  },
  {
    title: "DevOps",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-400', category: 'DevOps' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400', category: 'DevOps' },
      { name: 'AWS', icon: SiAmazon, color: 'text-yellow-400', category: 'DevOps' },
      { name: 'Linux', icon: SiLinux, color: 'text-yellow-400', category: 'DevOps' }
    ]
  }
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Cinzel']">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Mastering technologies to build innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-pink-400/50 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-['Playfair_Display'] mb-2`}>
                  {category.title}
                </h3>
                <div className={`w-16 h-0.5 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-600/40 transition-all duration-300 group/skill"
                  >
                    <skill.icon className={`w-8 h-8 ${skill.color} mb-2 group-hover/skill:scale-125 transition-transform duration-300`} />
                    <span className="text-xs text-gray-300 text-center font-['Cormorant_Garamond'] font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '4+', label: 'Years Experience', color: 'text-purple-400' },
            { number: '10+', label: 'Technologies', color: 'text-pink-400' },
            { number: '10+', label: 'Projects Completed', color: 'text-cyan-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-pink-400/30 transition-all duration-300"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2 font-['Cinzel']`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-['Cormorant_Garamond']">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}