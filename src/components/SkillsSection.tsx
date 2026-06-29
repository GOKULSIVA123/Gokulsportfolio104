import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 80 },
        {name:'CSS',level:90}
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Flask', level: 80 },
        { name: 'FastApi', level: 70 },
        { name: 'Python', level: 85 },
        { name: 'SQLite', level: 75 },
        {name:'frappe framework',level:70},
        { name: 'MongoDB', level: 65 },
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      category: 'Tools & Cloud',
      technologies: [
        {name:'n8n',level:80},
        { name: 'Postman', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'GitHub', level: 90 },
        { name: 'Render', level: 80 },
        {name:'Firebase',level:80},
        {name:'clerk',level:75}
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">My Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={skillCategory.category}>
                <Card className="card-gradient p-8 border-border/20 hover-glow transition-smooth h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center text-white mr-4">
                      {skillCategory.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{skillCategory.category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {skillCategory.technologies.map((tech) => (
                      <div key={tech.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{tech.name}</span>
                          <span className="text-sm text-muted-foreground">{tech.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full hero-gradient rounded-full"
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                The tech industry evolves rapidly, and I'm committed to continuous learning. I regularly explore new technologies, 
                attend workshops, and contribute to open-source projects to stay at the forefront of modern development practices. 
                Currently exploring AI and Automation Tools integration,devops, and cloud architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;