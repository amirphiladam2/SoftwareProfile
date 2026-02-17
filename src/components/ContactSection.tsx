import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-primary tracking-widest mb-3">CONTACT</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          I'm always open to new opportunities and interesting projects. Feel free to reach out!
        </p>
        
        <div className="flex gap-5 justify-center">
          <a href="mailto:amir@example.com" className="p-3 rounded-xl border border-border bg-card hover:border-glow hover:glow transition-all duration-300 group">
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="#" className="p-3 rounded-xl border border-border bg-card hover:border-glow hover:glow transition-all duration-300 group">
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="#" className="p-3 rounded-xl border border-border bg-card hover:border-glow hover:glow transition-all duration-300 group">
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 Amir. Built with React & TypeScript.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
