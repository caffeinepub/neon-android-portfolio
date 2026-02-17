import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '@/lib/scroll';

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleNavClick = (target: string) => {
    smoothScrollTo(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold text-gradient-neon hover:scale-105 transition-transform"
          >
            MP
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:neon-text-cyan transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 neon-text-blue"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel rounded-lg mt-2 mb-4 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:neon-text-cyan transition-all duration-300 rounded"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
