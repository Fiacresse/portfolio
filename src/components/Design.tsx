import { motion } from "framer-motion";

const designs = [
  {
    number: "04",
    title: "Système de conception du tableau de bord et de l'interface utilisateur",
    category: "Prototypes Figma",
    description: "Collection de maquettes, prototypes interactifs et systèmes de conception créés sous Figma pour des tableaux de bord financiers, historiques de transactions et formulaires complexes.",
    tools: ["Figma", "Auto-layout", "Variants", "Interactive Prototyping", "Micro-interactions"],
    highlights: [
      "Composants réutilisables prêts pour l'intégration React / Flutter",
      "Travail approfondi sur la hiérarchie visuelle, l'ergonomie et le mode sombre"
    ]
  },
  {
    number: "05",
    title: "Application Mobile E-commerce",
    category: "Design Mobile",
    description: "Maquettes complètes pour une application mobile de commerce électronique avec parcours utilisateur, onboarding et checkout optimisé.",
    tools: ["Figma", "Mobile Design", "User Flows", "Prototyping"],
    highlights: [
      "Design responsive pour iOS et Android",
      "Optimisation du taux de conversion et de l'expérience utilisateur"
    ]
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
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Design() {
  return (
    <section id="design">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants}>Prototypes Figma</motion.h2>

        <motion.p variants={itemVariants}>
          Des interfaces épurées, intuitives et centrées sur l'expérience utilisateur.
          Plusieurs projets et maquettes réalisés avec attention aux détails.
        </motion.p>

        <motion.div variants={containerVariants}>
          {designs.map((design) => (
            <motion.article
              key={design.number}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px rgba(168, 139, 255, 0.2)" 
              }}
            >
              <div>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  {design.number}
                </motion.span>
              </div>

              <p>{design.category}</p>
              <h3>{design.title}</h3>

              <p className="design-description">{design.description}</p>

              <div className="design-tools">
                <span>Outils & Compétences :</span>
                {design.tools.map((tool) => (
                  <motion.span 
                    key={tool} 
                    className="tool-item"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              <ul className="design-highlights">
                {design.highlights.map((highlight, index) => (
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