import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">BuzzStream</h3>
            <p className="text-gray-400 mb-5">
              Developed a dynamic social media application featuring real-time post creation and deletion using React and Context API for efficient state management.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "JavaScript", "React", "Bootstrap"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
              ))}
            </div>
            <div className="flex justify-between items-center my-2">
              <a href="https://github.com/samoutlier/my-social-media" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
            <p className="text-gray-400 mb-5">
              Developed an E-Commerce website by implementing features such as product listings, responsive design and shopping
              cart functionality.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JavaScript", "Bootstrap",].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
              ))}
            </div>
            <div className="flex justify-between items-center my-2">
              <a href="https://github.com/samoutlier/E-Commerce" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Calculator</h3>
            <p className="text-gray-400 mb-5">
              Developed a calculator application with a responsive design and real-time calculations, implementing features such as basic arithmetic operations and clean UI for an enhanced user experience.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "JavaScript", "React", "Bootstrap"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
              ))}
            </div>
            <div className="flex justify-between items-center my-2">
              <a href="https://github.com/samoutlier/my-social-media" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">PDF Merger</h3>
            <p className="text-gray-400 mb-5">
              Created a web tool for seamless PDF merging, empowering users to merge files effortlessly and download the consolidated
              document.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "JavaScript", "React", "JavaScript"].map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
              ))}
            </div>
            <div className="flex justify-between items-center my-2">
              <a href="https://github.com/samoutlier/PDF-Merger/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project ➡️ </a>
            </div>
          </div>

        </div>
      </div>
    </RevealOnScroll>
  </section>
};