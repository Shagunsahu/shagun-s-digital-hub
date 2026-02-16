import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Home, Info } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />

      <Navbar />

      <main className="grow">
        <div className="mx-auto flex grow flex-col gap-y-6 px-4 max-w-3xl pb-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              <Home size={14} />
            </Link>
            <span>›</span>
            <span className="flex items-center gap-1.5 text-foreground">
              <Info size={14} />
              About
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-foreground leading-tight">about me</h1>

          {/* Separator */}
          <hr className="border-border" />

          {/* Content paragraphs */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              I am a Full-Stack Developer and Open-Source Contributor dedicated to building high-performance web applications and exploring the intricacies of distributed systems. My technical approach is centered on efficiency and reliability, with a particular interest in how decentralized architectures—like the core protocols of Bitcoin—handle data integrity and trustless consensus.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              I thrive on solving complex technical challenges, from diagnosing deep-seated memory leaks in frontend galleries to optimizing backend connection pools for industrial-scale applications. My recent work includes contributing to open-source codebases, where I collaborate with global developers to refine and scale modern software.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              I am passionate about the 'how' behind the code—constantly seeking to understand the underlying systems that make software robust. Whether I'm architecting a custom CMS or participating in a global sprint, my goal is to deliver precise, clean, and impactful code.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
