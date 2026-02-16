import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      {/* Bottom gradient overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />

      <Navbar />

      <main className="grow">
        <div className="mx-auto flex grow flex-col gap-y-6 px-4 max-w-3xl pb-32">
          {/* Hero */}
          <section>
            <div className="rounded-lg border bg-card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-3xl leading-none font-medium text-foreground">hi, i'm shagun</h1>
                <p className="text-muted-foreground text-sm italic">
                  full-stack developer with too many tabs open.
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground text-sm">
                  i design, code, overthink, and fix what i break. i like clean ui, loud music, fast planes, and learning by messing with things. i never really knew what i was doing, but i've always cared enough to figure it out.
                </p>
              </div>
            </div>
          </section>

          {/* See My Work */}
          <section className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-medium text-foreground">see my work</h2>
            <div className="flex flex-col gap-y-4">
              <a
                href="https://www.sustainablesteelllc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Sustainable Steel LLC</h3>
                    <p className="text-muted-foreground text-sm mt-1">Lead Generation Platform</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
              <a
                href="https://varpixel.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">VAR PIXELS</h3>
                    <p className="text-muted-foreground text-sm mt-1">Platform for High Quality Assets</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            </div>
          </section>

          {/* Work Experience */}
          <section className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-medium text-foreground">work experience</h2>
            <div className="flex flex-col gap-y-4">
              <div className="rounded-lg border p-4 transition-colors hover:bg-accent/50 relative">
                <span className="hidden sm:inline-block absolute top-4 right-4 text-muted-foreground text-sm whitespace-nowrap">2025</span>
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                    <Briefcase size={20} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-foreground">Frontend Developer</h3>
                    <p className="text-muted-foreground">VAR PIXELS</p>
                    <span className="text-muted-foreground text-sm mt-4 sm:hidden block">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-medium text-foreground">education</h2>
            <div className="flex flex-col gap-y-4">
              <div className="rounded-lg border p-4 transition-colors hover:bg-accent/50 relative">
                <span className="hidden sm:inline-block absolute top-4 right-4 text-muted-foreground text-sm whitespace-nowrap">Aug 2023 - June 2027</span>
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                    <GraduationCap size={20} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-foreground">Dr. Virendra Swarup Group of Institutions</p>
                    <h3 className="text-muted-foreground mt-1">Computer Science and Engineering</h3>
                    <span className="text-muted-foreground text-sm mt-4 sm:hidden block">Aug 2023 - June 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
