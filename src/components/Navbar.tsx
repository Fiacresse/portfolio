import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#" className="navbar-logo">
        FA<span>.</span>
      </a>

      <nav className="navbar-links">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#design">Conception</a>
        <a href="#content">Contenu</a>
      </nav>

      <a href="#contact" className="navbar-contact">
        Parlons-en
        <ArrowUpRight size={16} />
      </a>
    </motion.header>
  );
}