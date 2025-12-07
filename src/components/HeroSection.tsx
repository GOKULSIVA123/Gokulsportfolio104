import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import profileImage from "@/assets/Gokul Photo.jpg";
import SocialLinks from "./SocialLinks";
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center mt-40"
      >
        {/* <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-blue-500 opacity-30 blur-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div> */}

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Creative Developer</span>
          <br />
          <span className="text-foreground">Adaptive Problem Solver</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Dedicated to building web applications that solve real-life problems
          and enhance everyday experiences.
        </motion.p>
        <motion.div className="flex flex-col justify-center items-center gap-6">
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="hero-gradient text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg inline-block"
            >
              View My Work
            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Download CV
            </Button>
          </motion.div>
          <SocialLinks></SocialLinks>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-12">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-primary mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
