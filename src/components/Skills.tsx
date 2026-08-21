import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "PHP",
  "Laravel",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Docker",
  "Figma",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.6,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.p variants={itemVariants}>MES COMPÉTENCES</motion.p>

        <motion.h2 variants={itemVariants}>
          Technologies avec lesquelles j'aime travailler.
        </motion.h2>

        <motion.div variants={containerVariants}>
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}