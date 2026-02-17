import { useInViewReveal } from '@/hooks/useInViewReveal';

const skills = [
  'Kotlin',
  'Coroutines',
  'Kotlin Flow / Channel',
  'Jetpack Compose',
  'Jetpack Paging',
  'CameraX',
  'Media3',
  'MVI Architecture',
  'REST APIs',
  'XML APIs',
  'Google APIs',
  'Socket.IO',
  'BLE Technology',
  'Stripe',
  'Braintree',
  'In-App Purchases',
  'Performance Optimization',
  'Thread Management'
];

export function SkillsSection() {
  const { ref, isVisible } = useInViewReveal();

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-neon">
          Technical Skills
        </h2>
        
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`glass-panel rounded-lg p-4 neon-border-cyan hover:neon-glow-cyan transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow"></div>
                <span className="text-sm md:text-base font-medium">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
