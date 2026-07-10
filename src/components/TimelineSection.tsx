import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const renderDescriptionText = (text: string) => {
  const colonIndex = text.indexOf(": ");
  if (colonIndex !== -1) {
    const boldPart = text.substring(0, colonIndex);
    const normalPart = text.substring(colonIndex);
    return (
      <>
        <span className="font-bold text-slate-900 dark:text-white">{boldPart}</span>
        <span>{normalPart}</span>
      </>
    );
  }
  return <span>{text}</span>;
};

const TimelineSection = () => {
  const milestones = [
    {
      type: "work",
      title: "Full-Stack Developer Intern",
      organization: "Client Project (TranslatePro)",
      duration: "Jan 2026 - Feb 2026",
      description: [
        "Developed TranslatePro for a global client: Utilized FastAPI and Azure AI Translator (F0 Tier) to provide seamless document translation across 6 languages.",
        "Engineered Text Extraction Pipeline: Designed a Python-based text extraction pipeline that optimized character usage within free-tier limits (2M/month).",
        "Conceived Gamified Product Features: Documented a strategic product proposal for Duolingo to introduce an \"Immersive Context\" feature, leveraging real-world translation tasks to boost advanced learner engagement."
      ],
      icon: <Briefcase className="w-5 h-5 text-primary" />,
    },
    {
      type: "work",
      title: "Open Source Contributor",
      organization: "ECWoC (Elite Coders Winter of Code)",
      duration: "Dec 2025 - Mar 2026",
      description: [
        "Selected Contributor for Key Repositories: Chosen from a competitive pool of applicants to contribute to open-source projects, delivering features and bug fixes across full-stack applications using React, TailwindCSS, FastAPI, and LangChain.",
        "Collaborated via Advanced Git Workflows: Worked alongside global developers to resolve repository issues, managing code changes through pull requests, code reviews, and structured Git collaboration."
      ],
      icon: <Award className="w-5 h-5 text-primary" />,
    },
    {
      type: "work",
      title: "Full Stack Intern",
      organization: "Kodivian Technologies",
      duration: "Jun 2025 - Jul 2025",
      description: [
        "ERP Solution Development: Developed an Asset Management and Employee Reimbursement system utilizing Frappe’s customizable DocTypes, replacing manual workflows.",
        "Frappe Ecosystem Integration: Worked extensively across the ecosystem, including Frappe HRMS, Helpdesk, Builder, and Frappe Cloud.",
        "Dockerized Local Environment: Eliminated strict Linux OS dependencies by containerizing the setup, reducing developer onboarding time to under 30 minutes.",
        "Technical Documentation: Documented detailed guides on system configurations and best practices, reducing team research time by 50%."
      ],
      icon: <Briefcase className="w-5 h-5 text-primary" />,
    },
    {
      type: "education",
      title: "B.E. Computer Science & Engineering",
      organization: "Sri Sairam Engineering College, Chennai",
      duration: "2023 - 2027",
      description:
        "Currently in Final year of Computer Science Engineering. Actively learning and specializing in web engineering, AI, data structures and algorithms, system design, and building projects.",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/40 border-t border-b border-slate-100/50 dark:border-slate-900/50 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Education</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A chronological timeline of my professional experience, academic background, and educational milestones.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200/80 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 bg-primary flex items-center justify-center shadow-sm z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Card Container */}
              <Card className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-200 dark:hover:border-blue-900/50 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  {/* Left: Icon & Title info */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Right: Date Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 w-fit self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </div>
                </div>

                {Array.isArray(item.description) ? (
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                    {item.description.map((point, idx) => (
                      <li key={idx}>
                        {renderDescriptionText(point)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed pl-1">
                    {renderDescriptionText(item.description)}
                  </p>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
