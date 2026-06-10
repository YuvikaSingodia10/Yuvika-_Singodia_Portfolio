import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { profileData } from '../../data/portfolio';
import { SectionWrapper, SectionHeader } from '../ui';

const getGithubUsername = (url: string) => {
  const match = url.match(/github\.com\/([^\/\?#]+)/i);
  return match ? match[1] : url;
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: profileData.emailDisplay,
    href: `mailto:${profileData.email}`,
    description: 'Drop me a message anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profileData.phone,
    href: `tel:${profileData.phone.replace(/ /g, '')}`,
    description: 'Available Mon–Fri, 10am–6pm IST',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: getGithubUsername(profileData.github),
    href: profileData.github,
    description: 'Check out my open source work',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Yuvika Singodia',
    href: profileData.linkedin,
    description: 'Connect with me professionally',
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="section-padding relative overflow-hidden bg-gray-50/50 dark:bg-dark-secondary/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-accent-blue/10 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-accent-purple/10 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? Let's connect!"
      />

      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you're looking for a collaborator, have a question, or just want to say hi —
            my inbox is always open. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-light-accent-blue/20 to-light-accent-purple/20 dark:from-dark-accent-blue/20 dark:to-dark-accent-purple/20 group-hover:from-light-accent-blue/30 group-hover:to-light-accent-purple/30 dark:group-hover:from-dark-accent-blue/30 dark:group-hover:to-dark-accent-purple/30 transition-all duration-300 shrink-0">
                  <item.icon className="w-6 h-6 text-light-accent-blue dark:text-dark-accent-blue" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">{item.label}</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-light-accent-blue dark:group-hover:text-dark-accent-blue transition-colors duration-300">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <MapPin className="w-5 h-5 text-light-accent-purple dark:text-dark-accent-purple" />
          <span className="text-base">{profileData.location}</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
