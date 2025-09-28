import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring real-time inventory management and payment processing.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.',
      technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent analytics dashboard that leverages machine learning to provide actionable insights for business growth.',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['Vue.js', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
      technologies: ['React Native', 'Express', 'MongoDB', 'WebRTC'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop website builder specifically designed for creatives and professionals to showcase their work.',
      technologies: ['React', 'Django', 'AWS S3', 'Framer Motion'],
      image: '/api/placeholder/400/300',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group perspective-1000"
              >
                <Card className="card-gradient border-border/20 overflow-hidden h-full hover-glow transition-all duration-500 transform-gpu">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold hero-gradient text-white rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/50 text-foreground rounded-md border border-border/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="hero-gradient text-white hover:shadow-lg transition-all duration-300 flex-1"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border/30 hover:bg-secondary/50 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;