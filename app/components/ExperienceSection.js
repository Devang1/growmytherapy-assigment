'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function ExperienceSection() {
  return (
    <section className="font-serif text-[#1a1f1e]">
      {/* Experience Content */}
      <div className="bg-[#f9f6ef] py-24 px-6 sm:px-12">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 text-center sm:text-left">
                
                <motion.div
                className="sm:w-2/3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#1a1f1e]">
                    8+ years of practice · 500+ sessions guided
                </p>
                </motion.div>

                <motion.div
                className="flex justify-center sm:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                >
                <a
                    href="#contact"
                    className="inline-block bg-[#1a1f1e] text-white text-base sm:text-lg font-medium px-6 py-3 rounded-xl hover:bg-[#333] transition-colors"
                >
                    Schedule a Consultation
                </a>
                </motion.div>

            </div>
        </div>



      <div className="relative h-[300px] sm:h-[400px] w-full flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={"/images/quote.png"}
          alt="Self care background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />

        {/* Quote Overlay */}
        <div className="relative z-10 max-w-5xl px-6 text-white">
          <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed drop-shadow-lg">
            “Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.”
          </blockquote>
          <cite className="block mt-6 text-base sm:text-lg text-white/80">— Deborah Day</cite>
        </div>

        {/* Optional background dimmer */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </div>
    </section>
  );
}
