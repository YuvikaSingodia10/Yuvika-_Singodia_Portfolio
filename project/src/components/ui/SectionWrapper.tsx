import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${alignment}`}
    >
      <h2 className="heading-secondary mb-4">
        <span className="gradient-text animate-gradient-x">{title}</span>
      </h2>
      {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
