import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured shopping app built with React Native and Expo. Features product browsing, cart management, secure checkout, and push notifications.",
    tech: ["React Native", "Expo", "TypeScript", "Redux", "NativeWind"],
  },
  {
    title: "Project Management Dashboard",
    description: "A real-time collaborative dashboard for managing tasks and teams. Built with React and Supabase for instant syncing across users.",
    tech: ["React", "TypeScript", "Supabase", "Redux"],
  },
  {
    title: "Social Media Platform",
    description: "A mobile-first social platform with real-time messaging, media sharing, and user authentication powered by Supabase.",
    tech: ["React Native", "Expo", "Supabase", "NativeWind"],
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform fitness app with workout logging, progress charts, and personalized plans. Designed in Figma, built with Expo.",
    tech: ["React Native", "Expo", "TypeScript", "Figma", "Redux"],
  },
  {
    title: "SaaS Admin Panel",
    description: "A comprehensive admin interface with analytics, user management, and role-based access control for a multi-tenant SaaS platform.",
    tech: ["React", "TypeScript", "Supabase", "Redux"],
  },
  {
    title: "Recipe Discovery App",
    description: "A beautifully designed recipe app with search, favorites, and meal planning. Built with a focus on smooth animations and UX.",
    tech: ["React Native", "Expo", "NativeWind", "TypeScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-primary tracking-widest mb-3">PORTFOLIO</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">Featured Projects</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-glow hover:glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5 ml-2" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
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
