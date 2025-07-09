import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Database, Zap, Globe, Server, Terminal, 
  Sparkles, TrendingUp, Award, Star, ChevronRight,
  Cpu, Layers, Shield, Rocket
} from 'lucide-react';
import { 
  SiReact, SiJavascript, SiPython, SiDocker, SiGit, SiMysql, 
  SiMongodb, SiPandas, SiNumpy, SiPostman, SiHtml5, SiCss3,
  SiNodedotjs, SiTensorflow, SiFastapi, SiRedis
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  level: number;
  color: string;
  category: string;
  experience: string;
  projects: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  description: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-400 to-purple-600',
      description: 'Creating stunning user interfaces with modern frameworks',
      skills: [
        { name: 'React.js', icon: SiReact, level: 90, color: 'text-blue-400', category: 'Frontend', experience: '2+ years', projects: 15 },
        { name: 'JavaScript', icon: SiJavascript, level: 85, color: 'text-yellow-400', category: 'Frontend', experience: '2+ years', projects: 20 },
        { name: 'HTML5', icon: SiHtml5, level: 95, color: 'text-orange-500', category: 'Frontend', experience: '3+ years', projects: 25 },
        { name: 'CSS3', icon: SiCss3, level: 88, color: 'text-blue-500', category: 'Frontend', experience: '3+ years', projects: 25 },
        { name: 'Node.js', icon: SiNodedotjs, level: 80, color: 'text-green-400', category: 'Frontend', experience: '1+ years', projects: 8 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-blue-600',
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Python', icon: SiPython, level: 92, color: 'text-yellow-400', category: 'Backend', experience: '2+ years', projects: 18 },
        { name: 'FastAPI', icon: SiFastapi, level: 85, color: 'text-green-400', category: 'Backend', experience: '1+ years', projects: 12 },
        { name: 'Node.js', icon: SiNodedotjs, level: 78, color: 'text-green-400', category: 'Backend', experience: '1+ years', projects: 10 },
        { name: 'Docker', icon: SiDocker, level: 75, color: 'text-blue-400', category: 'Backend', experience: '1+ years', projects: 8 },
        { name: 'Redis', icon: SiRedis, level: 70, color: 'text-red-400', category: 'Backend', experience: '6 months', projects: 5 },
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-purple-400 to-pink-600',
      description: 'Managing data with modern database systems',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 88, color: 'text-blue-500', category: 'Database', experience: '2+ years', projects: 15 },
        { name: 'MongoDB', icon: SiMongodb, level: 82, color: 'text-green-400', category: 'Database', experience: '1+ years', projects: 10 },
        { name: 'PostgreSQL', icon: Database, level: 80, color: 'text-blue-300', category: 'Database', experience: '1+ years', projects: 8 },
        { name: 'SQLite', icon: Database, level: 90, color: 'text-gray-400', category: 'Database', experience: '2+ years', projects: 12 },
      ]
    },
    {
      title: 'Data Science & AI',
      icon: Brain,
      color: 'from-pink-400 to-red-600',
      description: 'Analyzing data and building intelligent systems',
      skills: [
        { name: 'Pandas', icon: SiPandas, level: 85, color: 'text-blue-600', category: 'Data Science', experience: '1+ years', projects: 10 },
        { name: 'NumPy', icon: SiNumpy, level: 82, color: 'text-blue-400', category: 'Data Science', experience: '1+ years', projects: 12 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 75, color: 'text-orange-400', category: 'Data Science', experience: '8 months', projects: 6 },
        { name: 'Matplotlib', icon: Brain, level: 80, color: 'text-purple-400', category: 'Data Science', experience: '1+ years', projects: 8 },
      ]
    },
    {
      title: 'Development Tools',
      icon: Terminal,
      color: 'from-cyan-400 to-blue-600',
      description: 'Essential tools for modern development workflow',
      skills: [
        { name: 'Git', icon: SiGit, level: 90, color: 'text-red-500', category: 'Tools', experience: '2+ years', projects: 25 },
        { name: 'VS Code', icon: Code, level: 95, color: 'text-blue-500', category: 'Tools', experience: '3+ years', projects: 30 },
        { name: 'Postman', icon: SiPostman, level: 85, color: 'text-orange-400', category: 'Tools', experience: '2+ years', projects: 20 },
        { name: 'Docker', icon: SiDocker, level: 78, color: 'text-blue-400', category: 'Tools', experience: '1+ years', projects: 8 },
      ]
    }
  ];

  const achievements = [
    { icon: Award, title: 'Full Stack Expert', description: 'Completed 25+ projects', color: 'text-yellow-400' },
    { icon: TrendingUp, title: 'Fast Learner', description: '5 new technologies in 2024', color: 'text-green-400' },
    { icon: Star, title: 'Open Source', description: '50+ GitHub contributions', color: 'text-purple-400' },
    { icon: Rocket, title: 'Innovation', description: '10+ creative solutions', color: 'text-pink-400' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECHNICAL SKILLS
            </span>
            <Sparkles className="inline-block ml-4 text-yellow-400 animate-pulse" />
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mt-6 font-['Inter'] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mastering cutting-edge technologies to build the future
          </motion.p>
        </div>

        {/* Skills Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-['Orbitron'] transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-800/50 border border-gray-600 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Skills Category */}
        <motion.div 
          key={activeCategory}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Orbitron']">
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-gray-300 text-lg font-['Inter']">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 p-6 group-hover:shadow-xl group-hover:shadow-purple-500/10">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                          <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold font-['Orbitron']">{skill.name}</h4>
                          <p className="text-gray-400 text-sm font-['Fira_Code']">{skill.experience}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/40"
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Proficiency</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-700"
                        style={{
                          background: 'linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2))'
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Projects: {skill.projects}</span>
                        <span className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Growing
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-['Orbitron'] text-center flex items-center justify-center">
            <Award className="mr-3 text-yellow-400" />
            Achievements & Milestones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 p-6 text-center group-hover:shadow-xl group-hover:shadow-purple-500/10">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-500/20 transition-colors">
                        <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                      </div>
                    </div>
                    <h4 className="text-white font-bold font-['Orbitron'] mb-2">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm font-['Inter']">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 p-8 backdrop-blur-sm">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron'] flex items-center justify-center">
                <Layers className="mr-3 text-purple-400" />
                Core Specializations
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[
                  'Full Stack Development',
                  'API Development with FastAPI',
                  'Data Analysis & Visualization',
                  'Database Design & Management',
                  'Python Programming',
                  'RESTful Web Services'
                ].map((specialization, index) => (
                  <motion.div
                    key={specialization}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={skillsVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-purple-500/20 text-purple-300 border-purple-500/40 px-4 py-2 text-sm hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                      {specialization}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-300 font-['Inter'] flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Always learning, always growing, always innovating
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}