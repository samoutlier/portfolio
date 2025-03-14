import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      alert("Message Sent ╰(*°▽°*)╯");
      setFormData({ name: "", email: "", message: "" });
      e.target.reset();
    }).catch(() => {
      alert("Oops, something went wrong, please try again {{{(>_<)}}}");
      setFormData({ name: "", email: "", message: "" });
    }).finally(() => {
      setIsLoading(false);
    });
  };


  return <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>

      <div className="px-4 w-auto sm:w-[525px]">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">Gen In Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({
                ...formData,
                name: e.target.value
              })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({
                ...formData,
                email: e.target.value
              })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({
                ...formData,
                message: e.target.value
              })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your message..."
            />
          </div>

          <button type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] 
             cursor-pointer flex items-center justify-center gap-2"
            disabled={isLoading} // ✅ Disable button while loading
          >
            {isLoading ? (
              <>
                <span className="loader"></span> Sending...
              </>
            ) : "Submit"}
          </button>

        </form>
      </div>
    </RevealOnScroll>
  </section>
}