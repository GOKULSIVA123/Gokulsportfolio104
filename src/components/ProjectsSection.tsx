import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Code, Brain, Mail, Cpu, BarChart3, Route, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  SiReact, 
  SiTailwindcss, 
  SiPython, 
  SiFastapi, 
  SiSqlite, 
  SiMongodb, 
  SiNodedotjs, 
  SiDocker, 
  SiFramer, 
  SiJavascript, 
  SiHtml5, 
  SiTwilio, 
  SiFlask,
  SiClerk
} from "react-icons/si";
import gadgetImage from "@/assets/Electro E-commerce.png";
import taskflow from "@/assets/Taskflow.png";
import rps from "@/assets/RPS.png";
import nextgen from "@/assets/nextgen.png";
import InternTrack from "@/assets/InternTrack.png";
import Translatepro from "@/assets/Translatepro.png";
import n8nAiWorkflow from "@/assets/n8n_ai_news_workflow.png";

const N8nIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const getTechIcon = (tech: string) => {
  const iconClass = "w-3.5 h-3.5 transition-transform group-hover:scale-110";
  switch (tech.toLowerCase()) {
    case "react":
    case "react-router":
      return <SiReact className={`${iconClass} text-[#61DAFB]`} />;
    case "tailwind css":
      return <SiTailwindcss className={`${iconClass} text-[#06B6D4]`} />;
    case "python":
      return <SiPython className={`${iconClass} text-[#3776AB]`} />;
    case "fastapi":
      return <SiFastapi className={`${iconClass} text-[#009688]`} />;
    case "sqlite":
      return <SiSqlite className={`${iconClass} text-[#003B57]`} />;
    case "mongodb":
      return <SiMongodb className={`${iconClass} text-[#47A248]`} />;
    case "node.js":
      return <SiNodedotjs className={`${iconClass} text-[#339933]`} />;
    case "docker":
      return <SiDocker className={`${iconClass} text-[#2496ED]`} />;
    case "framer motion":
      return <SiFramer className={`${iconClass} text-[#0055FF]`} />;
    case "javascript":
      return <SiJavascript className={`${iconClass} text-[#F7DF1E] bg-black rounded-[2px]`} />;
    case "html":
      return <SiHtml5 className={`${iconClass} text-[#E34F26]`} />;
    case "twilio":
      return <SiTwilio className={`${iconClass} text-[#F22F46]`} />;
    case "flask":
      return <SiFlask className={`${iconClass} text-slate-700 dark:text-slate-200`} />;
    case "clerk":
      return <SiClerk className={`${iconClass} text-[#6C47FF]`} />;
    case "azure ai":
      return <Cpu className={`${iconClass} text-[#0078D4]`} />;
    case "n8n":
      return <N8nIcon className={`${iconClass} text-[#FF6C37]`} />;
    case "groq ai":
      return <Brain className={`${iconClass} text-[#f59e0b]`} />;
    case "gmail api":
      return <Mail className={`${iconClass} text-[#ea4335]`} />;
    case "chart.js":
      return <BarChart3 className={`${iconClass} text-[#FF6384]`} />;
    default:
      return <Wrench className={`${iconClass} text-indigo-500`} />;
  }
};

const renderDescriptionText = (text: string) => {
  const colonIndex = text.indexOf(": ");
  if (colonIndex !== -1) {
    const boldPart = text.substring(0, colonIndex);
    const normalPart = text.substring(colonIndex);
    return (
      <>
        <span className="font-semibold text-primary dark:text-indigo-300">{boldPart}</span>
        <span className="text-slate-600 dark:text-slate-300">{normalPart}</span>
      </>
    );
  }
  return <span className="text-slate-600 dark:text-slate-300">{text}</span>;
};

