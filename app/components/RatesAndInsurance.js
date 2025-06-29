'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function RatesAndInsurance() {
  return (
    <section
      id="rates"
      className="bg-[#94b4b6] text-center py-8 px-6 sm:px-12 sm:pt-18 font-serif text-[#1a1f1e]"
    >
      <motion.h2
        className="text-2xl sm:text-2xl md:text-3xl font-thin mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Rates and Insurance
      </motion.h2>

      {/* Session Fees */}
      <motion.div
        className="text-base sm:text-md mb-6 font-thin"
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        $200 / individual session
        <br />
        $240 / couples session
      </motion.div>

      {/* Office Hours */}
      <motion.div
        className="text-base sm:text-md mb-8 font-thin"
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        In-person: Tue & Thu, 10 AM–6 PM
        <br />
        Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
      </motion.div>

      {/* Insurance Info */}
      <motion.p
        className="max-w-5xl mx-auto text-base sm:text-lg md:text-lg leading-relaxed px-4 font-thin"
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        I proudly welcome both private pay and insurance clients, making quality care accessible, flexible, and tailored to your financial needs
      </motion.p>
    </section>
  );
}
