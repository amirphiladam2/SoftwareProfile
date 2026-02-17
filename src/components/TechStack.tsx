const techs = [
  { name: "React", description: "UI Library" },
  { name: "React Native", description: "Mobile Development" },
  { name: "Expo", description: "Mobile Toolchain" },
  { name: "TypeScript", description: "Type Safety" },
  { name: "Supabase", description: "Backend & Auth" },
  { name: "NativeWind", description: "Mobile Styling" },
  { name: "Redux", description: "State Management" },
  { name: "Figma", description: "Design & Prototyping" },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-primary tracking-widest mb-3">TECHNOLOGIES</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">Tech Stack</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <div
              key={tech.name}
              className="group relative p-5 rounded-xl border border-border bg-card hover:border-glow hover:glow transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
