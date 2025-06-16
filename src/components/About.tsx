import { Download, Code2, Database, Globe, Smartphone, Server, GitBranch } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: <Globe className="w-6 h-6" />, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Server className="w-6 h-6" />, techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Mobile", icon: <Smartphone className="w-6 h-6" />, techs: ["React Native", "Flutter", "iOS", "Android"] },
    { name: "Tools", icon: <GitBranch className="w-6 h-6" />, techs: ["Git", "Docker", "AWS", "Figma"] },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-20 h-20 bg-muted-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code2 className="w-8 h-8" />
                </div>
                <p className="text-sm">Profile Photo Placeholder</p>
                <p className="text-xs mt-1">Replace with your photo</p>
              </div>
            </div>
          </div>

          {/* Bio and CV */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with [X] years of experience creating 
                digital solutions that make a difference. I love turning complex problems 
                into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me [your hobbies/interests]. I believe 
                in continuous learning and staying up-to-date with the latest technologies 
                and best practices in software development.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors duration-200">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
            Skills & Technologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-border/60 transition-colors"
              >
                <div className="flex justify-center text-foreground">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 