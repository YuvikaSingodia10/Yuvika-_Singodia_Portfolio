import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { profileData } from '../../data/portfolio';

const socialLinks = [
  { name: 'GitHub', href: profileData.github, icon: Github },
  { name: 'LinkedIn', href: profileData.linkedin, icon: Linkedin },
  { name: 'Email', href: `mailto:${profileData.email}`, icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-accent-blue/50 to-transparent dark:via-dark-accent-blue/50" />

      <div className="bg-gray-50 dark:bg-dark-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <a href="#home" className="inline-block mb-3">
                <span className="text-2xl font-poppins font-bold gradient-text">YS</span>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building digital experiences with passion
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-light-accent-blue dark:group-hover:text-dark-accent-blue transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-right"
            >
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-light-accent-blue dark:group-hover:text-dark-accent-blue transition-colors duration-300" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  Back to Top
                </span>
              </motion.button>
            </motion.div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Yuvika Singodia
            </p>
            <span className="hidden sm:inline">|</span>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
