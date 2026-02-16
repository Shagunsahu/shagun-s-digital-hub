import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />

      <Navbar />

      <main className="grow">
        <div className="mx-auto flex grow flex-col gap-y-6 px-4 max-w-3xl pb-32">
          <section>
            <div className="rounded-lg border bg-card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-3xl leading-none font-medium text-foreground">about me</h1>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I am a Full-Stack Developer and Open-Source Contributor dedicated to building high-performance web applications and exploring the intricacies of distributed systems. My technical approach is centered on efficiency and reliability, with a particular interest in how decentralized architectures—like the core protocols of Bitcoin—handle data integrity and trustless consensus.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I thrive on solving complex technical challenges, from diagnosing deep-seated memory leaks in frontend galleries to optimizing backend connection pools for industrial-scale applications. My recent work includes contributing to open-source codebases, where I collaborate with global developers to refine and scale modern software.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I am passionate about the 'how' behind the code—constantly seeking to understand the underlying systems that make software robust. Whether I'm architecting a custom CMS or participating in a global sprint, my goal is to deliver precise, clean, and impactful code.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
