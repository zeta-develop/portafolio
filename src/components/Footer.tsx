import React from 'react';
import { ArrowUp, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappLink = `${profile.whatsapp}?text=${encodeURIComponent(
    'Hola Nexo Digital, quiero información sobre sus servicios.'
  )}`;

  return (
    <footer className="px-6 md:px-10 lg:px-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* CTA final */}
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{t('footer.ctaTitle')}</h3>
            <p className="text-muted-foreground">{t('footer.ctaText')}</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 shrink-0"
          >
            <MessageCircle className="size-5" />
            {t('footer.whatsappCta')}
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} {profile.agencyName} &mdash; {t('footer.madeBy')}. {t('footer.rights')}.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-accent" />
              Hecho en Astro + React
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110 hover:bg-primary/90"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;