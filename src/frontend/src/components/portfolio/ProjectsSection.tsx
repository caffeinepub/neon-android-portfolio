import { useInViewReveal } from '@/hooks/useInViewReveal';
import { Download, Code2 } from 'lucide-react';

const projects = [
  {
    name: 'Tree Garden',
    downloads: '100K+',
    description: 'Engaging mobile gaming experience with nature-themed gameplay and social features.',
    role: 'Lead Android Developer',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'In-App Purchases']
  },
  {
    name: 'Social Duels',
    downloads: '100K+',
    description: 'Competitive social gaming platform with real-time multiplayer functionality.',
    role: 'Senior Android Developer',
    tech: ['Kotlin', 'Socket.IO', 'MVI Architecture', 'Coroutines']
  },
  {
    name: 'Ice Park',
    downloads: '10K+',
    description: 'Entertainment and booking application for ice skating venues.',
    role: 'Android Developer',
    tech: ['Kotlin', 'REST APIs', 'Google Maps', 'Payment Integration']
  },
  {
    name: 'Givvy Bird',
    downloads: '100K+',
    description: 'Reward-based gaming application with engaging user experience.',
    role: 'Lead Developer',
    tech: ['Kotlin', 'Jetpack', 'Performance Optimization', 'Analytics']
  },
  {
    name: 'Givvy Videos',
    downloads: '5M+',
    description: 'High-performance video streaming platform with reward mechanisms.',
    role: 'Senior Android Developer',
    tech: ['Kotlin', 'Media3', 'Paging', 'Thread Management']
  },
  {
    name: 'Frekis',
    downloads: 'BLE App',
    description: 'Bluetooth Low Energy application for IoT device connectivity and control.',
    role: 'Android Developer',
    tech: ['Kotlin', 'BLE Technology', 'Coroutines', 'Custom UI']
  }
];

export function ProjectsSection() {
  const { ref, isVisible } = useInViewReveal();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-neon">
          Featured Projects
        </h2>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`glass-panel rounded-xl p-6 neon-border-blue hover:neon-glow-blue transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="text-neon-cyan" size={24} />
                    <h3 className="text-xl font-bold neon-text-blue">{project.name}</h3>
                  </div>
                </div>

                {/* Downloads Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/20 neon-border-purple">
                  <Download size={14} className="text-neon-purple" />
                  <span className="text-sm font-semibold neon-text-purple">{project.downloads}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Role */}
                <div className="pt-2 border-t border-foreground/10">
                  <p className="text-xs text-foreground/60 mb-1">Role</p>
                  <p className="text-sm font-medium text-neon-cyan">{project.role}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs text-foreground/60 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-foreground/5 text-foreground/70 border border-foreground/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
