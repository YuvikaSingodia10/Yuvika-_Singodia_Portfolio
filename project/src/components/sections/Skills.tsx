import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Palette, Layout } from 'lucide-react';
import { skills } from '../../data/portfolio';
import { SectionWrapper, SectionHeader } from '../ui';

const categories = [
  { key: 'frontend', label: 'Frontend', icon: Layout },
  { key: 'programming', label: 'Programming', icon: Code2 },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'database', label: 'Database', icon: Database },
  { key: 'tools', label: 'Tools', icon: Wrench },
  { key: 'design', label: 'Design', icon: Palette },
] as const;

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({
  category,
  skillsList,
  index,
}: {
  category: (typeof categories)[number];
  skillsList: { name: string; level: number; icon: string }[];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group"
    >
      <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-light-accent-blue/20 to-light-accent-purple/20 dark:from-dark-accent-blue/20 dark:to-dark-accent-purple/20 group-hover:from-light-accent-blue/30 group-hover:to-light-accent-purple/30 dark:group-hover:from-dark-accent-blue/30 dark:group-hover:to-dark-accent-purple/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-light-accent-blue dark:text-dark-accent-blue" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {category.label}
          </h3>
        </div>

        <div className="space-y-5">
          {skillsList.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-light-accent-blue/5 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-accent-purple/5 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies I've worked with and my proficiency levels"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <SkillCard
            key={category.key}
            category={category}
            skillsList={skills[category.key]}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
