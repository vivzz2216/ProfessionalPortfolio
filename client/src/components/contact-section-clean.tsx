import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { insertContactMessageSchema, type ContactMessage } from '@shared/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function ContactSectionClean() {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { toast } = useToast();

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
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vivek.pillai@example.com',
      href: 'mailto:vivek.pillai@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to contribute to exciting ventures. Whether you're looking for a 
                  dedicated developer or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                              {info.title}
                            </h4>
                            <a 
                              href={info.href}
                              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Quick Response Time
                </h4>
                <p className="text-slate-600">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  please mention "URGENT" in your subject line.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <Input
                          {...form.register('name')}
                          placeholder="Enter your full name"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                        />
                      </div>
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                        <Input
                          {...form.register('email')}
                          type="email"
                          placeholder="Enter your email address"
                          className="pl-10 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                        />
                      </div>
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        {...form.register('subject')}
                        placeholder="What's this about?"
                        className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        {...form.register('message')}
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300 resize-none"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105"
                    >
                      {contactMutation.isPending ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}