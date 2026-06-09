import { motion } from 'framer-motion';
import { Cpu, Code2, LayoutGrid, Sparkles } from 'lucide-react';
import { SectionWrapper, SectionHeader, GlassCard } from '../ui';

const experienceEntries = [
  {
    title: 'Machine Learning Intern',
    company: 'Cognifyz Technologies',
    icon: Cpu,
    details: [
      'Worked on machine learning concepts and real-world datasets',
      'Built predictive models and performed data preprocessing',
      'Learned model evaluation and data visualization techniques',
    ],
  },
  {
    title: 'Advanced Java Intern',
    company: 'Ice Hut Technologies',
    icon: Code2,
    details: [
      'Worked with Advanced Java concepts',
      'Developed backend logic and handled database connectivity',
      'Improved understanding of APIs and enterprise application development',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'SKIT In-House Training',
    icon: LayoutGrid,
    details: [
      'Developed responsive frontend web pages',
      'Worked with HTML, CSS, JavaScript, and React.js',
      'Improved UI/UX and responsive design skills',
    ],
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute -top-16 left-0 w-72 h-72 rounded-full bg-light-accent-blue/10 dark:bg-dark-accent-blue/10 blur-3xl" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-light-accent-purple/10 dark:bg-dark-accent-purple/10 blur-3xl" />

      <SectionHeader
        title="Experience"
        subtitle="A premium timeline of my internship journey, designed for clarity, impact, and recruiter-friendly readability."
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-light-accent-blue/30 via-transparent to-light-accent-purple/30" />

        <div className="space-y-10">
          {experienceEntries.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:flex md:items-start md:justify-between"
              >
                <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 rounded-full border border-white/20 bg-white/90 dark:bg-slate-900/90 p-1 shadow-lg md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-light-accent-blue to-light-accent-purple text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className={`w-full md:w-[46%] ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                  <GlassCard className="p-8 hover:-translate-y-1 transition-transform duration-300" glow={isLeft ? 'blue' : 'purple'}>
                    <div className="flex flex-col gap-4 md:items-end">
                      <div className="flex items-center justify-between gap-4 md:justify-end">
                        <div className="space-y-2">
                          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                            {item.title}
                          </p>
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {item.company}
                          </h3>
                        </div>
                        <div className="hidden md:flex items-center justify-center rounded-full bg-gradient-to-br from-light-accent-blue to-light-accent-purple p-3 shadow-[0_0_30px_rgba(139,92,246,0.25)] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-light-accent-blue dark:bg-dark-accent-blue" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
