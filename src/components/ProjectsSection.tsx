import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import gadgetImage from "@/assets/Electro E-commerce.png";
import taskflow from "@/assets/Taskflow.png";
import rps from "@/assets/RPS.png";
import nextgen from "@/assets/nextgen.png";
import InternTrack from "@/assets/InternTrack.png";
import Translatepro from "@/assets/Translatepro.png";
import n8nAiWorkflow from "@/assets/n8n_ai_news_workflow.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TranslatePro",
      description:
        "A high-fidelity document translation system developed by a team of four as an internship project. Designed to convert complex technical PDFs into other languages while strictly preserving layouts, diagrams, and formatting. Built with a React frontend and a Python FastAPI backend, it leverages Azure AI Translator for enterprise-grade accuracy. It features real-time processing, secure document handling, and a responsive interface powered by Vite and Framer Motion.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Python",
        "FastAPI",
        "Azure AI",
        "SQLite",
      ],
      image: Translatepro,
      liveUrl: "https://translatepro01-3.onrender.com/",
      githubUrl: "https://github.com/GOKULSIVA123/TranslatePro01.git",
      featured: true,
    },
    {
      title: "Autonomous AI News Agent",
      description:
        "An automated AI News Aggregator and Summarization Agent built on n8n. The system automatically fetches daily articles from multiple technical RSS feeds (such as Hugging Face,marktechpost and openai.com), cross-references them with Google Sheets to filter out duplicates, utilizes a Groq-powered Large Language Model to synthesize complex updates into simple summaries, and schedules daily delivery via Gmail and Telegram at 9 PM to track trends with zero manual effort.",
      technologies: [
        "n8n",
        "Groq AI",
        "Gmail API",
      ],
      image: n8nAiWorkflow,
    },
    {
      title: "Internship Application Tracker",
      description:
        "A comprehensive full-stack application designed to organize your job search. Built with a React frontend and a Motia-powered Node.js backend, it features real-time status tracking, automated email notifications via Nodemailer, and secure authentication with Clerk. The event-driven architecture ensures a seamless and responsive user experience.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "Clerk",
      ],
      image: InternTrack,
      liveUrl: "https://interntrack001-3.onrender.com/",
      githubUrl: "https://github.com/GOKULSIVA123/InternTrack001",
      featured: true,
    },
    {
      title: "GadgetNest E-Commerce Platform",
      description:
        "Developed a fully responsive e-commerce website for premium gadgets using React.js and Tailwind CSS. Implemented dynamic product listings, secure shopping cart, and promotional modules. Enhanced user experience with react-slick carousels and AOS scroll animations. Followed best practices for scalability, performance, and modern front-end architecture.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "React-Router",
      ],
      image: gadgetImage,
      liveUrl: "https://gokulsiva123.github.io/My-Electro-Ecommerce/",
      githubUrl: "https://github.com/GOKULSIVA123/My-Electro-Ecommerce",
      featured: true,
    },
    {
      title: "Taskflow Application",
      description:
        "TaskFlow is a full-stack to-do list app with a Flask REST API backend and a React frontend. Its core feature is n8n integration, where a scheduler automatically runs every day at 11 PM to fetch and email a consolidated Excel report of all today's tasks. This setup showcases basic API, database, and automation skills.",
      technologies: [
        "n8n",
        "Python",
        "Flask",
        "React",
        "Tailwind CSS",
        "SQLite",
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
        "Developed a disaster awareness education platform with React and Tailwind CSS, designed for engaging and interactive learning for kids. Integrated Framer Motion for smooth animations and Chart.js for visual progress tracking. Implemented Twilio for WhatsApp integration to provide timely safety alerts and communication. The platform features a clean, intuitive UI focused on safety education.",
      technologies: [
        "React",
        "Python",
        "Flask",
        "Chart.js",
        "Twilio",
        "Tailwind CSS",
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
      technologies: ["HTML", "JavaScript", "Tailwind CSS"],
      image: rps,
      liveUrl: "https://rockpaperscissongs.netlify.app/",
      githubUrl: "https://github.com/GOKULSIVA123",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A selective showcase of my engineering work, highlighting full-stack architectures, API integrations, and workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-200 dark:hover:border-blue-900/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-48 bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 rounded-md cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button Action row */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex items-center gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="bg-primary hover:bg-primary/95 text-white gap-1.5 rounded-xl font-medium w-full py-5">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" variant="outline" className="border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-slate-900 text-slate-700 dark:text-slate-350 gap-1.5 rounded-xl font-medium w-full py-5 transition-all">
                          <Github className="w-4 h-4" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action for more projects */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/GOKULSIVA123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl gap-2 hover:-translate-y-0.5 transition-all"
            >
              Explore More on GitHub
              <ArrowRight className="w-4 h-4 text-primary" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
