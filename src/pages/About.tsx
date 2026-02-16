import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[700px] mx-auto w-full px-6 py-8">
        <section className="bg-card border border-border rounded-xl p-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">about me</h1>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              I am a Full-Stack Developer and Open-Source Contributor dedicated to building high-performance web applications and exploring the intricacies of distributed systems. My technical approach is centered on efficiency and reliability, with a particular interest in how decentralized architectures—like the core protocols of Bitcoin—handle data integrity and trustless consensus.
            </p>
            <p>
              I thrive on solving complex technical challenges, from diagnosing deep-seated memory leaks in frontend galleries to optimizing backend connection pools for industrial-scale applications. My recent work includes contributing to open-source codebases, where I collaborate with global developers to refine and scale modern software.
            </p>
            <p>
              I am passionate about the 'how' behind the code—constantly seeking to understand the underlying systems that make software robust. Whether I'm architecting a custom CMS or participating in a global sprint, my goal is to deliver precise, clean, and impactful code.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
