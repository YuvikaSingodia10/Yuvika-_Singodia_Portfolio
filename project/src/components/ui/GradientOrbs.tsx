import { motion } from 'framer-motion';

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary orb - blue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-10%', '15%', '-10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary orb - purple */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-25 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          right: '-5%',
          top: '30%',
        }}
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['-20%', '20%', '-20%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Third orb - accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
          left: '50%',
          bottom: '10%',
        }}
        animate={{
          x: ['-15%', '15%', '-15%'],
          y: ['15%', '-15%', '15%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
    </div>
  );
}
