import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Sparkles, Zap } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
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
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact-messages'] });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {[<Sparkles className="w-4 h-4 text-purple-400" />, <Zap className="w-4 h-4 text-cyan-400" />][Math.floor(Math.random() * 2)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Cinzel']">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-purple-500/30 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-['Playfair_Display'] mb-1">Email</h3>
                  <p className="text-gray-300 font-['Cormorant_Garamond']">pillaivivek16@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-purple-500/30 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-['Playfair_Display'] mb-1">Phone</h3>
                  <p className="text-gray-300 font-['Cormorant_Garamond']">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-purple-500/30 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-['Playfair_Display'] mb-1">Location</h3>
                  <p className="text-gray-300 font-['Cormorant_Garamond']">Mumbai, India</p>
                </div>
              </motion.div>
            </div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg rounded-xl border border-purple-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Work With Me?
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '4+ Years Experience',
                  'Modern Tech Stack',
                  'Fast Delivery',
                  'Quality Assurance',
                  '24/7 Support',
                  'Competitive Pricing'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300 font-['Cormorant_Garamond']">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-['Cinzel']">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Send Message
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg font-['Cormorant_Garamond']">
                  Let's discuss your project and turn your vision into reality
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-white font-semibold font-['Cormorant_Garamond']">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        {...form.register('name')}
                        className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-400 text-sm">{form.formState.errors.name.message}</p>
                      )}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-white font-semibold font-['Cormorant_Garamond']">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register('email')}
                        className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-white font-semibold font-['Cormorant_Garamond']">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      {...form.register('subject')}
                      className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20 font-['Cormorant_Garamond'] transition-all duration-300"
                      placeholder="What's your project about?"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-red-400 text-sm">{form.formState.errors.subject.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-white font-semibold font-['Cormorant_Garamond']">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register('message')}
                      rows={5}
                      className="bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20 resize-none font-['Cormorant_Garamond'] transition-all duration-300"
                      placeholder="Tell me about your project requirements, timeline, and budget..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm">{form.formState.errors.message.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-cyan-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-500 font-['Cinzel'] text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        {contactMutation.isPending ? (
                          <div className="flex items-center justify-center space-x-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </div>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}