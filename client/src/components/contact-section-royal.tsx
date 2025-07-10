import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Star, Crown } from 'lucide-react';
import globeImage from '@assets/cbbb8400-6edf-4f1f-a093-a75de0b5a684-removebg-preview_1752132074387.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema } from '@shared/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact-messages'] });
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-neutral to-black relative overflow-hidden">
      {/* Royal Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-portfolio-primary/30 to-portfolio-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-portfolio-accent/30 to-portfolio-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-portfolio-primary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating Royal Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-portfolio-primary rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-portfolio-accent rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-portfolio-accent rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-portfolio-primary rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-8 h-8 text-portfolio-accent mr-3" />
            <h2 className="text-5xl font-bold text-white font-['Cinzel']">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">Contact Me</span>
            </h2>
            <Crown className="w-8 h-8 text-portfolio-primary ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Let's collaborate and create something extraordinary together. Your vision, combined with my expertise, can achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-96 mx-auto lg:mx-0 mb-8 relative max-w-md"
              >
                <img 
                  src={globeImage} 
                  alt="Connected World" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              </motion.div>
            </div>


            <div className="bg-gradient-to-br from-portfolio-secondary/40 to-portfolio-neutral/20 backdrop-blur-lg rounded-2xl p-8 border border-portfolio-primary/20">
              <h3 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-portfolio-primary/20 group-hover:bg-portfolio-primary/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-['Cormorant_Garamond']">Email</p>
                    <p className="text-gray-300 font-['Cormorant_Garamond']">pillaivivek16@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-portfolio-primary/20 group-hover:bg-portfolio-primary/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-['Cormorant_Garamond']">Phone</p>
                    <p className="text-gray-300 font-['Cormorant_Garamond']">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-portfolio-primary/20 group-hover:bg-portfolio-primary/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-['Cormorant_Garamond']">Location</p>
                    <p className="text-gray-300 font-['Cormorant_Garamond']">Mumbai, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 rounded-lg border border-portfolio-primary/20">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <h4 className="text-white font-bold font-['Playfair_Display']">Why Choose Me?</h4>
                </div>
                <ul className="space-y-2 text-gray-300 font-['Cormorant_Garamond']">
                  <li>• Professional & Timely Delivery</li>
                  <li>• Cutting-edge Technology Stack</li>
                  <li>• 24/7 Communication & Support</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Royal Contact Form */}
          <div ref={formRef} className={`transition-all duration-1000 delay-600 ${
            formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg border-blue-500/30 shadow-2xl overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-['Cinzel']">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-blue">
                    Get In Touch
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg font-['Cormorant_Garamond']">
                  Share your project details and let's create something magnificent
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Animated Form Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {Array.from({ length: 10 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-portfolio-accent rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label htmlFor="name" className="text-white font-semibold font-['Cormorant_Garamond'] flex items-center">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"
                        />
                        Your Name
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.02, borderColor: '#00FFAA' }}
                        className="relative"
                      >
                        <Input
                          id="name"
                          {...form.register('name')}
                          className="bg-slate-800/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </motion.div>
                      {form.formState.errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm"
                        >
                          {form.formState.errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label htmlFor="email" className="text-white font-semibold font-['Cormorant_Garamond'] flex items-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-portfolio-primary rounded-full mr-2"
                        />
                        Email Address
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.02, borderColor: '#3366FF' }}
                        className="relative"
                      >
                        <Input
                          id="email"
                          type="email"
                          {...form.register('email')}
                          className="bg-slate-800/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-primary/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </motion.div>
                      {form.formState.errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm"
                        >
                          {form.formState.errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="subject" className="text-white font-semibold font-['Cormorant_Garamond'] flex items-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2 h-2 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full mr-2"
                      />
                      Subject
                    </Label>
                    <motion.div
                      whileFocus={{ scale: 1.02, borderColor: '#FF6B6B' }}
                      className="relative"
                    >
                      <Input
                        id="subject"
                        {...form.register('subject')}
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                        placeholder="Brief description of your project"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-primary/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                    {form.formState.errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {form.formState.errors.subject.message}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="message" className="text-white font-semibold font-['Cormorant_Garamond'] flex items-center">
                      <motion.div
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="w-2 h-2 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-full mr-2"
                      />
                      Your Message
                    </Label>
                    <motion.div
                      whileFocus={{ scale: 1.01, borderColor: '#9333EA' }}
                      className="relative"
                    >
                      <Textarea
                        id="message"
                        {...form.register('message')}
                        rows={6}
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none font-['Cormorant_Garamond'] transition-all duration-300"
                        placeholder="Tell me about your project, requirements, timeline, and budget..."
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                    {form.formState.errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {form.formState.errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 font-['Cinzel'] text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {contactMutation.isPending ? (
                          <div className="flex items-center justify-center space-x-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <motion.div
                              animate={{ 
                                rotate: [0, 10, 0],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Send className="w-5 h-5" />
                            </motion.div>
                            <span>Send Message</span>
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Crown className="w-5 h-5" />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-portfolio-accent font-['Playfair_Display'] italic">
            "Great things in business are never done by one person. They're done by a team of people."
          </p>
          <p className="text-gray-400 mt-2 font-['Cormorant_Garamond']">- Steve Jobs</p>
        </motion.div>
      </div>
    </section>
  );
}