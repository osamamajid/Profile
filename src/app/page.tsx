'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // دالة لتحديث موقع الماوس
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <main 
      className="min-h-screen text-white"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black" 
        style={{
          // تغيير خصائص الخلفية بناءً على موقع الماوس
          backgroundPosition: `${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%`,
        }}
        transition={{ duration: 0.2 }}
      >
        <section className="container mx-auto px-4 py-20">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            <motion.div
              className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/osama-profile.jpg"
                alt="Osama Majed"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.h1 className="text-5xl font-bold mb-4" variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}>
              Osama Majed
            </motion.h1>
            <motion.h2 className="text-2xl text-gray-400 mb-6" variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}>
              Mobile & Web Application Developer
            </motion.h2>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
}
