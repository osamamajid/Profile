'use client';

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
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
]

export default function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          <motion.h1 
            className="text-5xl font-bold mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Osama Majed
          </motion.h1>
          <motion.h2 
            className="text-2xl text-gray-400 mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Mobile & Web Application Developer
          </motion.h2>
          <motion.p 
            className="max-w-2xl text-gray-300 mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            Passionate about creating seamless user experiences through innovative mobile and web applications.
            Specialized in React Native, Next.js, and modern web technologies.
          </motion.p>
          <motion.div 
            className="flex space-x-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { 
                href: "https://www.linkedin.com/in/osama-majid-0a06a4108", 
                icon: <FaLinkedin />,
                label: "LinkedIn"
              },
              { 
                href: "https://github.com/osama-majed", 
                icon: <FaGithub />,
                label: "GitHub"
              },
              { 
                href: "mailto:osamaalsodany321@gmail.com", 
                icon: <FaEnvelope />,
                label: "Email"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
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

      {/* Projects Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SkillCard 
            title="Mobile Development" 
            skills={["React Native", "iOS", "Android", "Flutter"]} 
          />
          <SkillCard 
            title="Frontend" 
            skills={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]} 
          />
          <SkillCard 
            title="Backend" 
            skills={["Node.js", "Express", "MongoDB", "Firebase"]} 
          />
          <SkillCard 
            title="Tools & DevOps" 
            skills={["Git", "Docker", "AWS", "CI/CD"]} 
          />
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <motion.a
            href="mailto:osamaalsodany321@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                     text-white font-bold py-3 px-8 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden 
                border border-gray-700 hover:border-blue-500"
      variants={fadeInUp}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48">
        {!imageError ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600">No Image Available</span>
          </div>
        )}
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
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500"
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li 
            key={index} 
            className="text-gray-400"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
