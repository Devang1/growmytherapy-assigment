'use client';

import HeroVideo from './Herovideo';
import { motion } from 'framer-motion';
import Link from 'next/link';
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9f6ef] via-[#f8f6f2] to-[#fdfaf2] pt-4 sm:pt-20 md:pt-10 pb-10 sm:pb-15 md:pb-15 px-4 sm:px-6 md:px-8">
      <div className="relative max-w-7xl mx-auto rounded-lg overflow-hidden min-h-[calc(100vh-80px)]  flex items-center justify-center">
        {/* Background Video */}
        <HeroVideo />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 pointer-events-none" />

        {/* Hero Content */}
        <motion.div
          className="relative z-20 text-center text-white px-4 py-8 sm:py-12 md:py-16"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 md:mb-8 tracking-tight"
            variants={fadeUp}
            custom={0}
          >
            Compassionate Therapy for
          </motion.h1>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 tracking-tight"
            variants={fadeUp}
            custom={1}
          >
            Growth and Renewal
          </motion.h1>

          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-4xl md:max-w-4xl mx-auto mb-5 sm:mb-7 md:mb-10 leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            Helping adults navigate life’s challenges through thoughtful, evidence-based telepsychology—wherever you are.
          </motion.h2>
          <Link href="#contact">
            <motion.button
                className="bg-[#94ada9] hover:bg-[#7e9995ce] w-[250px] h-[180px] md:w-[300px] md:h-[220px] text-white text-sm sm:text-base font-semibold tracking-wide uppercase px-5 py-5 transition-all duration-300 ease-in-out  rounded-full cursor-pointer shadow-md"
                style={{
                  clipPath: 'ellipse(49% 20% at 50% 50%)',
                }}
                variants={fadeUp}
                custom={3}
              >
                Schedule a Consultation
            </motion.button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
