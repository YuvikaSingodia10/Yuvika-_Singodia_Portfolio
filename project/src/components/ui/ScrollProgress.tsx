import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-light-accent-blue via-light-accent-purple to-light-accent-blue dark:from-dark-accent-blue dark:via-dark-accent-purple dark:to-dark-accent-blue origin-left z-50"
      style={{ scaleX }}
    />
  );
}
