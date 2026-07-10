import { Card } from "@/components/ui/card";
import { Layout, Server, Cpu, Code, BookOpen } from "lucide-react";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer, 
  SiCss3, 
  SiHtml5, 
  SiTypescript,
  SiPython, 
  SiFlask, 
  SiFastapi, 
  SiSqlite, 
  SiMongodb, 
  SiNodedotjs,
  SiDocker, 
  SiGithub, 
  SiPostman, 
  SiFirebase, 
  SiClerk,
  SiCloudflare 
} from "react-icons/si";

// Custom SVG Icon for n8n to avoid version dependency issues with react-icons
const N8nIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#FF6C37" />
    <circle cx="12" cy="12" r="5" stroke="#FF6C37" />
    <circle cx="12" cy="12" r="1.5" fill="#FF6C37" />
  </svg>
);

// Custom SVG Icon for LangChain
const LangChainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#13C67C" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#13C67C" />
  </svg>
);

// Custom SVG Icon for RAG
const RagIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#8B5CF6" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#8B5CF6" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="#8B5CF6" />
    <path d="M19 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="1" />
  </svg>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Crafting beautiful, responsive, and highly interactive interfaces.",
      icon: <Layout className="w-6 h-6 text-primary" />,
      technologies: [
        { name: "React", icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />, hoverColor: "group-hover:text-[#00BCD4] group-hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.3)]" },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />, hoverColor: "group-hover:text-[#3178C6] group-hover:drop-shadow-[0_0_10px_rgba(49,120,198,0.3)]" },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />, hoverColor: "group-hover:text-[#EAB308] group-hover:drop-shadow-[0_0_10px_rgba(247,223,30,0.2)]" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />, hoverColor: "group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" },
        { name: "Framer Motion", icon: <SiFramer className="w-8 h-8 text-[#E10098]" />, hoverColor: "group-hover:text-[#E10098] group-hover:drop-shadow-[0_0_10px_rgba(225,0,152,0.3)]" },
        { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" />, hoverColor: "group-hover:text-[#1572B6] group-hover:drop-shadow-[0_0_10px_rgba(21,114,182,0.3)]" },
        { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />, hoverColor: "group-hover:text-[#E34F26] group-hover:drop-shadow-[0_0_10px_rgba(227,79,38,0.3)]" },
      ],
    },
    {
      category: "AI & Backend",
      description: "Developing intelligent server architectures, RESTful APIs, and RAG pipelines.",
      icon: <Server className="w-6 h-6 text-primary" />,
      technologies: [
        { name: "Python", icon: <SiPython className="w-8 h-8 text-[#3776AB]" />, hoverColor: "group-hover:text-[#3776AB] group-hover:drop-shadow-[0_0_10px_rgba(55,118,171,0.3)]" },
        { name: "LangChain", icon: <LangChainIcon className="w-8 h-8" />, hoverColor: "group-hover:text-[#13C67C] group-hover:drop-shadow-[0_0_10px_rgba(19,198,124,0.3)]" },
        { name: "RAG AI", icon: <RagIcon className="w-8 h-8" />, hoverColor: "group-hover:text-[#8B5CF6] group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]" },
        { name: "FastAPI", icon: <SiFastapi className="w-8 h-8 text-[#009688]" />, hoverColor: "group-hover:text-[#009688] group-hover:drop-shadow-[0_0_10px_rgba(0,150,136,0.3)]" },
        { name: "Flask", icon: <SiFlask className="w-8 h-8 text-slate-700 dark:text-slate-300" />, hoverColor: "group-hover:text-slate-900 dark:group-hover:text-white" },
        { name: "Frappe Framework", icon: <Code className="w-8 h-8 text-primary" />, hoverColor: "group-hover:text-primary group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]" },
        { name: "SQLite", icon: <SiSqlite className="w-8 h-8 text-[#003B57]" />, hoverColor: "group-hover:text-[#003B57] group-hover:drop-shadow-[0_0_10px_rgba(0,59,87,0.3)]" },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />, hoverColor: "group-hover:text-[#47A248] group-hover:drop-shadow-[0_0_10px_rgba(71,162,72,0.3)]" },
        { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />, hoverColor: "group-hover:text-[#339933] group-hover:drop-shadow-[0_0_10px_rgba(51,153,51,0.3)]" },
      ],
    },
    {
      category: "Tools, DevOps & Cloud",
      description: "Managing deployments, cloud databases, and workflow automations.",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      technologies: [
        { name: "n8n", icon: <N8nIcon className="w-8 h-8 text-[#FF6C37]" />, hoverColor: "group-hover:text-[#FF6C37] group-hover:drop-shadow-[0_0_10px_rgba(255,108,55,0.3)]" },
        { name: "Docker", icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />, hoverColor: "group-hover:text-[#2496ED] group-hover:drop-shadow-[0_0_10px_rgba(36,150,237,0.3)]" },
        { name: "GitHub / Git", icon: <SiGithub className="w-8 h-8 text-slate-800 dark:text-slate-200" />, hoverColor: "group-hover:text-slate-900 dark:group-hover:text-white" },
        { name: "Cloudflare", icon: <SiCloudflare className="w-8 h-8 text-[#F38020]" />, hoverColor: "group-hover:text-[#F38020] group-hover:drop-shadow-[0_0_10px_rgba(243,128,32,0.3)]" },
        { name: "Postman", icon: <SiPostman className="w-8 h-8 text-[#FF6C37]" />, hoverColor: "group-hover:text-[#FF6C37] group-hover:drop-shadow-[0_0_10px_rgba(255,108,55,0.3)]" },
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8 text-[#FFCA28]" />, hoverColor: "group-hover:text-[#EAB308] group-hover:drop-shadow-[0_0_10px_rgba(255,202,40,0.2)]" },
        { name: "Clerk Auth", icon: <SiClerk className="w-8 h-8 text-[#6C47FF]" />, hoverColor: "group-hover:text-[#6C47FF] group-hover:drop-shadow-[0_0_10px_rgba(108,71,255,0.3)]" },
        { name: "Render Cloud", icon: <Cpu className="w-8 h-8 text-[#46E3B7]" />, hoverColor: "group-hover:text-[#46E3B7] group-hover:drop-shadow-[0_0_10px_rgba(70,227,183,0.3)]" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/40 border-t border-b border-slate-100/50 dark:border-slate-900/50 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Skills & Toolkit</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive set of tools, frameworks, and languages that I use to turn design concepts and logical workflows into live, working applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <Card
              key={cat.category}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-200 dark:hover:border-blue-900/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                {cat.description}
              </p>

              {/* Grid of clean borderless items */}
              <div className="grid grid-cols-3 gap-y-8 gap-x-4 mt-auto pt-4">
                {cat.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 hover:bg-slate-50/50 dark:hover:bg-slate-950/30 cursor-default"
                  >
                    <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold text-slate-500 dark:text-slate-400 text-center transition-colors duration-300 ${tech.hoverColor}`}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm max-w-3xl mx-auto hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <BookOpen className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Continuous Development</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The technology landscape is always shifting. I regularly explore new tech stacks,
              attend developer workshops, and build side projects to expand my skillset.
              Currently, I'm deepening my understanding of <span className="font-semibold text-slate-900 dark:text-white">AI</span> and <span className="font-semibold text-slate-900 dark:text-white">System Design</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;