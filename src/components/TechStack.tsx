import { siReact, siExpo, siTypescript, siSupabase, siTailwindcss, siPostgresql, siGit, siNestjs, siFirebase, siNextdotjs, siGithub, siPrisma, siDocker, siPostman } from "simple-icons/icons";
import type { SimpleIcon } from "simple-icons";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

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
      { name: "React", icon: siReact, href: "https://react.dev" },
      { name: "Next.js", icon: siNextdotjs, href: "https://nextjs.org" },
      { name: "React Native", icon: siReact, href: "https://reactnative.dev" },
      { name: "Expo", icon: siExpo, href: "https://expo.dev" },
      { name: "TypeScript", icon: siTypescript, href: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", icon: siTailwindcss, href: "https://tailwindcss.com" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Reliable data and state management.",
    techs: [
      { name: "Supabase", icon: siSupabase, href: "https://supabase.com" },
      { name: "NestJS", icon: siNestjs, href: "https://nestjs.com" },
      { name: "PostgreSQL", icon: siPostgresql, href: "https://www.postgresql.org" },
      { name: "Firebase", icon: siFirebase, href: "https://firebase.google.com" },
      { name: "Prisma", icon: siPrisma, href: "https://www.prisma.io" },
    ],
  },
  {
    title: "Tools",
    description: "Reliable data and state management.",
    techs: [
      { name: "Git", icon: siGit, href: "https://git-scm.com" },
      { name: "GitHub", icon: siGithub, href: "https://github.com" },
      { name: "VS Code", icon: VscVscode, href: "https://code.visualstudio.com" },
      { name: "Docker", icon: siDocker, href: "https://www.docker.com" },
      { name: "Postman", icon: siPostman, href: "https://www.postman.com" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-6 flex justify-center text-center">
          <div className="mx-auto">
            <p className="mb-2 text-base font-semibold text-primary uppercase">Technical arsenal</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Tools I use to build</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">A practical toolkit for building reliable web and mobile products.</p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {techGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 120} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-24px_hsl(257_100%_69%_/_0.45)]">
                <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                <div className="mt-4 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {group.techs.map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-background/80"
                    >
                      <div aria-hidden="true" className="rounded-md bg-secondary p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-muted">
                        <Icon icon={tech.icon} label={tech.name} className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">{tech.name}</h4>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
