import Experience from "@/components/Experience/Experience";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="body-background min-h-screen text-white">
      <Navbar />
      <div className="w-3/4 lg:w-[80%] mx-auto">
        <HomePage />
        <Projects />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}
