import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }
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
              I'm a passionate full-stack developer with a love for creating innovative digital solutions that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 3 years of experience in web development, I've had the privilege of working with diverse clients 
                and projects, from startup MVPs to enterprise-level applications. My passion lies in crafting clean, 
                efficient code and creating user experiences that truly make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in modern JavaScript frameworks, cloud technologies, and have a keen eye for design. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great software is not just about the code—it's about understanding people, solving problems, 
                and creating solutions that enhance lives. Let's build something amazing together!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center hover-glow transition-smooth"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient p-6 border-border/20 hover-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Clean Code</h4>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code following industry best practices and modern standards.
              </p>
            </Card>

            <Card className="card-gradient p-6 border-border/20 hover-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">User-Centered</h4>
              <p className="text-muted-foreground">
                Designing and developing applications with user experience at the forefront of every decision.
              </p>
            </Card>

            <Card className="card-gradient p-6 border-border/20 hover-glow transition-smooth">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Performance</h4>
              <p className="text-muted-foreground">
                Optimizing applications for speed, efficiency, and seamless user experiences across all devices.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;