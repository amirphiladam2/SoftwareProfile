import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "Skills", "Projects", "Contact"];

  return (
    <header className="sticky z-50 top-0 mt-4 px-4">
      <Container>
        <nav className="p-4 border rounded-3xl bg-background/90 shadow/90 backdrop-blur-xl">
          <div className="flex items-center gap-6 px-6 py-3">
            <a
              href="/"
              className="flex items-center gap-2 text-base font-extrabold tracking-tight transition-opacity hover:opacity-80"
            >
              <span className="text-2xl text-primary">Amir</span>
            </a>

            <div className="ml-auto hidden gap-4 text-base font-semibold text-muted-foreground/80 sm:flex sm:gap-7">
              {links.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className="group relative transition-colors hover:text-foreground"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden shrink-0 rounded-md border border-primary/50 px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:block"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="ml-auto rounded-md border border-white/10 p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary sm:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="border-t border-white/[0.06] bg-background/95 px-6 py-3 sm:hidden">
              <div className="flex flex-col">
                {links.map((item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="border-b border-white/[0.06] py-3 text-sm font-semibold text-muted-foreground transition-colors last:border-0 hover:text-foreground"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-3 rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
