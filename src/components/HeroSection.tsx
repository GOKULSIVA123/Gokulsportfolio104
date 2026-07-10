import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiReact, SiPython, SiN8N, SiFastapi } from "react-icons/si";

// Custom Typewriter Animation Component
const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="relative inline-block text-primary">
      {currentText}
      <span className="border-r-2 border-primary ml-1 animate-pulse" />
    </span>
  );
};

const HeroSection = () => {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "2", label: "Internships" },
    { number: "3", label: "Coding Languages" },
    { number: "1", label: "Open Source Contribution" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50 text-slate-900 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full w-fit mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Jobs & Internships
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Gokul Siva</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200 text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 block min-h-[40px] sm:min-h-[48px]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Aspiring Software Developer",
                ]}
              />
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-350 mb-8 max-w-2xl leading-relaxed">
            I am a Computer Science Engineering student in my Final year at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Sri Sairam Engineering College, Chennai
            </span>
            . I specialize in building practical, user-friendly web applications
            using <span className="font-semibold text-slate-900 dark:text-white">React</span> and{" "}
            <span className="font-semibold text-slate-900 dark:text-white">Python</span>, with a special
            interest in AI integrations and streamlining workflows through automation tools
            like <span className="font-semibold text-slate-900 dark:text-white">n8n</span>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-12">
            <a href="#projects" className="flex">
              <Button size="lg" className="bg-primary hover:bg-primary/95 text-white gap-2 rounded-xl w-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact" className="flex">
              <Button size="lg" variant="outline" className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl w-full hover:-translate-y-0.5 transition-all">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:border-blue-200 dark:hover:border-blue-900/30 transition-all duration-300">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left border-r border-slate-100 dark:border-slate-800 last:border-r-0 pr-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Beautiful Interactive SVG Developer Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-indigo-300/10 rounded-full blur-3xl -z-10 w-72 h-72 mx-auto" />
          
          <svg
            className="w-full max-w-[450px] drop-shadow-xl select-none"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background elements */}
            <circle cx="250" cy="250" r="180" className="fill-white dark:fill-slate-900 stroke-slate-100 dark:stroke-slate-800" strokeWidth="2" />
            <circle cx="250" cy="250" r="140" className="fill-slate-50 dark:fill-slate-950" />
            
            {/* Tech Nodes (Floating layout) */}
            {/* React Logo Icon (Floating Top Left) */}
            <g className="animate-bounce" style={{ animationDuration: '4s' }}>
              <rect x="70" y="100" width="60" height="60" rx="16" className="fill-white dark:fill-slate-900" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
              <SiReact x={84} y={114} size={32} className="text-[#06B6D4]" />
            </g>

            {/* Python / Code Brackets Icon (Floating Top Right) */}
            <g className="animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
              <rect x="360" y="80" width="65" height="65" rx="18" className="fill-white dark:fill-slate-900" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
              <SiPython x={374.5} y={94.5} size={36} className="text-[#3776AB]" />
            </g>

            {/* n8n / Automation Gear (Floating Middle Left) */}
            <g className="animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
              <rect x="50" y="240" width="55" height="55" rx="16" className="fill-white dark:fill-slate-900" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
              <SiN8N x={62.5} y={252.5} size={30} className="text-[#FF6C37]" />
            </g>

            {/* FastAPI Icon (Floating Middle Right) */}
            <g className="animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}>
              <rect x="385" y="235" width="55" height="55" rx="16" className="fill-white dark:fill-slate-900" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
              <SiFastapi x={397.5} y={247.5} size={30} className="text-[#009688]" />
            </g>

            {/* Main Desk / Computer / Person Illustration */}
            {/* Laptop Body */}
            <rect x="180" y="280" width="140" height="90" rx="10" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="3" />
            <rect x="190" y="290" width="120" height="70" rx="6" fill="#1E293B" />
            
            {/* Coding Screen details */}
            <rect x="200" y="300" width="30" height="4" rx="2" fill="#38BDF8" />
            <rect x="200" y="308" width="50" height="4" rx="2" fill="#818CF8" />
            <rect x="200" y="316" width="40" height="4" rx="2" fill="#34D399" />
            <rect x="200" y="324" width="60" height="4" rx="2" fill="#F472B6" />
            <circle cx="280" cy="305" r="10" fill="#6366F1" fillOpacity="0.3" />
            <circle cx="280" cy="305" r="6" fill="#6366F1" />

            {/* Keyboard base */}
            <path d="M160 370H340L350 380H150L160 370Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            <line x1="200" y1="375" x2="300" y2="375" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

            {/* Developer Desk Plant */}
            <path d="M125 380H145V395C145 400.5 140.5 405 135 405C129.5 405 125 400.5 125 395V380Z" fill="#D97706" />
            <path d="M135 380C135 380 120 365 125 350C130 335 135 380 135 380Z" fill="#10B981" />
            <path d="M135 380C135 380 150 365 145 350C140 335 135 380 135 380Z" fill="#059669" />

            {/* Coffee Cup */}
            <rect x="345" y="365" width="20" height="25" rx="4" fill="#6366F1" />
            <path d="M365 370C368 370 370 372 370 375C370 378 368 380 365 380" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
            <path d="M349 360C350 357 353 357 354 360" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M355 360C356 357 359 357 360 360" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
