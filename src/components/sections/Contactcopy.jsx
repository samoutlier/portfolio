import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const ContactCopy = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
        setFormData({ name: "", email: "", message: "" });
        e.target.reset();
      })
      .catch(() => {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-auto sm:w-[525px]">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full text-white py-3 px-6 rounded font-medium transition relative overflow-hidden flex items-center justify-center gap-2 hover:cursor-pointer
                ${isSubmitted ? "bg-green-600" : isError ? "bg-red-500" : "bg-blue-500 hover:bg-blue-600"} 
                ${isLoading ? "pointer-events-none" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : isSubmitted ? "Thanks!" : isError ? "Error! Try again" : "Submit"}
            </button>
            <button class="bg-blue-500 text-white px-4 py-2 pointer-events-none">
              Can't Click Me
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};


// <div>
//                 className={`absolute top-0 right-[-40px] w-[80px] h-[80px] rounded-full bg-gray-700 flex items-center justify-center shadow-lg transition-all duration-700
//                 ${isSubmitted ? "right-0 opacity-100" : "opacity-0"}`}
//               >


// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "emailjs-com";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_TEMPLATE_ID,
//         e.target,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then(() => {
//         setIsSubmitted(true); // Activate success animation
//         setTimeout(() => {
//           setIsSubmitted(false); // Reset button after delay
//         }, 3000);

//         setFormData({ name: "", email: "", message: "" });
//         e.target.reset();
//       })
//       .catch(() => {
//         alert("Oops, something went wrong, please try again >_<");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <section id="contact" className="min-h-screen flex items-center justify-center py-20">
//       <RevealOnScroll>
//         <div className="px-4 w-auto sm:w-[525px]">
//           <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//             Get In Touch
//           </h2>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="relative">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     name: e.target.value,
//                   })
//                 }
//                 className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="Name..."
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     email: e.target.value,
//                   })
//                 }
//                 className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="example@gmail.com"
//               />
//             </div>

//             <div className="relative">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     message: e.target.value,
//                   })
//                 }
//                 className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="Your message..."
//               />
//             </div>

//             {/* ✅ Animated Submit Button */}
//             <button
//               type="submit"
//               className={`w-[270px] h-[80px] text-white text-[22px] font-medium rounded-[40px] transition relative flex items-center justify-center overflow-hidden cursor-pointer
//                 ${isSubmitted ? "bg-pink-500" : "bg-gray-800 hover:bg-gray-700"}
//                 ${isLoading ? "pointer-events-none" : ""}`}
//               disabled={isLoading || isSubmitted}
//             >
//               <p className={`transition-all duration-700 ${isSubmitted ? "mr-[125px]" : "mr-0"}`}>
//                 {isLoading ? "Sending..." : isSubmitted ? "Thanks" : "Submit"}
//               </p>

//               {/* ✅ Success Check Animation */}
//               <div
//                 className={`absolute top-0 right-[-40px] w-[80px] h-[80px] rounded-full bg-gray-700 flex items-center justify-center shadow-lg transition-all duration-700
//                 ${isSubmitted ? "right-0 opacity-100" : "opacity-0"}`}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
//                   <path
//                     fill="transparent"
//                     strokeWidth="3"
//                     stroke="white"
//                     strokeLinecap="round"
//                     strokeDasharray="34"
//                     strokeDashoffset={isSubmitted ? "0" : "34"}
//                     className="transition-all duration-700 delay-1000"
//                     d="M14.1 27.2l7.1 7.2 16.7-16.8"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </form>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
