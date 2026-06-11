import { motion } from 'framer-motion';
import { Github, Check, Trophy } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionWrapper, SectionHeader, Button } from '../ui';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={`glass-card grid items-center gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-2 transition-all duration-500 hover:shadow-2xl ${
          index % 2 !== 0 ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-2xl [direction:ltr]">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-light-accent-blue/30 to-light-accent-purple/30 dark:from-dark-accent-blue/30 dark:to-dark-accent-purple/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <img
            src={project.image}
            alt={project.title}
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-light-accent-blue/30 dark:border-dark-accent-blue/30 bg-light-accent-blue/10 dark:bg-dark-accent-blue/10 px-3 py-1 text-xs font-semibold text-light-accent-blue dark:text-dark-accent-blue backdrop-blur-md">
                <Trophy className="h-3.5 w-3.5" />
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="[direction:ltr]">
          <span className="text-sm font-medium text-light-accent-blue dark:text-dark-accent-blue uppercase tracking-wide">
            {project.subtitle}
          </span>

          <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <Check className="h-4 w-4 shrink-0 text-light-accent-blue dark:text-dark-accent-blue" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <Button
              href={encodeURI(project.githubUrl.trim())}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              <Github className="w-4 h-4" />
              View Source
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-light-accent-blue/10 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-light-accent-purple/10 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Featured Projects"
        subtitle="A collection of projects I've built, from AI-powered applications to modern web platforms"
      />

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
