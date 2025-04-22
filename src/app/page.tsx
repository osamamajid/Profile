'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[]; // يمكنك إضافة التكنولوجيات المناسبة
  html_url: string;
  language: string; // لغة البرمجة أو التقنية
  stargazers_count: number; // عدد النجوم على المشروع
  forks_count: number; // عدد الفروع
  owner: { login: string; avatar_url: string }; // صاحب المشروع
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

export default function Home() {
  // Move hooks inside the functional component
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      try {
        const response = await fetch('https://api.github.com/users/osama-majed/repos', {
          headers: {
            'Authorization': `token ${githubToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('فشل في جلب البيانات');
        }

        const data = await response.json();
        setRepos(data); // تعيين البيانات
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []); // جلب البيانات عند تحميل الصفحة

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* القسم الخاص بالملف الشخصي */}
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
              src="/images/osama-profile.jpg"
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
            {[{ href: "https://www.linkedin.com/in/osama-majid-0a06a4108", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://github.com/osama-majed", icon: <FaGithub />, label: "GitHub" },
              { href: "mailto:osamaalsodany321@gmail.com", icon: <FaEnvelope />, label: "Email" }]
              .map((social, index) => (
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

      {/* عرض المشاريع من GitHub */}
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

        {/* التحقق من حالة التحميل */}
        {loading ? (
          <div className="text-center text-lg text-white">جاري تحميل المشاريع...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {repos.map((repo) => (
              <ProjectCard key={repo.id} project={repo} />
            ))}
          </motion.div>
        )}
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
          src={project.owner.avatar_url}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <motion.span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            {project.language}
          </motion.span>
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
