import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const linkItems = ['About Us', 'Team', 'Solutions', 'Blog'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full p-4 bg-white shadow-sm border-b border-[#D9DEDD] relative">
      <div className="container flex justify-between items-center mx-auto">
        <h1 className="text-lg font-bold">
          <Image
            src={'/Logotype.svg'}
            alt="logo"
            width={94}
            height={40}
          />
        </h1>
        <nav className="hidden lg:flex space-x-8">
          <ul className="flex flex-row space-x-8">
            {linkItems.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="text-[#022C22] text-base font-medium leading-6 transition-colors hover:underline hover:text-black"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden lg:flex items-center gap-3 border border-[#0719B3] px-5 py-3 rounded-full text-[#1D1F1E] text-base leading-6 font-medium hover:bg-[#f1f2f2] transition-all">
          <span>Dashboard</span>
          <FaArrowRight width={'10px'} />
        </button>
        <button
          className="lg:hidden flex items-center text-[#022C22] text-base font-medium leading-6 transition-colors hover:underline hover:text-black"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-[#D9DEDD]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            <ul className="flex flex-col space-y-4 p-4">
              {linkItems.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[#022C22] text-base font-medium leading-6 transition-colors hover:underline hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
