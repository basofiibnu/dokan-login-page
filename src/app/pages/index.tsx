'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, JSX } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content.tsx';
import { fadeIn, fadeInUp } from '../constant';

export default function LoginPage(): JSX.Element {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const footerInView = useInView(footerRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        <Header />
      </motion.div>
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <Content />
      </motion.div>
      <motion.div
        ref={footerRef}
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
