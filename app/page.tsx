import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-body-black min-h-screen text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <HomePage />
        <Projects />
      </div>
    </main>
  );
}
