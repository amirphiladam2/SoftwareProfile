import { CircleCheck, Github, Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-white/[0.06] px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <p className="mb-2 text-sm font-semibold text-primary">Get in touch</p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Let&apos;s work together</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Have an idea, a product to build, or an opportunity to discuss? Send me a message and I&apos;ll get back to you.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <a href="mailto:amirphiladam@gmail.com" className="flex min-h-20 items-center gap-4 rounded-xl border border-white/[0.1] bg-card/60 p-4 transition-colors hover:border-primary/40"><Mail className="h-5 w-5 shrink-0 text-primary" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span><span className="mt-1 block break-all text-sm">amirphiladam@gmail.com</span></span></a>
          <div className="flex min-h-20 items-center gap-4 rounded-xl border transition-colors hover:border-primary/40 border-white/[0.1] bg-card/60 p-4"><CircleCheck className="h-5 w-5 shrink-0 text-emerald-400" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Availability</span><span className="mt-1 block text-sm">Open to opportunities</span></span></div>
          <div className="flex min-h-20 items-center gap-4 rounded-xl border transition-colors hover:border-primary/40 border-white/[0.1] bg-card/60 p-4"><MapPin className="h-5 w-5 shrink-0 text-primary" /><span><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</span><span className="mt-1 block text-sm">South Sudan</span></span></div>
        </div>
        <div className="mt-8 flex gap-4 text-muted-foreground">
          <a href="https://github.com/amirphiladam2" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/amirphiladam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href="https://x.com/amirphiladam" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></a>
          <a href="https://youtube.com/@amirdevstudio-1" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-primary"><Youtube className="h-5 w-5" /></a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-5 text-center text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          © 2026 Amir P. Adam
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
