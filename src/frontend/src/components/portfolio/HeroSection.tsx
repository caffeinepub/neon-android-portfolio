import { Download, Mail } from 'lucide-react';
import { smoothScrollTo } from '@/lib/scroll';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest neon-text-cyan">
                Senior Android Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient-neon">Mitul Patel</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70">
                8+ Years of Experience
              </p>
              <p className="text-lg text-foreground/60 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow"></span>
                Ahmedabad, India
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-xl">
              Crafting high-performance Android applications with cutting-edge technology and innovative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/assets/resume.pdf"
                download
                className="btn-neon flex items-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={() => smoothScrollTo('contact')}
                className="btn-neon flex items-center gap-2 group"
                style={{
                  background: 'oklch(var(--neon-purple) / 0.1)',
                  borderColor: 'oklch(var(--neon-purple) / 0.6)'
                }}
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Hero Header Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden neon-border-blue neon-glow-blue">
              <img
                src="/assets/generated/hero-header.dim_1600x900.png"
                alt="Android Development"
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-neon-blue/20 blur-2xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
