const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-bold text-lg text-gradient">A.</span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
