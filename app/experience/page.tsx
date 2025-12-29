'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Dvio Digitals',
    role: 'Software Developer',
    period: 'July 2025 - Present',
    current: true,
    tech: 'React.js, RR7, TypeScript, Tailwind CSS, Fast API, Python',
    achievements: [
      'Developed an analytics platform delivering real-time engagement metrics and audience insights across multiple platforms',
      'Optimised frontend and backend codebases, refactoring components and API endpoints to improve performance',
      'Architected and implemented an AI chatbot feature, enabling intelligent user assistance and automated insights generation',
    ],
  },
  {
    company: 'Skitre.ai',
    role: 'Software Developer',
    period: 'January 2024 - July 2025',
    current: false,
    tech: 'React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap, REST API, Git, Django/Python',
    achievements: [
      'Built scalable modules for a recruitment platform, including AI-driven video resume tools and AI agents (text, audio, video)',
      'Designed and implemented end-to-end features from scratch, ensuring high reliability and security',
      'Collaborated with UI/UX and backend teams to deliver responsive, optimised, and user-centric interfaces',
      'Applied REST APIs, authentication flows, and cloud integration, ensuring secure and low-latency data access',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-primary" size={24} />
                      <h2 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h2>
                    </div>
                    <h3 className="text-xl text-primary">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Calendar className="text-muted-foreground" size={18} />
                    <span className="text-muted-foreground">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Tech Stack:
                  </h4>
                  <p className="text-muted-foreground">{exp.tech}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
