import { Button } from "@/components/ui/button";
// import profileImage from "@/assets/Gokul Photo.jpg";
import SocialLinks from "./SocialLinks";
// 1)NPM RUN DEPLOY-> TO UPDATE IN GHPAGES ELSE 2)NPM RUN BUILD

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center mt-40">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Creative Developer</span>
          <br />
          <span className="text-foreground">Adaptive Problem Solver</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Dedicated to building web applications that solve real-life problems
          and enhance everyday experiences.
        </p>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="hero-gradient text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg inline-block"
            >
              View My Work
            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
          <SocialLinks></SocialLinks>
        </div>
        <div className="mt-12">
          <div className="inline-block cursor-pointer animate-bounce">
            <svg
              className="w-6 h-6 text-primary mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
