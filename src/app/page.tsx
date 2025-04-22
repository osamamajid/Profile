'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, type Variants } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mobile App - Task Manager",
    description: "A React Native task management app with real-time synchronization and cross-platform support.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    imageUrl: "https://via.placeholder.com/600x400/1a365d/ffffff?text=Task+Manager+App",
    githubUrl: "https://github.com/osama-majed",
    liveUrl: "https://play.google.com/store/apps/..."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://via.placeholder.com/600x400/1a365d/ffffff?text=E-commerce+Platform",
    githubUrl: "https://github.com/osama-majed"
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and multi-language support.",
    technologies: ["React", "Socket.io", "OpenAI", "Express"],
    imageUrl: "https://via.placeholder.com/600x400/1a365d/ffffff?text=AI+Chat+App",
    githubUrl: "https://github.com/osama-majed"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.div
            className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/osama-profile.jpg"
              alt="Osama Majed"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
          <motion.h1 className="text-5xl font-bold mb-4" variants={fadeInUp}>
            Osama Majed
          </motion.h1>
          <motion.h2 className="text-2xl text-gray-400 mb-6" variants={fadeInUp}>
            Mobile & Web Application Developer
          </motion.h2>
          <motion.p className="max-w-2xl text-gray-300 mb-8" variants={fadeInUp}>
            Passionate about creating seamless user experiences through innovative mobile and web applications.
            Specialized in React Native, Next.js, and modern web technologies.
          </motion.p>
          <motion.div className="flex space-x-6" variants={staggerContainer}>
            {[
              { href: "https://www.linkedin.com/in/osama-majid-0a06a4108", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://github.com/osama-majed", icon: <FaGithub />, label: "GitHub" },
              { href: "mailto:osamaalsodany321@gmail.com", icon: <FaEnvelope />, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeInUp}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden 
                border border-gray-700 hover:border-blue-500"
      variants={fadeInUp}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub /> Code
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1 }}
            >
              Live Demo →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
