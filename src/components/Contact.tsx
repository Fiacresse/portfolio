import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.p variants={itemVariants}>
          CONTACTEZ-MOI
        </motion.p>

        <motion.h2 variants={itemVariants}>
          Créons quelque chose d'extraordinaire.
        </motion.h2>

        <motion.p variants={itemVariants}>
          Vous avez un projet, une opportunité ou une idée ? J'aimerais avoir de vos nouvelles.
        </motion.p>

        <motion.div variants={itemVariants} className="contact-info">
          <a href="mailto:fiacresseagbodo@gmail.com" className="contact-item">
            <Mail size={20} />
            <span>fiacresseagbodo@gmail.com</span>
          </a>

          <a href="tel:+2250707070707" className="contact-item">
            <Phone size={20} />
            <span>+229 0146298015
            </span>
          </a>
        </motion.div>

        <motion.a
          href="mailto:fiacresseagbodo@gmail.com"
          variants={itemVariants}
          className="contact-button"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(168, 139, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Dis bonjour →
        </motion.a>
      </motion.div>
    </section>
  );
}