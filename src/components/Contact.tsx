import React, { FormEvent, useState, useRef, useEffect } from "react";
import { Send, Mail, Phone, MapPin, Loader } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("contact.success"),
        description: `${t("contact.success")} ${formData.name}!`,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <span className="inline-block py-1 px-3 mb-2 text-sm font-medium bg-primary/10 rounded-full">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="glass glass-dark rounded-2xl p-8 shadow-soft-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 
                              focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all"
                    placeholder={t("contact.name")}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 
                              focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all"
                    placeholder={t("contact.email")}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 
                              focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all"
                    placeholder={t("contact.message")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground 
                            font-medium shadow-soft transition-all duration-300 hover:shadow-soft-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      {t("contact.send")}...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.send")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="mb-8 animate-on-scroll opacity-0">
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.connect")}
              </h3>
              <p className="text-foreground/70">{t("contact.connectText")}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start animate-on-scroll opacity-0">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:contact@ronaldtellez.online"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    contact@ronaldtellez.online
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-on-scroll opacity-0">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+50577463702"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +505 77463702
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-on-scroll opacity-0">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("contact.location")}</h4>
                  <p className="text-foreground/70">Nicaragua</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 animate-on-scroll opacity-0">
              <h4 className="font-medium mb-4">{t("contact.connectWithMe")}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zeta-develop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-dark p-3 rounded-full shadow-soft 
                           transition-all duration-300 hover:shadow-soft-lg hover:translate-y-[-2px]"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/zeta-develop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-dark p-3 rounded-full shadow-soft 
                           transition-all duration-300 hover:shadow-soft-lg hover:translate-y-[-2px]"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://ronaldtellez.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-dark p-3 rounded-full shadow-soft 
                           transition-all duration-300 hover:shadow-soft-lg hover:translate-y-[-2px]"
                  aria-label="Website"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 00-.496-2.995c.5-.122.97-.274 1.415-.457.68.937 1.43 2.064 1.845 3.452zm-3.84-5.265c.498.07.969.15 1.418.257.347.477.676.986.983 1.515-.893.35-1.858.63-2.87.814a12.25 12.25 0 00-1.471-2.586h1.94zM13 11.53V4.017c1.253.361 2.376 1.334 3.176 2.681.334.561.628 1.166.879 1.807C15.82 8.781 14.431 9 13 9.03v2.5zM11 4.017v7.513c-1.431-.03-2.82-.249-4.055-.525.25-.641.545-1.247.88-1.807C8.623 5.35 9.746 4.377 11 4.017zM9.07 8.586c-.59-.12-1.15-.262-1.689-.431A13.783 13.783 0 006.42 5.59c.5-.107.97-.187 1.469-.257h1.94c-.53.93-1.08 1.81-1.758 2.586-1.011-.184-1.977-.464-2.87-.814.307-.529.636-1.038.983-1.515.449-.107.92-.188 1.418-.257h1.94a12.25 12.25 0 00-1.471 2.586 16.768 16.768 0 00-2.871-.814c.307-.529.636-1.038.983-1.515.45-.107.92-.188 1.419-.257zM4.07 11h2.764c.097 1.027.259 2.031.496 2.995a15.933 15.933 0 01-1.416.457c-.68-.937-1.43-2.064-1.844-3.452zM5.631 15.23a14.67 14.67 0 001.24-.391c.336.757.723 1.465 1.158 2.11-.1.032-.202.06-.302.09a13.336 13.336 0 01-2.096-1.809zM12 21c-2.331 0-4.433-.962-5.97-2.57l.638-.185c.723 1.15 1.658 2.168 2.734 2.96.75.55 1.57.968 2.434 1.207.146.04.296.075.446.106a8.991 8.991 0 01-2.282-.518zm8.369-5.77c-.336.757-.723 1.465-1.158 2.11.1.032.202.06.302.09a13.38 13.38 0 002.096-1.809 15.195 15.195 0 01-1.24-.391zm2.562-3.23h-2.764a14.358 14.358 0 01-.496 2.995c.5.123.97.275 1.415.457.68-.937 1.43-2.064 1.845-3.452zM13 21.985a9.007 9.007 0 01-2.282-.518c.864.238 1.684.657 2.434 1.207 1.076.792 2.011 1.81 2.734 2.96.212-.06.42-.13.628-.185C15.567 23.962 13.833 23 12 23a8.97 8.97 0 01-3.701-.795 9.302 9.302 0 002.327-1.936 9.013 9.013 0 012.374.716zM11 19.985c-2.538-.72-4.667-2.479-5.828-4.912.946-.261 1.926-.455 2.929-.59a13.6 13.6 0 003.836-.717 13.47 13.47 0 01-1.937 6.219z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
