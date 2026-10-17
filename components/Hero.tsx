"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="eyebrow">
          EST. 1998 · FAMILY OWNED FARM
        </motion.p>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          Raising cattle<br/><span>with purpose.</span>
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className="hero-description">
          Quality cattle, responsible farming and a commitment to sustainable agriculture.
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.6}} className="hero-actions">
          <a href="#livestock" className="primary-button">Explore our cattle →</a>
          <a href="#about" className="secondary-button">Discover our farm</a>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>QUALITY</span><span>SUSTAINABILITY</span><span>ANIMAL CARE</span></div>
    </section>
  );
}