import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-background to-black">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-primary tracking-widest uppercase opacity-80 mb-3">GET IN TOUCH</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">Let's Work Together</h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
          I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative direction, I'd love to hear about it.
        </p>

        <div className="flex gap-6 justify-center mb-20">
          <a href="mailto:amirphiladam@gmail.com" className="p-4 rounded-full border border-white/10 glass hover:bg-white/10 hover:scale-110 trans-all group">
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://github.com/amirphiladam2" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 glass hover:bg-white/10 hover:scale-110 trans-all group">
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/amirphiladam" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 glass hover:bg-white/10 hover:scale-110 trans-all group">
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://x.com/amirphiladam" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 glass hover:bg-white/10 hover:scale-110 trans-all group">
            <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://youtube.com/@amirdevstudio-1" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 glass hover:bg-white/10 hover:scale-110 trans-all group">
            <Youtube className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">YouTube</span>
          </a>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto text-xs text-muted-foreground">
        <p className="font-mono">
          © 2026 Amir. Built with React & TypeScript.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
