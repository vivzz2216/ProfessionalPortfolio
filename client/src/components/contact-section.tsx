import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Send, Globe, Zap, Linkedin } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema } from '@shared/schema';
import { z } from 'zod';

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

// 3D Globe Component with improved visualization
function Globe3D() {
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Outer energy rings */}
      <div className="absolute inset-0 rounded-full border-2 border-portfolio-primary/40 animate-pulse"></div>
      <div className="absolute inset-6 rounded-full border border-portfolio-accent/30 animate-pulse delay-300"></div>
      <div className="absolute inset-12 rounded-full border border-portfolio-primary/20 animate-pulse delay-600"></div>
      
      {/* Main globe sphere */}
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-portfolio-primary/30 via-portfolio-secondary/50 to-portfolio-accent/20 backdrop-blur-sm border-2 border-portfolio-primary/50 animate-spin-slow shadow-2xl">
        {/* Meridian lines */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-portfolio-accent/40 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-portfolio-accent/40 transform -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-portfolio-primary/30"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-portfolio-primary/30"></div>
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-portfolio-primary/30"></div>
          <div className="absolute top-0 left-3/4 w-0.5 h-full bg-portfolio-primary/30"></div>
        </div>
        
        {/* Continent-like shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-6 bg-portfolio-accent/40 rounded-full transform rotate-12"></div>
        <div className="absolute top-2/3 right-1/4 w-10 h-4 bg-portfolio-primary/40 rounded-full transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-8 bg-portfolio-accent/30 rounded-full transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-6 bg-portfolio-primary/30 rounded-full transform -rotate-30"></div>
        
        {/* Floating data points with glow */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-portfolio-accent rounded-full animate-pulse shadow-lg shadow-portfolio-accent/50"></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-portfolio-primary rounded-full animate-pulse delay-300 shadow-lg shadow-portfolio-primary/50"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-portfolio-accent rounded-full animate-pulse delay-700 shadow-lg shadow-portfolio-accent/50"></div>
        <div className="absolute top-1/4 left-2/3 w-3 h-3 bg-portfolio-primary rounded-full animate-pulse delay-1000 shadow-lg shadow-portfolio-primary/50"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-portfolio-primary/10 to-portfolio-accent/10 blur-sm"></div>
      </div>
      
      {/* Orbiting satellites with trails */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute -top-3 left-1/2 w-6 h-6 transform -translate-x-1/2">
          <div className="w-full h-full bg-portfolio-accent/80 rounded-full shadow-lg shadow-portfolio-accent/50"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-b from-portfolio-accent/40 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute -bottom-3 left-1/2 w-6 h-6 transform -translate-x-1/2">
          <div className="w-full h-full bg-portfolio-primary/80 rounded-full shadow-lg shadow-portfolio-primary/50"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-portfolio-primary/40 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Connection network lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-portfolio-accent/60 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-portfolio-primary/60 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-portfolio-accent/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-portfolio-primary/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-12 animate-pulse delay-1500"></div>
      </div>
      
      {/* Atmospheric glow */}
      <div className="absolute inset-8 rounded-full bg-portfolio-primary/5 blur-xl animate-pulse"></div>
      <div className="absolute inset-12 rounded-full bg-portfolio-accent/5 blur-lg animate-pulse delay-700"></div>
    </div>
  );
}

export default function ContactSection() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: globeRef, isVisible: globeVisible } = useScrollAnimation({ threshold: 0.3 });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-neutral to-portfolio-secondary relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-portfolio-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-portfolio-accent rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-portfolio-primary rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-portfolio-accent rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 font-['Orbitron'] ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="glow-text">GET IN TOUCH</span>
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-xl text-gray-300 mt-6 font-['Inter'] transition-all duration-1000 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to collaborate? Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Globe Visualization */}
          <div ref={globeRef} className={`text-center transition-all duration-1000 delay-400 ${
            globeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Globe3D />
            
            {/* Contact Information Cards */}
            <div className="mt-12 space-y-6">
              <div className="hologram-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-portfolio-accent mb-6 font-['Orbitron']">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-portfolio-accent" />
                    </div>
                    <span className="text-gray-300 font-['Fira_Code']">pillaivivek16@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-portfolio-primary" />
                    </div>
                    <span className="text-gray-300 font-['Fira_Code']">+91 7249292743</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-portfolio-accent" />
                    </div>
                    <span className="text-gray-300 font-['Fira_Code']">Mumbai, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-primary/20 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-portfolio-primary" />
                    </div>
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

              {/* Status badges */}
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-portfolio-primary/20 text-portfolio-accent border-portfolio-primary/40">
                  <Zap className="w-4 h-4 mr-2" />
                  Available for Projects
                </Badge>
                <Badge variant="outline" className="bg-portfolio-accent/20 text-portfolio-primary border-portfolio-accent/40">
                  <Globe className="w-4 h-4 mr-2" />
                  Remote Friendly
                </Badge>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div ref={formRef} className={`transition-all duration-1000 delay-600 ${
            formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="hologram-effect border-portfolio-primary/30 bg-portfolio-secondary/20 backdrop-blur-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-white font-['Orbitron']">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-300 font-['Inter']">
                  Let's discuss your project or opportunity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-portfolio-accent font-['Orbitron']">
                        Full Name
                      </label>
                      <Input
                        {...register('name')}
                        className="bg-portfolio-secondary/50 border-portfolio-primary/30 text-white placeholder-gray-400 focus:border-portfolio-accent focus:ring-portfolio-accent/20"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm font-['Fira_Code']">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-portfolio-accent font-['Orbitron']">
                        Email Address
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        className="bg-portfolio-secondary/50 border-portfolio-primary/30 text-white placeholder-gray-400 focus:border-portfolio-accent focus:ring-portfolio-accent/20"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm font-['Fira_Code']">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-portfolio-accent font-['Orbitron']">
                      Subject
                    </label>
                    <Input
                      {...register('subject')}
                      className="bg-portfolio-secondary/50 border-portfolio-primary/30 text-white placeholder-gray-400 focus:border-portfolio-accent focus:ring-portfolio-accent/20"
                      placeholder="Project collaboration, job opportunity, etc."
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm font-['Fira_Code']">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-portfolio-accent font-['Orbitron']">
                      Message
                    </label>
                    <Textarea
                      {...register('message')}
                      rows={6}
                      className="bg-portfolio-secondary/50 border-portfolio-primary/30 text-white placeholder-gray-400 focus:border-portfolio-accent focus:ring-portfolio-accent/20 resize-none"
                      placeholder="Tell me about your project, requirements, or how we can work together..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm font-['Fira_Code']">{errors.message.message}</p>
                    )}
                  </div>

                  <Separator className="bg-portfolio-primary/30" />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-accent hover:to-portfolio-primary text-white font-['Orbitron'] font-semibold tracking-wider uppercase py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}