'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice is required for cancellations or rescheduling.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f9f6ef] py-20 px-6 sm:px-12 font-serif">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#736b5b] font-light text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#b9b1a4] pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center gap-3 text-[#736b5b]">
                {openIndex === index ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
                <p className="text-lg sm:text-xl">{item.question}</p>
              </div>

              {openIndex === index && (
                <motion.p
                  className="pl-8 pr-2 pt-3 text-[#736b5b] text-base sm:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-[#42413dc3] w-[90vw] mx-auto my-18 font-thin mb-15" />
    </section>
  );
};

export default FaqSection;
