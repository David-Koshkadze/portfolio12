import AboutPage from "@/components/AboutPage";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen">
      <header className="bg-white py-4">
        <nav className="flex justify-between max-w-4xl mx-auto px-4">
          <div className="font-semibold text-lg">My Portfolio</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-gray-900 hover:text-gray-700">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-900 hover:text-gray-700">
                Projects
              </a>
            </li>
            <li>
              <a href="#work" className="text-gray-900 hover:text-gray-700">
                Work History
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-900 hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section id="about">
          <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
          {/* Add your about me content here */}
          <AboutPage />
        </section>
        <section id="projects">
          <h1 className="text-4xl font-bold mb-6 text-white">Projects</h1>
          {/* Add your projects content here */}
          <ProjectsPage />
        </section>
        <section id="work">
          <h1 className="text-4xl font-bold mb-6 text-white">Work History</h1>
          {/* Add your work history content here */}
        </section>
        <section id="contact">
          <h1 className="text-4xl font-bold mb-6 text-white">Contact</h1>
          {/* Add your contact content here */}
        </section>
      </div>
    </div>
  );
}
