import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { number: "15+", label: "Projects Done" },
    { number: "2", label: "Internships Completed" },
    { number: "2", label: "Coding Languages Mastered" },
    { number: "0", label: "Open Source Contribution" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer dedicated to creating innovative digital solutions that solve real-world problems and enhance daily life. My main focus is on integrating AI and automation into web applications to make technology smarter, more efficient, and accessible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science Engineering student in my third year at
                Sri Sairam Engineering College, Chennai, passionate about
                building web applications that solve real-world problems and
                improve daily life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in web development is driven by a love for coding,
                curiosity for new technologies, and a strong belief in creating
                user-friendly, practical solutions. I specialize in React and
                Python, and I have a keen interest in automation tools like n8n
                that help streamline workflows and enhance productivity. I
                constantly adapt to the latest tech trends, always eager to
                learn and grow as a developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should make life simple and accessible—my
                goal is to create intuitive web apps that others find
                comfortable to use. I enjoy working alongside other developers,
                embracing teamwork and knowledge sharing to craft better digital
                experiences and learn from the community around me.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center hover-glow transition-smooth"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
