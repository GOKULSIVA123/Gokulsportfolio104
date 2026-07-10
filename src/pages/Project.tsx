import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import { Github, Linkedin, Mail } from "lucide-react";

const Project = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/GOKULSIVA123",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gokulsiva1101/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:gokulsiva1101@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 antialiased selection:bg-primary/10 selection:text-primary">
      <Navigation />
      
      <main className="pt-16">
        <ProjectsSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
            <span className="font-semibold text-slate-700 dark:text-slate-200">© 2026 Gokul Siva.</span> All rights reserved. Built with React and Tailwind CSS.
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 dark:hover:border-primary/50 hover:shadow-sm hover:scale-105 transition-all duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;
