import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:md.ghoda@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/mitulghoda', label: 'GitHub' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/mitulpatel1991', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-neon">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-panel rounded-xl p-6 neon-border-cyan">
              <h3 className="text-xl font-bold mb-4 neon-text-cyan">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-neon-blue" size={20} />
                  <span className="text-foreground/80">md.ghoda@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-neon-cyan" size={20} />
                  <span className="text-foreground/80">+91 9408861420</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-neon-purple" size={20} />
                  <span className="text-foreground/80">Ahmedabad, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel rounded-xl p-6 neon-border-purple">
              <h3 className="text-xl font-bold mb-4 neon-text-purple">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass-panel neon-border-blue flex items-center justify-center hover:neon-glow-blue transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-neon-blue" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-6 neon-border-blue space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass-panel border border-foreground/10 focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 outline-none text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass-panel border border-foreground/10 focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 outline-none text-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg glass-panel border border-foreground/10 focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 outline-none text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-neon flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Mitul Patel. Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-text-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
