import { useInViewReveal } from '@/hooks/useInViewReveal';

export function AboutSection() {
  const { ref, isVisible } = useInViewReveal();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`glass-panel rounded-2xl p-8 md:p-12 neon-border-purple transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-neon">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Seasoned Android Developer with 8+ years of experience building scalable, high-performance Android applications across gaming, e-commerce, fintech, entertainment, taxi booking, and mobile gaming industries.
            </p>
            <p>
              Strong understanding of full software development lifecycle, UI/UX, Agile methodologies, performance optimization, and MVI architecture.
            </p>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
