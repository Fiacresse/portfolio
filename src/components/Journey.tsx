import { motion } from "framer-motion";

const journey = [
  {
    year: "2022 — 2026",
    title: "Licence en Informatique",
    description:
      "Formation en informatique avec une spécialisation progressive dans le développement web, les bases de données et la conception d'applications.",
  },
  {
    year: "2024 — 2026",
    title: "Développement Web",
    description:
      "Développement de projets avec HTML, CSS, JavaScript, React, PHP, Laravel et Node.js, tout en développant mes compétences avec Git, GitHub et Docker.",
  },
  {
    year: "2025 — 2026",
    title: "UI/UX & Design",
    description:
      "Développement de ma créativité et de mes compétences en conception d'interfaces avec Figma, en travaillant sur l'expérience utilisateur et le design responsive.",
  },
  {
    year: "2026 →",
    title: "Création de contenu",
    description:
      "Je débute progressivement dans la création de contenu autour de la technologie, du design, du développement et de mon évolution dans le numérique.",
  },
  {
    year: "Objectif",
    title: "Master — IA & Big Data",
    description:
      "Mon prochain objectif académique est d'intégrer un Master en Intelligence Artificielle et Big Data afin d'approfondir mes compétences et construire des projets innovants.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Journey() {
  return (
    <section id="journey">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <p>MON PARCOURS</p>

          <h2>
            De la <span>curiosité</span> à la création.
          </h2>

          <p>
            Mon parcours évolue entre informatique, développement,
            design et création, avec une ambition tournée vers
            l'Intelligence Artificielle et le Big Data.
          </p>
        </motion.div>

        <motion.div variants={containerVariants}>
          {journey.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
