import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  download,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-medium rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden group
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-light-accent-blue to-light-accent-purple
      dark:from-dark-accent-blue dark:to-dark-accent-purple
      text-white shadow-lg
      hover:shadow-xl hover:scale-[1.02]
      focus:ring-light-accent-blue dark:focus:ring-dark-accent-blue
    `,
    secondary: `
      glass bg-white/80 dark:bg-white/10
      text-gray-800 dark:text-white
      hover:bg-white dark:hover:bg-white/20
      border border-gray-200 dark:border-white/20
    `,
    ghost: `
      text-gray-600 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-white/10
      hover:text-gray-900 dark:hover:text-white
    `,
    outline: `
      border-2 border-light-accent-blue dark:border-dark-accent-blue
      text-light-accent-blue dark:text-dark-accent-blue
      hover:bg-light-accent-blue/10 dark:hover:bg-dark-accent-blue/10
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center">{children}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}
