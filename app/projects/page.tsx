'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'CNN-Based Detection of TCP SYN Flood Attacks',
    description:
      'A deep learning-based detection system using Convolutional Neural Networks (CNNs) to enhance accuracy and scalability in identifying TCP SYN Flood DDoS attacks. Conducted a comparative analysis of traditional machine learning algorithms and CNNs, demonstrating the superiority of deep learning in detecting sophisticated DDoS attacks.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Keras'],
    link: '#',
    github: '#',
    status: 'Published in IEEE ATNT International Conference',
  },
  {
    title: 'Signature Recognition and Document Similarity Check',
    description:
      'Trained a CNN model to identify signatures and implemented a document similarity check using the Jaccard Similarity Index. The system fetches corresponding records and verifies document authenticity through advanced machine learning techniques.',
    tech: ['Python', 'Keras', 'TensorFlow', 'CNN'],
    link: '#',
    github: '#',
    status: 'Research Project',
  },
  {
    title: 'Weather Application',
    description:
      'Developed a dynamic weather application integrating the OpenWeather API for real-time weather updates. Implemented responsive UI and seamless API integration to display accurate weather data with an intuitive user interface.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'OpenWeather API'],
    link: '#',
    github: '#',
    status: 'Personal Project',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Academic research and personal projects showcasing my technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </Link>
                      )}
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Project Link"
                        >
                          <ExternalLink size={20} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {project.status}
                  </span>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Want to see more?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and open-source contributions
            </p>
            <Link
              href="https://github.com/kanakjoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all"
            >
              <Github size={20} />
              Visit GitHub Profile
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
