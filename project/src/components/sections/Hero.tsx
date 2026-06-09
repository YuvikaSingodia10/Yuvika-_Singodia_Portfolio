import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { profileData, typingPhrases } from '../../data/portfolio';
import { useTypingEffect } from '../../hooks';
import { Button } from '../ui';

export function Hero() {
  const typedText = useTypingEffect(typingPhrases, 80, 40, 2000);

  const socialLinks = [
    { name: 'GitHub', href: profileData.github, icon: Github },
    { name: 'LinkedIn', href: profileData.linkedin, icon: Linkedin },
    { name: 'Email', href: `mailto:${profileData.email}`, icon: Mail },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-visible pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-bg to-light-secondary dark:from-dark-bg dark:via-dark-bg dark:to-dark-secondary" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-accent-blue/20 dark:bg-dark-accent-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-accent-purple/20 dark:bg-dark-accent-purple/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-primary mb-6 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="block gradient-text animate-gradient-x mt-2">
                {profileData.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              {profileData.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-8 mb-8"
            >
              <span className="text-xl md:text-2xl font-medium">
                <span className="text-gray-600 dark:text-gray-400">I'm a </span>
                <span className="gradient-text font-semibold">{typedText}</span>
                <span className="animate-pulse text-light-accent-blue dark:text-dark-accent-blue">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {profileData.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button href="#projects" size="md">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                href="/YUVIKA_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                View Resume
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button href="/YUVIKA_RESUME.pdf" download variant="outline" size="md">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full glass hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-light-accent-blue dark:group-hover:text-dark-accent-blue transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-light-accent-blue/20 dark:border-dark-accent-blue/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-dashed border-light-accent-purple/30 dark:border-dark-accent-purple/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-64 h-64 md:w-72 md:h-72 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <motion.div
              className="relative z-10 w-56 h-56 md:w-64 md:h-64"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple p-1">
                <div className="w-full h-full rounded-full bg-light-secondary dark:bg-dark-secondary flex items-center justify-center overflow-hidden">
                  <img
                    src="/IMG-20240428-WA0019.jpeg"
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-light-accent-blue dark:bg-dark-accent-blue"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-light-accent-purple dark:bg-dark-accent-purple"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
