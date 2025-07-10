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
  Cloud
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400', category: 'Languages' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-400', category: 'Languages' },
  { name: 'Python', icon: Code, color: 'text-green-400', category: 'Languages' },
  { name: 'Java', icon: Code, color: 'text-red-400', category: 'Languages' },
  
  // Frontend
  { name: 'React', icon: Globe, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Next.js', icon: Globe, color: 'text-white', category: 'Frontend' },
  { name: 'Vue.js', icon: Globe, color: 'text-green-400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Layers, color: 'text-teal-400', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: Server, color: 'text-green-400', category: 'Backend' },
  { name: 'Express', icon: Server, color: 'text-gray-400', category: 'Backend' },
  { name: 'FastAPI', icon: Zap, color: 'text-teal-400', category: 'Backend' },
  { name: 'Django', icon: Server, color: 'text-green-600', category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-400', category: 'Database' },
  { name: 'MongoDB', icon: Database, color: 'text-green-400', category: 'Database' },
  { name: 'Redis', icon: Database, color: 'text-red-400', category: 'Database' },
  
  // Tools & Others
  { name: 'Git', icon: GitBranch, color: 'text-orange-400', category: 'Tools' },
  { name: 'Docker', icon: Cloud, color: 'text-blue-400', category: 'Tools' },
  { name: 'AWS', icon: Cloud, color: 'text-yellow-400', category: 'Tools' },
  { name: 'Linux', icon: Terminal, color: 'text-yellow-400', category: 'Tools' },
  
  // Mobile & AI
  { name: 'React Native', icon: Smartphone, color: 'text-blue-400', category: 'Mobile' },
  { name: 'Machine Learning', icon: Brain, color: 'text-purple-400', category: 'AI/ML' },
  { name: 'Data Analysis', icon: Brain, color: 'text-pink-400', category: 'AI/ML' },
  { name: 'Cybersecurity', icon: Shield, color: 'text-red-400', category: 'Security' }
];

const categories = [
  'Languages',
  'Frontend', 
  'Backend',
  'Database',
  'Tools',
  'Mobile',
  'AI/ML',
  'Security'
];

export default function SkillsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-neutral to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-portfolio-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Technical <span className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">Mastery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            A comprehensive arsenal of modern technologies and frameworks, mastered through years of dedicated practice and real-world application.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-portfolio-secondary/40 to-portfolio-neutral/20 backdrop-blur-lg rounded-2xl p-6 border border-portfolio-primary/20 hover:border-portfolio-accent/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display'] text-center">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (index * 0.1) }}
                    className="flex items-center space-x-4 p-3 rounded-lg bg-portfolio-secondary/20 backdrop-blur-sm border border-portfolio-primary/10 hover:border-portfolio-accent/20 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-lg bg-portfolio-secondary/30 group-hover:bg-portfolio-primary/20 transition-colors duration-300`}>
                      <skill.icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <span className="text-white font-medium font-['Cormorant_Garamond'] text-lg group-hover:text-portfolio-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-portfolio-accent font-['Playfair_Display'] italic">
            "Excellence is not a skill, it's an attitude towards continuous learning."
          </p>
        </motion.div>
      </div>
    </section>
  );
}