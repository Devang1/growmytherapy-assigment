'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-14 items-start font-serif text-[#736b5b]">
        
        {/* Text Section */}
        <motion.div
          className="flex-1 max-w-[600px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-medium mb-8 "
            variants={textVariant}
            custom={0}
          >
            About Dr. Serena Blake
          </motion.h2>

          {/* Image for small screens */}
          <motion.div
            className="block lg:hidden mb-8 bg-[#fdf9f6] "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[300px]  overflow-hidden">
              <Image
                src="/SerenaBlake.jpg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover  "
              />
            </div>
          </motion.div>

          {/* Paragraphs */}
          <motion.p
            className="text-[1.05rem] leading-8 mb-6 font-thin"
            variants={textVariant}
            custom={1}
          >
            Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world.
            I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential
            practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to
            their well-being, recognizing that these aspects vary from person to person.
          </motion.p>

          <motion.p
            className="text-[1.05rem] leading-8 mb-6 font-thin"
            variants={textVariant}
            custom={2}
          >
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and
            insights into behavioral patterns and tendencies. I hold a doctorate in Clinical Psychology and have over eight years of
            experience spanning therapy and psychological assessment in both virtual and in-person settings.
          </motion.p>
        </motion.div>

        {/* Image for large screens */}
        <motion.div
          className="hidden lg:block flex-shrink-0 w-[420px] bg-[#fdf9f6] overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/SerenaBlake.jpg"
              alt="Dr. Serena Blake"
              fill
              className="object-cover "
              priority
            />
          </div>
        </motion.div>
      </div>

      <hr className="border-t-2 border-[#42413dc3] w-[90vw] mx-auto my-18 font-thin mb-15" />
    </section>
  );
};

export default About;
