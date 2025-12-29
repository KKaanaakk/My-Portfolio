'use client';

import { ArrowRight, Code, Database, Server } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Kanak Joshi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Full-Stack Developer specializing in React.js and Node.js
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable, production-ready applications with a focus on clean code and exceptional user experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/projects"
              className="group px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Frontend Development
            </h3>
            <p className="text-muted-foreground">
              Expert in React.js, Next.js, TypeScript, and modern CSS frameworks to create responsive and intuitive interfaces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Backend Development
            </h3>
            <p className="text-muted-foreground">
              Proficient in Node.js, Python, Django, and FastAPI for building scalable RESTful APIs and server-side applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Database & Cloud
            </h3>
            <p className="text-muted-foreground">
              Experience with MongoDB, MySQL, Docker, and cloud integration for robust data management solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Currently at Dvio Digitals
          </h2>
          <p className="text-lg text-muted-foreground">
            Developing analytics platforms with real-time engagement metrics and AI-powered features
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Learn more about my experience
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
