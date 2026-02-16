import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, GraduationCap, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[700px] mx-auto w-full px-6 py-8 space-y-12">
        {/* Hero */}
        <section className="bg-card border border-border rounded-xl p-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">hi, i'm shagun</h1>
          <p className="text-sm italic text-muted-foreground mb-4">
            full-stack developer with too many tabs open.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            i design, code, overthink, and fix what i break. i like clean ui, loud music, fast planes, and learning by messing with things. i never really knew what i was doing, but i've always cared enough to figure it out.
          </p>
        </section>

        {/* See My Work */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">see my work</h2>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.sustainablesteelllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Sustainable Steel LLC</h3>
                  <p className="text-sm text-muted-foreground">Lead Generation Platform</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </a>
            <a
              href="https://varpixel.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">VAR PIXELS</h3>
                  <p className="text-sm text-muted-foreground">Platform for High Quality Assets</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">work experience</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg shrink-0">
                <Briefcase size={18} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">VAR PIXELS</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">education</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Dr. Virendra Swarup Group of Institutions</h3>
                    <p className="text-sm text-muted-foreground">Computer Science and Engineering</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Aug 2023 - June 2027</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
