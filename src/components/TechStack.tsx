import { siReact, siExpo, siTypescript, siSupabase, siTailwindcss, siRedux, siFigma, siNodedotjs, siPostgresql, siGit, siDocker } from "simple-icons/icons";
import type { SimpleIcon } from "simple-icons";

// Helper component to render simple-icons
const Icon = ({ icon, className }: { icon: SimpleIcon; className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

const techs: { name: string; description: string; icon: SimpleIcon }[] = [
  { name: "React", description: "UI Library", icon: siReact },
  { name: "React Native", description: "Mobile Development", icon: siReact },
  { name: "Expo", description: "Mobile Toolchain", icon: siExpo },
  { name: "TypeScript", description: "Type Safety", icon: siTypescript },
  { name: "Supabase", description: "Backend & Auth", icon: siSupabase },
  { name: "NativeWind", description: "Mobile Styling", icon: siTailwindcss },
  { name: "Redux", description: "State Management", icon: siRedux },
  { name: "Figma", description: "Design & Prototyping", icon: siFigma },
  { name: "PostgreSQL", description: "Database", icon: siPostgresql },
  { name: "Git", description: "Version Control", icon: siGit },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-sm text-primary tracking-widest uppercase opacity-80">Technologies</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <div
              key={tech.name + i}
              className="group relative p-6 rounded-2xl glass-card hover:border-primary/30 trans-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-default overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon icon={tech.icon} className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-foreground">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
