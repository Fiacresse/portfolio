import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "NovaBanque",
    subtitle: "Système de gestion financière",
    description: "Plateforme de gestion financière conçue avec une architecture événementielle pour garantir la rapidité et la fiabilité des opérations en temps réel. Traitant 1000+ transactions/jour avec zéro downtime.",
    stack: ["Laravel", "Redis Streams", "Laravel Reverb", "Tailwind CSS"],
    highlights: [
      "Architecture événementielle entièrement découplée et réactive en temps réel",
      "Modélisation avancée des flux de transactions avec sécurité cryptographique",
      "Projet soutenance de fin d'études — Validé et déployé en production",
      "📊 Performance: <100ms latency, 99.9% uptime"
    ]
  },
  {
    number: "02",
    title: "TontiPro",
    subtitle: "Secrétaire de Tontine Digitale",
    description: "Solution SaaS complète pour automatiser et sécuriser la gestion des tontines. Permet à 50+ groupes de gérer leurs cotisations et tirages sans friction, avec traçabilité complète.",
    stack: ["Laravel", "React", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Projet collaboratif 8+ semaines : conception UX/UI, backend, déploiement et support client",
      "Tableau de bord temps réel : suivi des cotisations, calendrier des tirages, alertes automatiques",
      "Système de permissions granulaires avec audit trail complet pour transparence",
      "📊 Résultat : Déploiement auprès de 50+ groupes avec taux d'adoption de 90%"
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.7,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants}>FIACRESSE — Digital Creative</motion.h2>

        <motion.div variants={containerVariants}>
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px rgba(168, 139, 255, 0.2)" 
              }}
            >
              <p>{project.number}</p>

              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                <span>Stack Tech :</span>
                {project.stack.map((tech) => (
                  <motion.span 
                    key={tech} 
                    className="tech-item"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}