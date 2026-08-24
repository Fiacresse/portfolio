import { motion } from "framer-motion";
import {
  Languages,
  Music,
  Video,
  Plane,
  BookOpen,
} from "lucide-react";

const interests = [
  {
    icon: Music,
    title: "Musique",
    description: "Écouter de la musique",
  },
  {
    icon: Video,
    title: "Vidéo",
    description: "Créer des vidéos",
  },
  {
    icon: Plane,
    title: "Voyage",
    description: "Découvrir de nouveaux endroits",
  },
  {
    icon: BookOpen,
    title: "Lecture",
    description: "Lire et apprendre",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* INTRODUCTION */}
        <motion.div
          className="about-heading"
          variants={itemVariants}
        >
          <p className="section-label">À PROPOS DE MOI</p>

          <h2>
            Esprit créatif,
            <br />
            <span>passionnée de technologie.</span>
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          className="about-description"
          variants={itemVariants}
        >
          <p>
            Je suis <strong>Fiacresse Agbodo</strong>, une jeune passionnée
            par la technologie et la création numérique.
          </p>

          <p>
            J'aime concevoir des interfaces modernes, développer des
            expériences web et transformer des idées en projets concrets.
            Mon parcours se situe à la croisée du
            <strong> développement</strong>, de la <strong>conception</strong> et
            de la <strong>créativité</strong>.
          </p>

          <p>
            Dynamique, curieuse et ambitieuse, je cherche constamment à
            apprendre de nouvelles choses et à développer mes compétences.
            Aujourd'hui, je m'intéresse également à la création de contenu
            et je souhaite continuer à évoluer dans le domaine de
            l'Intelligence Artificielle et des mégadonnées.
          </p>
        </motion.div>

        {/* LANGUAGES */}
        <motion.div
          className="about-block"
          variants={itemVariants}
        >
          <div className="about-block-title">
            <Languages size={22} />
            <h3>Langues</h3>
          </div>

          <div className="languages">
            <div className="language">
              <span>Français</span>
              <span>Courant</span>
            </div>

            <div className="language">
              <span>Anglais</span>
              <span>Intermédiaire</span>
            </div>
          </div>
        </motion.div>

        {/* INTERESTS */}
        <motion.div
          className="about-block"
          variants={itemVariants}
        >
          <div className="about-block-title">
            <h3>Quand je ne code pas...</h3>
          </div>

          <motion.div
            className="interests"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <motion.div
                  className="interest-card"
                  key={interest.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <Icon size={24} />

                  <h4>{interest.title}</h4>

                  <p>{interest.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}