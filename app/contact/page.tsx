'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <Link
                  href="mailto:Kanak31.joshi@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">Kanak31.joshi@gmail.com</div>
                  </div>
                </Link>

                <Link
                  href="tel:+917440898360"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+91 7440898360</div>
                  </div>
                </Link>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Pune, India</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 space-y-6"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Social Links
              </h2>

              <div className="space-y-4">
                <Link
                  href="https://www.linkedin.com/in/kanak-joshi-766104212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium">Connect with me</div>
                  </div>
                </Link>

                <Link
                  href="https://github.com/kanakjoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="font-medium">View my projects</div>
                  </div>
                </Link>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Available For
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Full-time positions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Freelance projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Consulting opportunities
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-card backdrop-blur-sm border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Link
              href="mailto:Kanak31.joshi@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all"
            >
              <Mail size={20} />
              Send an Email
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
