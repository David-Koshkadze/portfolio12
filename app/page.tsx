import Experience from "@/components/Experience/Experience";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="body-background min-h-screen text-white">
      <Navbar />
      <div className="w-3/4 lg:w-[80%] mx-auto">
        <HomePage />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
