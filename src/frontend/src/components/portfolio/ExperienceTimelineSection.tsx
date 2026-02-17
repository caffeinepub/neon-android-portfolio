import { useInViewReveal } from '@/hooks/useInViewReveal';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Android Developer',
    company: 'Devstree IT Services',
    period: '2020 – Present',
    current: true
  },
  {
    title: 'Android Developer',
    company: 'BitO1 Techplode',
    period: '2018 – 2020',
    current: false
  },
  {
    title: 'Jr Android Developer',
    company: 'Vnnovate Solutions',
    period: '2017 – 2018',
    current: false
  }
];

export function ExperienceTimelineSection() {
  const { ref, isVisible } = useInViewReveal();

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-neon">
          Experience
        </h2>

        <div ref={ref} className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                {/* Glowing node */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-neon-cyan neon-glow-cyan flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background"></div>
                </div>

                {/* Content card */}
                <div className="glass-panel rounded-lg p-6 neon-border-blue hover:neon-glow-blue transition-all duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="text-neon-cyan mt-1" size={20} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold neon-text-blue">{exp.title}</h3>
                      <p className="text-lg text-foreground/80">{exp.company}</p>
                      <p className="text-sm text-foreground/60 mt-1">{exp.period}</p>
                      {exp.current && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-neon-cyan/20 neon-text-cyan neon-border-cyan">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
