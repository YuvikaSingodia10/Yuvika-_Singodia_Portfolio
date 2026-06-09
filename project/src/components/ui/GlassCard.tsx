import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: 'blue' | 'purple' | 'none';
  delay?: number;
}

export function GlassCard({
  children,
  className = '',
  tilt = true,
  glow = 'none',
  delay = 0,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowStyles = {
    blue: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.3),0_0_60px_rgba(56,189,248,0.1)]',
    purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_60px_rgba(139,92,246,0.1)]',
    none: '',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: tilt ? 'preserve-3d' : undefined,
      }}
      className={`
        glass-card p-6
        transition-all duration-500
        ${glowStyles[glow]}
        ${className}
      `}
    >
      <div style={{ transform: tilt ? 'translateZ(50px)' : undefined }}>{children}</div>
    </motion.div>
  );
}
