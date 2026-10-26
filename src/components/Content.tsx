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
        <motion.p className="content-eyebrow" variants={itemVariants}>
          MONTAGE VIDÉO & CRÉATION DE CONTENU
        </motion.p>

        <motion.h2 variants={itemVariants}>
          Des vidéos qui captent l’attention.
        </motion.h2>

        <motion.p className="content-description" variants={itemVariants}>
          UI/UX Designer et développeuse web, je crée des montages dynamiques pour
          l’e-commerce et les réseaux sociaux : formats courts, Reels et TikTok,
          sous-titres animés et rythme soigné.
        </motion.p>

        <motion.p className="content-note" variants={itemVariants}>
          Extraits et démonstrations disponibles sur demande.
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
          Découvrir ma chaîne YouTube →
        </motion.a>
      </motion.div>
    </section>
  );
}