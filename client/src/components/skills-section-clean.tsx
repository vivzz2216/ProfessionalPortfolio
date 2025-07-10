import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Palette,
  GitBranch,
  Cloud,
  Shield,
  Zap,
  Monitor,
  Cpu
} from 'lucide-react';

export default function SkillsSectionClean() {
  const { elementRef, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'bg-blue-500',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'HTML/CSS', icon: '🎨' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'Next.js', icon: '▲' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'bg-blue-600',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'FastAPI', icon: '🚀' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🌐' },
        { name: 'REST APIs', icon: '🔌' },
        { name: 'GraphQL', icon: '📊' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'bg-blue-700',
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'Prisma', icon: '🔺' },
        { name: 'Drizzle ORM', icon: '💧' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'bg-blue-800',
      skills: [
        { name: 'Git', icon: '🌿' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Linux', icon: '🐧' },
        { name: 'VS Code', icon: '💻' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          className="flex items-center space-x-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition-all duration-300 group/skill"
                        >
                          <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <span className="text-slate-700 font-medium group-hover/skill:text-blue-600 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-8 flex-wrap">
                  <div className="flex items-center space-x-2">
                    <Code className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-slate-800">3+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-slate-800">50+</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-slate-800">10+</div>
                      <div className="text-sm text-slate-600">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}