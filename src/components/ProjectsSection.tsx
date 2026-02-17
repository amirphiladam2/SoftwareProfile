import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured shopping website built with React. Features product browsing, cart management, secure checkout, and admin dashboard.",
    tech: ["React", "TypeScript", "shadcn/ui", "TailwindCSS"],
    link: "https://nilecart.vercel.app/",
    github: "https://github.com/amirphiladam2/nilecart-mvp-marketplace"
  },
    {
    title: "Caloriee-Diet Planner App",
    description: "A mobile-first diet planner app with real-time tracking, meal planning, and user authentication powered by Supabase.",
    tech: ["React Native", "Expo", "Supabase", "NativeWind"],
    link: "#",
    github: "https://github.com/amirphiladam2/CalorieeApp"
  },
 
  {
    title: "Task Tracker App",
    description: "Cross-platform task tracking app with task logging, progress tracking, and reminders. Built with Expo.",
    tech: ["React Native", "Expo", "JavaScript"],
    link: "#",
    github: "https://github.com/amirphiladam2/Actionable"
  },
 {
    title: "Budget Tracker App",
    description: "A real-time dashboard for managing budgets and expenses. Built with React Native and Supabase for instant syncing across users.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Redux"],
    link: "https://amirp.netlify.app/myapps",
    github: "#"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-sm text-primary tracking-widest uppercase opacity-80">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, featuring mobile and web applications.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col p-8 rounded-2xl glass-card hover:border-primary/30 trans-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                </div>
              </div>

              <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
