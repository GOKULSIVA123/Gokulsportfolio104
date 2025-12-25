import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gadgetImage from "@/assets/Electro E-commerce.png";
import taskflow from "@/assets/Taskflow.png";
import rps from "@/assets/RPS.png";
import nextgen from "@/assets/nextgen.png";
const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Internship Application Tracker",
      description:
        "A comprehensive full-stack application designed to organize your job search. Built with a React frontend and a Motia-powered Node.js backend, it features real-time status tracking, automated email notifications via Nodemailer, and secure authentication with Clerk. The event-driven architecture ensures a seamless and responsive user experience.",
      technologies: [
        "React",
        "Motia",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "Clerk",
      ],
      image: taskflow,
      liveUrl: "https://internship-tracker.onrender.com",
      githubUrl: "https://github.com/GOKULSIVA123/InternTrack001",
      featured: true,
    },
    {
      title: "GadgetNest E-Commerce Platform",
      description:
        "Developed a fully responsive e-commerce website for premium gadgets using React.js and Tailwind CSS. Implemented dynamic product listings, secure shopping cart, and promotional modules. Enhanced user experience with react-slick carousels and AOS scroll animations. Followed best practices for scalability, performance, and modern front-end architecture.",
      technologies: [
        "React",
        "Tailwind css",
        "JavaScript",
        "CSS",
        "React-Router",
      ],
      image: gadgetImage,
      liveUrl: " https://gokulsiva123.github.io/My-Electro-Ecommerce/",
      githubUrl: "https://github.com/GOKULSIVA123/My-Electro-Ecommerce",
      featured: true,
    },
    {
      title: "Taskflow Application",
      description:
        "TaskFlow is a full-stack to-do list app with a Flask REST API backend and a React frontend. Its core feature is n8n integration, where a scheduler automatically runs every day at 11 PM to fetch and email a consolidated Excel report of all today's tasks. This setup showcases basic API, database, and automation skills.",
      technologies: [
        "N8N",
        "Python",
        "Flask",
        "React",
        "Tailwind CSS",
        "SQlite",
        "Javascript",
        "Docker",
      ],
      image: taskflow,
      liveUrl: "https://taskflow-4-frontend.onrender.com/",
      githubUrl: "https://github.com/GOKULSIVA123/TaskFlow",
      featured: true,
    },
    {
      title: "NextGen Safe Education Platform",
      description:
        "Developed a disaster awareness education platform with React and Tailwind CSS, designed for engaging and interactive learning for kids. Integrated Framer Motion for smooth animations and Chart.js for visual progress tracking. Implemented Twilio for WhatsApp integration to provide timely safety alerts and communication. The platform features a clean, intuitive UI focused on safety education and easy navigation.",
      technologies: [
        "React",
        "Python",
        "Flask",
        "Chart.js",
        "Twilio",
        "Tailwindcss",
      ],
      image: nextgen,
      githubUrl:
        "https://github.com/GOKULSIVA123/Disaster-Management-Application-01",
      liveUrl: "https://nextgensafe04.netlify.app/",
      featured: true,
    },
    {
      title: "RockPaperScissor Game",
      description:
        "Developed a Simple Rock Paper Scissors game using JavaScript, HTML, and Tailwind CSS. The project delivers an interactive and seamless gameplay. Responsive design ensures optimal experience across devices. Implements smooth instant result display for engaging play.",
      technologies: ["Html", "Javascript", "Tailwindcss"],
      image: rps,
      liveUrl: "https://rockpaperscissongs.netlify.app/",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group perspective-1000"
            >
              <Card className="card-gradient border-border/20 overflow-hidden h-full hover-glow transition-all duration-500 transform-gpu">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                    <div key={index} className="text-6xl opacity-20">
                      <img src={project.image} className=""></img>
                    </div>
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

                  <div className="flex flex-row gap-3 justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="hero-gradient text-white hover:shadow-lg transition-all duration-300 flex-1"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border/30 hover:bg-secondary/50 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Github Repo
                      </Button>
                    </a>
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
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
