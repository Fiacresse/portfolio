import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

const roles = ["Développeuse web", "Conceptrice UI/UX", "Créatrice de contenu"];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20 });
  const contentX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const orbX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  };

  return (
    <section id="home" className="hero" onPointerMove={handlePointerMove}>
      <div className="hero-noise" />
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />

      <motion.div
        className="hero-cursor-glow"
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [-180, 180]), y: useTransform(smoothY, [-0.5, 0.5], [-120, 120]) }}
        aria-hidden="true"
      />

      <motion.div
        className="hero-orb hero-orb-one"
        style={{ x: orbX, y: orbY }}
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-orb hero-orb-two"
        style={{ x: orbX, y: orbY }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div className="hero-content" style={{ x: contentX, y: heroY, opacity: heroOpacity }}>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          BONJOUR, JE SUIS FIACRESSE 👋🏽
        </motion.p>

        <div className="hero-title">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I DESIGN.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I <span>CODE.</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I CREATE.
          </motion.h1>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="roles">
            {roles.map((role, index) => (
              <span key={role}>
                {role}
                {index !== roles.length - 1 && <b> · </b>}
              </span>
            ))}
          </div>

          <p className="hero-description">
            Je crée des expériences numériques à la croisée du design,
            de la technologie et de la créativité.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#projects" className="primary-btn">
            Découvrir mes projets
            <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="secondary-btn">
            En savoir plus
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={18} />
        <span>DÉFILEZ POUR EXPLORER</span>
      </motion.div>

      <div className="hero-number">01 / 06</div>
    </section>
  );
}