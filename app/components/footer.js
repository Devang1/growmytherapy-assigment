'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#f9f6ef] text-[#1a1f1edf] text-center py-12 px-4 font-serif">
        <hr className="border-t-2 border-[#42413dc3] w-[90vw] mx-auto my-18 font-thin mb-15" />
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Name & Title */}
        <h2 className="text-2xl sm:text-3xl font-thin mb-12">
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>

        {/* Contact Info */}
        <div className="text-lg sm:text-xl space-y-1">
          <p>
            <a href="mailto:serena@blakepsychology.com" className="underline hover:text-[#4a4a4a]">
              serena@blakepsychology.com
            </a>
          </p>
          <p className='mb-5 mt-2 text-[#4a4a4a]'>
            Phone: <a href="tel:3235550192" className=" text-[#141414] hover:text-[#4a4a4a]">(323) 555-0192</a>
          </p>
          <p className='text-[#4a4a4a]'>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>

        {/* Footer Links */}
        <div className="text-base space-x-4 pt-2">
          <Link href="/" className="underline hover:text-[#4a4a4a]">Home</Link>
          <Link href="/privacy" className="underline hover:text-[#202020] ">Privacy Policy</Link>
          <Link href="/good-faith-estimate" className="underline hover:text-[#4a4a4a]">Good Faith Estimate</Link>
        </div>

        {/* Portal link */}
        <div className="pt-6  mt-15 mb-10">
          <Link href="/portal" className="underline text-lg hover:text-[#4a4a4a]">
            Client Portal
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-md text-[#3d3d3d] pt-6">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
