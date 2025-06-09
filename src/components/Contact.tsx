
import React, { useState } from 'react';
import { Send, MapPin, Mail, Github, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: "Thank you for your message!"
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-105">
            {t('contact.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground hover:text-primary transition-colors duration-300">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
            {t('contact.connectText')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground hover:text-primary transition-colors duration-300">{t('contact.connect')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {t('contact.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50 hover:scale-102" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {t('contact.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50 hover:scale-102" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {t('contact.message')}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground hover:border-primary/50 hover:scale-102" 
                    placeholder="Tell me about your project..." 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium 
                           transition-all duration-300 hover:bg-primary/90 hover:shadow-soft-lg hover:scale-105
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 
                           group hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground hover:text-accent transition-colors duration-300">{t('contact.connectWithMe')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">Email</p>
                    <a href="mailto:ronaldadantellez@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">contacto@ronaldtellez.online</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-accent group-hover:animate-bounce" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">{t('contact.location')}</p>
                    <p className="text-muted-foreground">Leon, Nicaragua</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground hover:text-primary transition-colors duration-300">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/zeta-develop" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg group">
                  <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a href="mailto:ronaldadantellez@gmail.com" 
                   className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg group">
                  <Mail className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-card/95 backdrop-blur-md border border-border p-6 rounded-xl shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300 group">
              <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">Quick Response</h4>
              <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                I usually respond within 24 hours. Let's discuss your project!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for new projects</span>
                <Star className="w-4 h-4 text-accent ml-2 group-hover:animate-spin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
