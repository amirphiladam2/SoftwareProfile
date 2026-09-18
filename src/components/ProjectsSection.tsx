import { ArrowUpRight, ExternalLink, Github, ImageIcon } from "lucide-react";
import { siExpo, siJavascript, siReact, siRedux, siShadcnui, siSupabase, siTailwindcss, siTypescript } from "simple-icons/icons";
import type { SimpleIcon } from "simple-icons";

const techIcons: Record<string, SimpleIcon> = {
  React: siReact,
  "React Native": siReact,
  Expo: siExpo,
  TypeScript: siTypescript,
  Supabase: siSupabase,
  NativeWind: siTailwindcss,
  TailwindCSS: siTailwindcss,
  "shadcn/ui": siShadcnui,
  JavaScript: siJavascript,
  Redux: siRedux,
};

const TechIcon = ({ name }: { name: string }) => {
  const icon = techIcons[name];

  if (!icon) return null;

  return (
    <svg role="img" aria-label={name} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" style={{ color: `#${icon.hex}` }}>
      <path d={icon.path} />
    </svg>
  );
};

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured shopping website built with React. Features product browsing, cart management, secure checkout, and admin dashboard.",
    thumbnail: "/images/nilecart.png",
    tech: ["React", "TypeScript", "shadcn/ui", "TailwindCSS"],
    link: "https://nilecart.vercel.app/",
    github: "https://github.com/amirphiladam2/nilecart-mvp-marketplace"
  },
  {
    title: "Caloriee-Diet Planner App",
    description: "A mobile-first diet planner app with real-time tracking, meal planning, and user authentication powered by Supabase.",
    tech: ["React Native", "Expo", "Supabase", "NativeWind"],
    link: "https://play.google.com/store/apps/details?id=com.caloriee.com&hl=en",
    github: "https://github.com/amirphiladam2/CalorieeApp"
    , thumbnail: "/images/Feature Graphics.png"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-white/[0.06] px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center text-center">
          <div className="mx-auto">
            <p className="mb-2 text-base font-semibold text-primary uppercase">Selected work</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Featured <span className="text-primary">Projects</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">A selection of applications focused on useful, clear user experiences.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.1] bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-secondary">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={`${project.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                    <ImageIcon className="h-7 w-7 opacity-50" />
                    <span className="font-mono text-sm">Project preview</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="shrink-0 rounded-full border border-white/10 p-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mb-4 flex-1 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5 text-xs font-mono font-medium text-secondary-foreground">
                      <TechIcon name={t} />
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm font-semibold">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors">
                    View project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
