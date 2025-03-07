export const Navbar = () => {


  return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <a href="#home" className="font-mono text-xl font-bol text-yellow-300"> Outlier<span className="text-blue-500">.tech</span></a>
      </div>

      <div className="w-70 h-5 relative cursor-pointer z-40 ">cddccd</div>
      <div className="hidden md:flex item--center space-x-8">
        <a href="#home" className="text-gray-800 hiver:text-white transition-colors">Home</a>
        <a href="#about" className="text-gray-800 hiver:text-white transition-colors">About</a>
        <a href="#projects" className="text-gray-800 hiver:text-white transition-colors">Projects</a>
        <a href="#Contact" className="text-gray-800 hiver:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
}