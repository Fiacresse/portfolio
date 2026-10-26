import { motion } from "framer-motion";

const designs = [
  {
    number: "04",
    title: "Système de conception de tableaux de bord et d'interfaces utilisateur",
    category: "Prototypes Figma",
    description: "Collection de maquettes, prototypes interactifs et systèmes de conception créés sous Figma pour des tableaux de bord financiers, historiques de transactions et formulaires complexes.",
    tools: ["Figma", "Mise en page automatique", "Variantes", "Prototypage interactif", "Micro-interactions"],
    highlights: [
      "Composants réutilisables prêts pour l'intégration React / Flutter",
      "Travail approfondi sur la hiérarchie visuelle, l'ergonomie et le mode sombre"
    ]
  },
  {
    number: "05",
    title: "Application mobile de commerce électronique",
    category: "Conception mobile",
    description: "Maquettes complètes pour une application mobile de commerce électronique avec parcours utilisateur, prise en main et paiement optimisé.",
    tools: ["Figma", "Conception mobile", "Parcours utilisateur", "Prototypage"],
    highlights: [
      "Conception adaptative pour iOS et Android",
      "Optimisation du taux de conversion et de l'expérience utilisateur"
    ]
  },
  {
    number: "06",
    title: "Lens-light",
    category: "Portfolio photographie · UI/UX & front-end",
    description: "Conception UI/UX et intégration d'un portfolio créatif dédié à la photographie. Accent mis sur le rendu visuel, la fluidité de la galerie et la sobriété de l'interface.",
    tools: ["Figma", "Galerie photo", "Design responsive", "Animations douces", "Front-end"],
    highlights: [
      "Maquette Figma pensée pour une navigation fluide et des visuels grand format",
      "Interface responsive avec mode sombre et typographie épurée"
    ]
  },
  {
    number: "07",
    title: "NexHub",
    category: "Plateforme web · Dashboard & Design System",
    description: "Design UI/UX et architecture front-end pour la plateforme NexHub. Élaboration d'un Design System complet sur Figma et développement de composants modularisés sous React et Tailwind CSS.",
    tools: ["Figma", "React", "Vite", "Tailwind CSS", "Git"],
    highlights: [
      "Création d'un Design System avec composants réutilisables : boutons, cartes, formulaires, modales et tableaux de bord",
      "Organisation claire des espaces de travail et affichage lisible des données",
      "Workflow Git rigoureux avec branches de fonctionnalités et environnements beta, staging et main"
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
        <motion.h2 variants={itemVariants}>Design & expérience numérique</motion.h2>

        <motion.p variants={itemVariants}>
          Des interfaces épurées et intuitives, de la maquette Figma à l'intégration web.
          Découvrez des projets pensés pour une expérience visuelle fluide et responsive.
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