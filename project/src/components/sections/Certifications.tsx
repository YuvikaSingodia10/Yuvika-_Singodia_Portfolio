import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import { SectionWrapper, SectionHeader, Button } from '../ui';

function CertificationCard({
  certification,
  index,
}: {
  certification: (typeof certifications)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="glass-card p-6 h-full relative overflow-hidden hover:shadow-xl transition-all duration-500">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-light-accent-blue/0 via-light-accent-purple/0 to-light-accent-blue/0 group-hover:from-light-accent-blue/20 group-hover:via-light-accent-purple/20 group-hover:to-light-accent-blue/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Top section with icon and date */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-light-accent-blue/20 to-light-accent-purple/20 dark:from-dark-accent-blue/20 dark:to-dark-accent-purple/20">
              <Award className="w-6 h-6 text-light-accent-blue dark:text-dark-accent-blue" />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{certification.date}</span>
          </div>

          {/* Title and issuer */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-light-accent-blue dark:group-hover:text-dark-accent-blue transition-colors duration-300">
            {certification.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {certification.issuer}
          </p>

          {/* Completed badge */}
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">Completed</span>
          </div>

          <Button
            href={certification.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="w-full justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Certificate
          </Button>
          
        
        </div>
      </div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="section-padding relative overflow-hidden bg-gray-50/50 dark:bg-dark-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-accent-blue/5 dark:bg-dark-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-accent-purple/5 dark:bg-dark-accent-purple/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Certifications"
        subtitle="Professional certifications and courses I've completed"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} certification={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
