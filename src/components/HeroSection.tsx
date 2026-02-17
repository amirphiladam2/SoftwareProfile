import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Ambient glow - Animated */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-screen" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            Full-Stack Developer
          </span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight animate-fade-in opacity-0 leading-none" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <br className="sm:hidden" />
          <span className="text-gradient inline-block hover:scale-[1.02] transition-transform duration-500">Amir</span>
        </h1>

        <p className="text-lg sm:text-2xl text-muted-foreground/80 max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed font-light" style={{ animationDelay: '0.4s' }}>
          Crafting exceptional digital experiences. I build performant, beautiful applications with a focus on clean architecture and interaction design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_-5px_hsl(252_59%_48%)] hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/5 text-foreground font-medium transition-all hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
        <a href="#stack" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
          <span className="text-xs tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
