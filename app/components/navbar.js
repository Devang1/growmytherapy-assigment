'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const containerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="w-full z-50 bg-[#f7f5ef]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 pt-10 pl-0.5 flex justify-between items-center">
        {/* Brand Logo and Name */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/navimage.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="text-[#305240] font-serif leading-tight">
              <div className="text-xl md:text-2xl">Dr. Serena Blake, PsyD</div>
              <div className="text-lg md:text-xl">Clinical Psychologist</div>
            </div>
          </Link>
        </motion.div>


        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#305240] focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#f7f5ef] border-t border-[#ddd] px-6 py-4 space-y-4 text-center text-lg font-serif text-[#305240]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
