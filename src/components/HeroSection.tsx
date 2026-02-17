const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm tracking-widest text-primary mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          &lt;FULL-STACK DEVELOPER /&gt;
        </p>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-gradient">Amir</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: '0.4s' }}>
          I build performant, beautiful applications across web and mobile platforms. 
          Passionate about clean architecture and great user experiences.
        </p>
        
        <div className="flex gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
