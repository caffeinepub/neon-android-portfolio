import { useCountUpOnce } from '@/hooks/useCountUpOnce';

export function StatsCounterSection() {
  const { ref, count } = useCountUpOnce(30, 2000);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className="glass-panel rounded-2xl p-12 text-center neon-border-purple neon-glow-purple"
        >
          <div className="space-y-4">
            <div className="text-6xl md:text-8xl font-bold text-gradient-neon">
              {count}+
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
              Apps Developed
            </p>
            <p className="text-lg text-foreground/60">
              Across multiple industries and platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
