import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl w-full px-4 py-6 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 All rights reserved. · Made with 🤍 by Shagun
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Shagunsahu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/shagun-sahu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Instagram size={16} />
          </a>
          <a href="mailto:shagunsahu693@gmail.com" className="p-2 rounded-md border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