const ProjectsSection = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState<"all" | "fullstack" | "automation">("all");

  const projects = [
    {
      title: "TranslatePro",
      category: "fullstack",
      description: [
        "Collaborative Full-Stack: Developed TranslatePro, a high-fidelity document translation system, as part of a four-member team.",
        "Layout Preservation: Translates complex technical PDFs using Azure AI Translator while strictly preserving layouts, formatting, and diagrams.",
        "Architecture & APIs: Built a responsive React frontend and a Python FastAPI backend for real-time document processing."
      ],
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
      category: "automation",
      description: [
        "AI News Aggregator: Automatically scrapes AI-related updates from technical RSS feeds like Hugging Face, MarkTechPost, and OpenAI.",
        "Duplicate Filtering: Integrates Google Sheets to record already-sent headlines, eliminating duplicate articles from daily runs.",
        "Synthesized Delivery: Uses Groq-powered Large Language Models to compile simple summaries, delivered via Gmail and Telegram at 9 PM."
      ],
      technologies: [
        "n8n",
        "Groq AI",
        "Gmail API",
      ],
      image: n8nAiWorkflow,
    },
    {
      title: "Internship Application Tracker",
      category: "fullstack",
      description: [
        "Workflow Organization: Designed a full-stack job application tracker to organize searches, featuring real-time status management.",
        "Secure Auth: Built with a React frontend and Node.js backend (Motia), integrating Clerk for secure authentication.",
        "Event-Driven Alerts: Configured Nodemailer to automatically send email notifications on job application status changes."
      ],
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
      category: "fullstack",
      description: [
        "Responsive Storefront: Developed a fully responsive gadgets e-commerce platform using React.js and Tailwind CSS.",
        "Dynamic Features: Implemented product catalogs, promotional banners, a persistent cart, and react-slick carousels.",
        "Enhanced UX: Integrated AOS scroll animations and modular components for a modern, fluid user experience."
      ],
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
      category: "fullstack",
      description: [
        "Task Management: Built a full-stack to-do application with a Flask REST API backend and a React frontend.",
        "Automation Engine: Implemented n8n integrations to automatically generate and email daily consolidated Excel reports at 11 PM.",
        "DevOps & Setup: Packaged the backend and database utilizing Docker for zero-dependency local developer onboarding."
      ],
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
      category: "fullstack",
      description: [
        "Interactive Safety Education: Developed a disaster awareness and safety education platform for children using React and Tailwind CSS.",
        "Visual Progress: Integrated Framer Motion animations and interactive progress charts utilizing Chart.js.",
        "Twilio Integration: Integrated Twilio WhatsApp API to broadcast timely emergency alerts and communication updates."
      ],
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
      category: "fullstack",
      description: [
        "Interactive Gameplay: Built a classic Rock Paper Scissors game utilizing vanilla JavaScript, HTML, and Tailwind CSS.",
        "State Logic: Implemented instant score tracking, result evaluations, and smooth game status updates."
      ],
      technologies: ["HTML", "JavaScript", "Tailwind CSS"],
      image: rps,
      liveUrl: "https://rockpaperscissongs.netlify.app/",
      githubUrl: "https://github.com/GOKULSIVA123",
      featured: false,
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-indigo-50/20 via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 text-slate-900 dark:text-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A selective showcase of my engineering work, highlighting full-stack architectures, API integrations, and workflow automation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="rounded-full px-5 py-2 text-xs font-semibold transition-all border-slate-200 dark:border-slate-800"
          >
            All Projects
          </Button>
          <Button
            variant={activeCategory === "fullstack" ? "default" : "outline"}
            onClick={() => setActiveCategory("fullstack")}
            className="rounded-full px-5 py-2 text-xs font-semibold transition-all border-slate-200 dark:border-slate-800"
          >
            Full-Stack
          </Button>
          <Button
            variant={activeCategory === "automation" ? "default" : "outline"}
            onClick={() => setActiveCategory("automation")}
            className="rounded-full px-5 py-2 text-xs font-semibold transition-all border-slate-200 dark:border-slate-800"
          >
            Automation & Workflows
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card
              key={project.title}
              className="bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border border-indigo-100/40 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-[0_15px_30px_-15px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.05)] hover:border-indigo-200/80 dark:hover:border-blue-900/20 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-36 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2 transition-colors">
                  {project.title}
                </h3>
                
                {Array.isArray(project.description) ? (
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-indigo-500 dark:text-indigo-400/70 leading-relaxed mb-6 flex-grow text-left min-h-[145px]">
                    {project.description.map((point, idx) => (
                      <li key={idx}>
                        {renderDescriptionText(point)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow min-h-[145px]">
                    {renderDescriptionText(project.description)}
                  </p>
                )}

                {/* Tech Stack Label */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <Code className="w-3.5 h-3.5 text-primary" />
                  <span>Tech Stack</span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-300 border border-indigo-100/30 dark:border-indigo-900/20 rounded-md cursor-default transition-colors hover:bg-indigo-100/30 dark:hover:bg-indigo-900/30 group"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
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
                        <Button size="sm" className="bg-primary hover:bg-primary/95 text-white gap-1.5 rounded-xl font-medium w-full py-3.5">
                          <ExternalLink className="w-3.5 h-3.5" />
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
                        <Button size="sm" variant="outline" className="border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-slate-900 text-slate-700 dark:text-slate-300 gap-1.5 rounded-xl font-medium w-full py-3.5 transition-all">
                          <Github className="w-3.5 h-3.5" />
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
        {limit ? (
          <div className="text-center mt-16">
            <Link to="/project" className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-slate-900 rounded-xl gap-2 transition-all shadow-sm hover:border-primary/30"
              >
                See More Projects
                <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="text-center mt-16">
            <Link to="/" className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-slate-900 rounded-xl gap-2 transition-all shadow-sm hover:border-primary/30"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
