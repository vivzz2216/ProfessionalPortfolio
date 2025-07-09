import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Code2, Zap, Globe, Award, GraduationCap, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: summaryRef, isVisible: summaryVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-secondary to-portfolio-neutral relative overflow-hidden">
      {/* Advanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-portfolio-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 font-['Orbitron'] ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="glow-text">DEVELOPER PROFILE</span>
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Main Profile Card */}
        <div ref={profileRef} className={`hologram-effect rounded-2xl p-8 md:p-12 mb-16 transition-all duration-1000 ${
          profileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-portfolio-secondary rounded-full flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                      alt="Vivek Pillai - IT Engineer" 
                      className="w-56 h-56 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-portfolio-accent rounded-full flex items-center justify-center animate-bounce">
                  <Code2 className="w-8 h-8 text-portfolio-secondary" />
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2 font-['Orbitron']">VIVEK PILLAI</h3>
                  <p className="text-xl text-portfolio-accent font-['Orbitron']">Full-Stack Developer | Data Analyst | IT Engineer</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-portfolio-accent text-sm font-bold">20</span>
                      </div>
                      <span className="text-gray-300 font-['Fira_Code']">Years Old</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-portfolio-primary" />
                      <span className="text-gray-300 font-['Fira_Code']">B.E. IT Final Year</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-portfolio-accent" />
                      <span className="text-gray-300 font-['Fira_Code']">SFIT College</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-portfolio-primary" />
                      <span className="text-gray-300 font-['Fira_Code']">+91 7249292743</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-portfolio-accent" />
                      <span className="text-gray-300 font-['Fira_Code']">pillaivivek16@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-5 h-5 text-portfolio-primary" />
                      <a 
                        href="https://linkedin.com/in/vivek-pillai-281a68253" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 font-['Fira_Code'] hover:text-portfolio-accent transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div ref={summaryRef} className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-200 ${
          summaryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="hologram-effect p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-portfolio-accent mb-6 font-['Orbitron'] flex items-center">
              <Award className="mr-3 w-6 h-6" />
              Professional Summary
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed font-['Inter']">
              Final-year Information Technology student with a strong foundation in <span className="text-portfolio-accent">Full Stack Development</span>, 
              API development using <span className="text-portfolio-accent">FastAPI</span>, and data handling with <span className="text-portfolio-accent">Python</span> and databases. 
              Passionate about building scalable applications and analyzing data effectively.
            </p>
          </div>

          <div className="hologram-effect p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-portfolio-accent mb-6 font-['Orbitron'] flex items-center">
              <Zap className="mr-3 w-6 h-6" />
              Core Competencies
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Full Stack Development',
                'API Development',
                'Data Analysis',
                'Python Programming',
                'Database Management',
                'RESTful Services'
              ].map((skill, index) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-['Fira_Code']">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div ref={infoRef} className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
          infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '#';
              link.download = 'Vivek_Pillai_Resume.pdf';
              link.click();
            }}
            className="neon-border hologram-effect px-8 py-4 rounded-xl text-white font-['Orbitron'] font-semibold tracking-wider uppercase hover:scale-105 transition-all duration-300 flex items-center group"
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download Resume
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-portfolio-primary hover:bg-portfolio-accent text-white px-8 py-4 rounded-xl font-['Orbitron'] font-semibold tracking-wider uppercase hover:scale-105 transition-all duration-300 flex items-center group"
          >
            <Mail className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
