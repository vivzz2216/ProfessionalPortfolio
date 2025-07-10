import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Code2, Zap, Globe, Award, GraduationCap, Mail, Phone, MapPin, Download, ExternalLink, Calendar, Brain, Database, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import profileImage from '@assets/vivek_1752099066781.jpg';
import resumePDF from '@assets/vivekpillai_resume_1752099080856.pdf';

export default function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: summaryRef, isVisible: summaryVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Advanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-portfolio-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 font-['Cinzel'] ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond'] transition-all duration-700 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Passionate developer crafting innovative solutions with modern technologies
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-4 rounded-full transition-all duration-700 delay-500 ${
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
                      src={profileImage}
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
                  <h3 className="text-4xl font-bold text-white mb-2 font-['Cinzel']">VIVEK PILLAI</h3>
                  <p className="text-xl text-portfolio-accent font-['Playfair_Display']">Full-Stack Developer | Data Analyst | IT Engineer</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Cormorant_Garamond']">Mumbai, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Cormorant_Garamond']">SFIT - IT Engineering</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Fira_Code']">pillaivivek16@gmail.com</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Fira_Code']">+91 7249292743</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Fira_Code']">Final Year Student</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-portfolio-accent" />
                      </div>
                      <span className="text-gray-300 font-['Fira_Code']">Colloquium 2024 Winner</span>
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
            <h4 className="text-2xl font-bold text-portfolio-accent mb-6 font-['Playfair_Display'] flex items-center">
              <Award className="mr-3 w-6 h-6" />
              Professional Summary
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed font-['Cormorant_Garamond']">
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
              link.href = resumePDF;
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
