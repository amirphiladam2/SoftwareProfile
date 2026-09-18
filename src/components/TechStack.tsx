import { siReact, siExpo, siTypescript, siSupabase, siTailwindcss, siRedux, siFigma, siPostgresql, siGit, siNestjs, siFirebase, siNextdotjs, siGithub, siPrisma, siVsco, siDocker, siPostman } from "simple-icons/icons";
import type { SimpleIcon } from "simple-icons";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

type BrandIcon = SimpleIcon | IconType;

const isSimpleIcon = (icon: BrandIcon): icon is SimpleIcon => typeof icon !== "function";

// Helper component to render simple-icons
const Icon = ({ icon, className, label }: { icon: BrandIcon; className?: string; label: string }) => {
  if (!isSimpleIcon(icon)) {
    const Component = icon;
    return <Component aria-label={label} className={className} color="#007ACC" />;
  }

  return (
    <svg role="img" aria-label={label} viewBox="0 0 24 24" className={className} fill="currentColor" style={{ color: `#${icon.hex}` }} xmlns="http://www.w3.org/2000/svg">
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

const techGroups = [
  {
    title: "Frontend & Mobile",
    description: "Building focused interfaces for web and native products.",
    techs: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "React Native", icon: siReact },
      { name: "Expo", icon: siExpo },
      { name: "TypeScript", icon: siTypescript },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Reliable data and state management.",
    techs: [
      { name: "Supabase", icon: siSupabase },
      { name: "NestJS", icon: siNestjs },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Firebase", icon: siFirebase },
      { name: "Prisma", icon: siPrisma }
    ],
  },
  {
    title: "Tools",
    description: "Reliable data and state management.",
    techs: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Docker", icon: siDocker },
      { name: "Postman", icon: siPostman }
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="border-t border-white/[0.06] px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center text-center">
          <div className="mx-auto">
            <p className="mb-2 text-base font-semibold text-primary uppercase">Technical arsenal</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Tools I use to build</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">A practical toolkit for building reliable web and mobile products.</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div key={group.title} className="flex h-full flex-col rounded-xl border border-white/[0.1] bg-card/40 p-5">
              <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <div className="mt-4 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {group.techs.map((tech) => (
                  <div key={tech.name} className="group flex items-center gap-2 rounded-md border border-white/[0.08] bg-background/40 px-3 py-2.5 transition-colors hover:border-primary/40">
                    <div className="rounded-md bg-white/5 p-1.5 transition-colors group-hover:bg-white/10">
                      <Icon icon={tech.icon} label={tech.name} className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
