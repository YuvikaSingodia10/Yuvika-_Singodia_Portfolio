import { motion } from 'framer-motion';
import { Trophy, PenTool, Code2 } from 'lucide-react';
import { achievements } from '../../data/portfolio';
import { SectionWrapper, SectionHeader } from '../ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  pen: PenTool,
  code: Code2,
};

function TimelineItem({
  achievement,
  index,
  isLast,
}: {
  achievement: (typeof achievements)[0];
  index: number;
  isLast: boolean;
}) {
  const Icon = iconMap[achievement.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
    >
      {/* Content card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 inline-block w-full max-w-md hover:shadow-xl transition-all duration-300"
        >
          <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
            <span className="text-sm font-medium text-light-accent-purple dark:text-dark-accent-purple">
              {achievement.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {achievement.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {achievement.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple p-0.5 shadow-lg"
        >
          <div className="w-full h-full rounded-full bg-light-secondary dark:bg-dark-secondary flex items-center justify-center">
            <Icon className="w-7 h-7 text-light-accent-blue dark:text-dark-accent-blue" />
          </div>
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden lg:block" />

      {/* Vertical line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-light-accent-blue via-light-accent-purple to-transparent dark:from-dark-accent-blue dark:via-dark-accent-purple hidden lg:block"
        />
      )}
    </motion.div>
  );
}

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-accent-blue/5 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-accent-purple/5 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Achievements"
        subtitle="Recognition and milestones in my journey"
      />

      <div className="max-w-4xl mx-auto">
        {/* Mobile timeline */}
        <div className="lg:hidden space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple" />
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-light-accent-blue/20 to-light-accent-purple/20 dark:from-dark-accent-blue/20 dark:to-dark-accent-purple/20">
                    {(() => {
                      const Icon = iconMap[achievement.icon] || Trophy;
                      return <Icon className="w-5 h-5 text-light-accent-blue dark:text-dark-accent-blue" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium text-light-accent-purple dark:text-dark-accent-purple">
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block space-y-12">
          {achievements.map((achievement, index) => (
            <TimelineItem
              key={achievement.id}
              achievement={achievement}
              index={index}
              isLast={index === achievements.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
