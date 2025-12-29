'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Pune, India</span>
            </div>
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Profile</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Full-stack developer specialising in React.js and Node.js development with strong expertise in building scalable, production-ready applications. Proven ability to design and implement end-to-end features, create RESTful APIs, and optimise application performance. Skilled in modern JavaScript frameworks, TypeScript, cloud technologies, and agile development practices. Passionate about creating intuitive user experiences while maintaining robust backend architectures and writing clean, maintainable code.
            </p>
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-primary" size={28} />
              <h2 className="text-2xl font-semibold text-foreground">Education</h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Masters of Technology (M.Tech) in Computer Science
                </h3>
                <p className="text-primary">PES University, Bangalore</p>
                <p className="text-muted-foreground">
                  Concentration: Cyber Security
                </p>
                <p className="text-muted-foreground">February 2023 - June 2024</p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Bachelor of Technology (B.Tech) in Computer Science
                </h3>
                <p className="text-primary">Parul University, Vadodara</p>
                <p className="text-muted-foreground">
                  Concentration: Computer Science Engineering
                </p>
                <p className="text-muted-foreground">July 2018 - July 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-primary mb-3">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript (ES6+)', 'TypeScript'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary mb-3">
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js',
                    'Next.js',
                    'Node.js',
                    'Docker',
                    'Django',
                    'FastAPI',
                    'Git',
                    'REST APIs',
                    'Tailwind CSS',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary mb-3">
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="text-primary" size={28} />
              <h2 className="text-2xl font-semibold text-foreground">
                Achievements & Certifications
              </h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  24-hour Hackathon (Dotslash)
                </h3>
                <p className="text-muted-foreground">
                  Team leader of Memory Mavericks - Secured a position among the top 10
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  Research Publication
                </h3>
                <p className="text-muted-foreground">
                  Published and presented research in network security & deep learning applications
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">
                  Web Development Certification
                </h3>
                <p className="text-muted-foreground">Udemy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
