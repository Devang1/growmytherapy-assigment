'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn to manage overwhelming thoughts, chronic worry, and physical symptoms of anxiety through evidence-based strategies like CBT, mindfulness, and relaxation techniques.',
    image: '/images/anxiety.jpg',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Work through relationship challenges, improve communication, rebuild trust, and deepen emotional connections — whether as an individual or couple.',
    image: '/images/relationship.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past traumatic experiences in a supportive environment. We use approaches like EMDR, somatic therapies, and trauma-informed care to help you reclaim your sense of safety.',
    image: '/images/trauma.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f9f6ef] text-[#3e3d39ee] font-serif">
      {/* Introductory Section */}
      <div className="px-6 sm:px-12 lg:px-20 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-snug font-thin mb-8 max-w-4xl mx-auto">
            Therapy is more than treatment—
            <br /> it&#39;s an investment in your healing, clarity, and growth.
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-[#4a4a4af3] leading-relaxed mb-20">
            Whether you&#39;re experiencing anxiety, burnout, trauma, or
            relationship challenges, therapy provides a supportive space to
            understand, reflect, and reconnect with yourself. You don&#39;t have to
            face these challenges alone — this space is here for you.
          </p>
        </motion.div>
        <hr className="border-t-2 border-[#42413dc3] w-[90vw] mx-auto my-8 font-thin" />
      </div>

      {/* Services Grid */}
      <div className="py-15 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-30">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-thin text-[#2e2e2eea]">
            Services & Specialties
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Hoverable image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-72 h-72 relative rounded-full overflow-hidden shadow-md mb-8 cursor-pointer transition-shadow duration-300 hover:shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Title */}
              <h4 className="text-xl md:text-2xl font-medium mb-4 text-[#2f423a]">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-[#4b4b4b]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
