import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';
import { profileData, stats } from '../../data/portfolio';
import { SectionWrapper, SectionHeader, GlassCard } from '../ui';

const techStack = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'Linux'];

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech in IT Engineering',
    sub: 'Currently Pursuing',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    sub: 'Open to Remote',
  },
  {
    icon: Calendar,
    label: 'Internships',
    value: '3 Completed',
    sub: 'Hands-on Training',
  },
  {
    icon: Briefcase,
    label: 'Focus',
    value: 'AI & Machine Learning',
    sub: 'Learning & Building',
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-light-accent-blue/10 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-light-accent-purple/10 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="About Me"
        subtitle="Passionate about learning, building, and growing through practical projects and training"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — quick info cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <GlassCard className="p-8 overflow-visible">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple rounded-full blur-3xl opacity-30" />

            <div className="relative">
              {/* Highlight grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="rounded-2xl glass p-4 flex flex-col gap-2 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-light-accent-blue dark:text-dark-accent-blue group-hover:text-light-accent-purple dark:group-hover:text-dark-accent-purple transition-colors duration-300" />
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.8 }}
                    className="px-3 py-1.5 text-sm rounded-full glass text-gray-700 dark:text-gray-300 hover:text-light-accent-blue dark:hover:text-dark-accent-blue transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right — bio + stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="heading-secondary text-gray-900 dark:text-white">
            Building the Future with Code
          </h3>

          <div className="space-y-4 text-body">
            <p>{profileData.bio}</p>
            <p>
              I am building skills with modern technologies like{' '}
              <span className="text-light-accent-blue dark:text-dark-accent-blue font-medium">
                Java, React.js, Python, MySQL
              </span>{' '}
              as part of projects, internships, and hands-on learning.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="h-full"
              >
                <GlassCard className="text-center py-5 glow-purple flex flex-col items-center justify-center min-h-[150px] h-full">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
