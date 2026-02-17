import { useEffect, useState } from 'react';

export function BackgroundEffects() {
  const [shapes, setShapes] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random positions for floating shapes
    const generatedShapes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setShapes(generatedShapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/neon-noise-texture.dim_1024x1024.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px'
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute w-32 h-32 opacity-10 animate-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
            backgroundImage: 'url(/assets/generated/geo-shapes-pack.dim_1024x1024.png)',
            backgroundSize: 'cover',
            filter: 'hue-rotate(180deg)'
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
    </div>
  );
}
