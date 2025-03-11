export const About = () => {

  const frontendSkills = ["HTML", "Bootstrap", "Tailwind", "JavaScript", "React",]

  const languages = ["C", "C++", "Java", "JavaScript",]

  return <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <div className="max-w-3xl mx-auto px-4 ">

      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
        About Me
      </h2>

      <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
        <p className="glass text-gray-300 mb-6">
          Passionate developer with expertise in building scalable web applications and creating innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{skill} </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{skill} </span>
            ))}
          </div>
        </div>


        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">🎓  Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-4">
            <li>
              <strong>
                B.Tech in Electronics & Communication Engineering
              </strong> - Jamia Millia Islamia, New Delhi (2020-2024)
            </li>
            <li>
              Relevant Coursework : Data Structures & Algorithms, OOPS, Computer Networks, DBMS
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">📟 Coding Profiles</h3>
          <li className="text-xl">
            <a
              href="https://www.leetcode.com/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.com/"
              className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksForGeeks
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/"
              className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeChef
            </a>
          </li>
        </div>


      </div>

    </div>

  </section>
}