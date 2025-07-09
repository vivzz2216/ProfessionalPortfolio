import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Brain, Code, Database, Zap, Globe, Server, Terminal } from 'lucide-react';
import { SiReact, SiJavascript, SiPython, SiDocker, SiGit, SiMysql, SiMongodb, SiPandas, SiNumpy, SiPostman, SiHtml5, SiCss3 } from 'react-icons/si';

export default function SkillsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.3 });

  const webDevelopmentSkills = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
    { name: 'FastAPI', icon: Server, color: 'text-green-400' },
    { name: 'RESTful APIs', icon: Code, color: 'text-purple-400' }
  ];

  const databaseSkills = [
    { name: 'SQLite', icon: Database, color: 'text-blue-300' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' }
  ];

  const dataAnalysisSkills = [
    { name: 'Pandas', icon: SiPandas, color: 'text-blue-600' },
    { name: 'NumPy', icon: SiNumpy, color: 'text-blue-400' },
    { name: 'Matplotlib', icon: Brain, color: 'text-orange-400' },
    { name: 'Seaborn', icon: Code, color: 'text-green-500' },
    { name: 'Data Cleaning', icon: Database, color: 'text-purple-400' },
    { name: 'Data Visualization', icon: Zap, color: 'text-yellow-500' }
  ];

  const toolsSkills = [
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
    { name: 'VS Code', icon: Code, color: 'text-blue-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' }
  ];

  const skillCategories = [
    { 
      title: 'Web Development', 
      skills: webDevelopmentSkills, 
      color: 'portfolio-primary',
      icon: Globe,
      description: 'Full-stack web development with modern frameworks'
    },
    { 
      title: 'Database Management', 
      skills: databaseSkills, 
      color: 'portfolio-accent',
      icon: Database,
      description: 'Relational and NoSQL database systems'
    },
    { 
      title: 'Data Analysis', 
      skills: dataAnalysisSkills, 
      color: 'portfolio-primary',
      icon: Brain,
      description: 'Data processing, visualization and insights'
    },
    { 
      title: 'Development Tools', 
      skills: toolsSkills, 
      color: 'portfolio-accent',
      icon: Terminal,
      description: 'Essential development and collaboration tools'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-portfolio-neutral via-portfolio-secondary to-portfolio-neutral relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-portfolio-accent/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 font-['Orbitron'] ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="glow-text">TECHNICAL EXPERTISE</span>
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-xl text-gray-300 mt-6 font-['Inter'] transition-all duration-1000 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Comprehensive skill set spanning full-stack development, data analysis, and modern tech stack
          </p>
        </div>

        <div ref={skillsRef} className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="hologram-effect p-8 rounded-2xl group hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-full flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold text-${category.color} font-['Orbitron']`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-['Inter']">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex flex-col items-center p-4 bg-portfolio-secondary/30 rounded-xl hover:bg-portfolio-secondary/50 transition-all duration-300 group/skill border border-portfolio-primary/20 hover:border-portfolio-primary/40">
                    <skill.icon className={`w-8 h-8 ${skill.color} mb-3 group-hover/skill:scale-110 transition-transform duration-300`} />
                    <span className="text-gray-300 text-sm font-['Fira_Code'] text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="hologram-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-portfolio-accent mb-4 font-['Orbitron']">
              Core Specializations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Full Stack Development',
                'API Development with FastAPI',
                'Data Analysis & Visualization',
                'Database Design & Management',
                'Python Programming',
                'RESTful Web Services'
              ].map((specialization, index) => (
                <span 
                  key={specialization}
                  className="px-6 py-3 bg-portfolio-primary/20 border border-portfolio-primary/50 rounded-full text-portfolio-accent font-['Fira_Code'] text-sm hover:bg-portfolio-primary/30 transition-all duration-300 hover:scale-105"
                >
                  {specialization}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}