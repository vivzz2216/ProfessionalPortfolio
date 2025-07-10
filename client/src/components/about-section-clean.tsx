import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap, Award, Mail, Download } from 'lucide-react';
// import profileImage from '@assets/vivek_1752099066781.jpg';
// import resumePDF from '@assets/vivekpillai_resume_1752099080856.pdf';

export default function AboutSectionClean() {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleDownloadResume = () => {
    // Create a temporary link for resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be your actual resume path
    link.download = 'Vivek_Pillai_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Final-year IT Engineering student passionate about creating innovative solutions
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                          alt="Vivek Pillai" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Basic Info */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Vivek Pillai</h3>
                    <p className="text-blue-600 font-medium mb-4">IT Engineering Student</p>
                    
                    {/* Info Cards */}
                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-slate-600">University</span>
                        </div>
                        <span className="text-sm font-medium text-slate-800">SFIT</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-slate-600">Year</span>
                        </div>
                        <span className="text-sm font-medium text-slate-800">Final Year</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-slate-600">Achievement</span>
                        </div>
                        <span className="text-sm font-medium text-slate-800">Colloquium 2024 Winner</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6 w-full">
                      <button 
                        onClick={handleDownloadResume}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Resume</span>
                      </button>
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <User className="w-6 h-6 text-blue-600 mr-3" />
                    Professional Summary
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Final-year Information Technology student with a strong foundation in <span className="text-blue-600 font-medium">Full Stack Development</span>, 
                    API development using <span className="text-blue-600 font-medium">FastAPI</span>, and data handling with <span className="text-blue-600 font-medium">Python</span> and databases. 
                    Passionate about building scalable applications and analyzing data effectively.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Full Stack Development',
                      'API Development', 
                      'Data Analysis',
                      'Python Programming',
                      'Database Management',
                      'RESTful Services'
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 py-2 px-4 text-sm font-medium">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <Award className="w-6 h-6 text-blue-600 mr-3" />
                    Goals & Vision
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Aspiring to join top-tier technology companies where I can contribute to innovative projects 
                    and grow as a professional developer. I'm particularly interested in creating solutions that 
                    make a meaningful impact on users' lives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}