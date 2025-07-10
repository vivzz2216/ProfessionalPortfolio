import { Github, Linkedin, Mail, Phone, MapPin, Heart, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-['Orbitron']">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VIVEK PILLAI
              </span>
            </h3>
            <p className="text-gray-300 text-sm font-['Inter']">
              IT Engineering Student specializing in Full Stack Development, 
              FastAPI, and Data Analysis. Building innovative solutions for tomorrow.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-['Orbitron']">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-['Inter']"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-['Orbitron']">Specializations</h4>
            <ul className="space-y-2">
              {[
                'Full Stack Development',
                'FastAPI & Python',
                'Data Analysis',
                'Database Management',
                'Web Applications'
              ].map((skill) => (
                <li key={skill} className="text-gray-300 text-sm font-['Inter'] flex items-center">
                  <Code className="w-3 h-3 mr-2 text-purple-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-['Orbitron']">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:pillaivivek16@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-['Fira_Code']">pillaivivek16@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-['Fira_Code']">+91 7249292743</span>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/vivekpillai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/vivek-pillai-281a68253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center space-x-1 font-['Inter']">
            <span>© {currentYear} Vivek Pillai. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and cutting-edge technology.</span>
          </div>
          <div className="mt-2 md:mt-0 font-['Fira_Code']">
            <span>Available for freelance projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}