import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Content() {
  return (
    <section id="content">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.p variants={itemVariants}>
          CRÉATION DE CONTENU
        </motion.p>

        <motion.h2 variants={itemVariants}>
          Je débute tout juste.
        </motion.h2>

        <motion.p variants={itemVariants}>
          J'explore la création de contenu autour de la technologie, de la conception,
          du développement et de mon parcours en tant que jeune créatif dans la tech.
        </motion.p>

        <motion.a
          href="https://www.youtube.com/@fiacresse" 
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="content-button"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 139, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Suivre sur YouTube →
        </motion.a>
      </motion.div>
    </section>
  );
}