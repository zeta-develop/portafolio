import React, { useState } from 'react';
import { MessageCircle, MapPin, Mail, Github, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { profile } from '@/data/profile';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Opción C: el formulario no envía correo. Al enviar, abre WhatsApp con el
  // mensaje ya redactado (nombre + mensaje del cliente) hacia Nexo Digital.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const text = `Hola Nexo Digital, soy ${name}${email ? ` (${email})` : ''}.%0A%0A${message}`;
    const url = `${profile.whatsapp}?text=${text}`;

    window.open(url, '_blank', 'noopener,noreferrer');
    toast({
      title: t('contact.success'),
      description: t('contact.toastDescription'),
    });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
            {t('contact.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('contact.connectText')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t('contact.connect')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                    placeholder={t('contact.placeholders.name')}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                    placeholder={t('contact.placeholders.email')}
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                    placeholder={t('contact.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                           transition-colors duration-300 hover:bg-primary/90 hover:shadow-soft-lg
                           flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t('contact.connectWithMe')}</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 cursor-pointer group">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{t('contact.whatsapp')}</p>
                    <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      {profile.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 cursor-pointer group">
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-accent transition-colors duration-300">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 cursor-pointer group">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{t('contact.location')}</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">{t('contact.social')}</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/zeta-develop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors duration-300 hover:shadow-lg group"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors duration-300 hover:shadow-lg group"
                >
                  <MessageCircle className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors duration-300 hover:shadow-lg group"
                >
                  <Mail className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-card/95 backdrop-blur-md border border-border p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300 group">
              <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{t('contact.quickResponse.title')}</h4>
              <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                {t('contact.quickResponse.description')}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">{t('contact.quickResponse.availability')}</span>
                <Star className="w-4 h-4 text-accent ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;