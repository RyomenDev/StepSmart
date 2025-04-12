import { motion } from "framer-motion";

const Testimonials = ({ testimonials }) => {
  const containerHeight = 200;
  const cardHeight = 160; // approx height including padding
  const maxCards = testimonials.length;

  // Ensure all cards fit inside 500px
  const verticalSpacing = (containerHeight - cardHeight) / (maxCards - 1);

  return (
    <section className="relative bg-gradient-to-br from-green-100 to-green-100 py-20 px-6 overflow-visible">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-16 z-10 relative">
        What Our Students Say
      </h2>

      <div className="relative w-full h-[300px] overflow-visible">
        {testimonials.map((t, index) => {
          const delay = index * 2;
          const topPosition = index * verticalSpacing;

          return (
            <motion.div
              key={index}
              className="absolute w-80 p-6 rounded-3xl shadow-2xl text-white bg-[#7ed899]"
              style={{
                top: `${topPosition}px`,
                left: "-350px",
              }}
              animate={{
                x: ["-350px", "120vw"],
                y: ["0px", "-10px", "10px", "0px"],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 12 + index * 2,
                ease: "linear",
                delay,
              }}
            >
              <p className="text-lg italic leading-relaxed">“{t.feedback}”</p>
              <p className="mt-5 font-semibold text-lg text-white">
                — {t.name},{" "}
                <span className="text-sm font-normal">{t.role}</span>
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

// import { motion } from "framer-motion";

// const Testimonials = ({ testimonials }) => {
//   const containerHeight = 500; // fixed height
//   const maxCards = testimonials.length;
//   const verticalSpacing = containerHeight / maxCards;

//   return (
//     <section className="relative bg-gradient-to-br from-green-100 to-green-100 py-20 px-6 overflow-visible">
//       <h2 className="text-4xl font-bold text-center text-green-800 mb-16 z-10 relative">
//         What Our Students Say
//       </h2>

//       <div className="relative w-full h-[500px] overflow-visible">
//         {testimonials.map((t, index) => {
//           const delay = index * 2;
//           const topPosition = index * verticalSpacing + 20;

//           return (
//             <motion.div
//               key={index}
//               className="absolute w-80 p-6 rounded-3xl shadow-2xl text-white bg-[#7ed899]"
//               style={{
//                 top: `${topPosition}px`,
//                 left: "-350px",
//               }}
//               animate={{
//                 x: ["-350px", "120vw"],
//                 y: ["0px", "-10px", "10px", "0px"],
//                 rotate: [0, 2, -2, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 12 + index * 2,
//                 ease: "linear",
//                 delay,
//               }}
//             >
//               <p className="text-lg italic leading-relaxed">“{t.feedback}”</p>
//               <p className="mt-5 font-semibold text-lg text-white">
//                 — {t.name},{" "}
//                 <span className="text-sm font-normal">{t.role}</span>
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// import { motion } from "framer-motion";

// const Testimonials = ({ testimonials }) => {
//   return (
//     <section className="relative bg-gradient-to-br from-green-100 to-green-100 py-20 px-6 overflow-hidden">
//       {" "}
//       {/*bg-[#48BF91]/80 */}
//       <h2 className="text-4xl font-bold text-center text-green-800 mb-16 z-10 relative">
//         What Our Students Say
//       </h2>
//       <div className="relative h-[400px] overflow-x-hidden">
//         {testimonials.map((t, index) => {
//           const delay = index * 2; // stagger animations

//           return (
//             <motion.div
//               key={index}
//               className="absolute w-80 p-6 rounded-3xl shadow-2xl text-white bg-[#7ed899]"
//               style={{
//                 top: `${index * 120}px`,
//                 left: "-350px", // start off-screen left
//               }}
//               animate={{
//                 x: ["-350px", "120vw"], // move fully across screen
//                 y: ["0px", "-15px", "15px", "0px"], // floating
//                 rotate: [0, 2, -2, 0], // slight wobble
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 12 + index * 2,
//                 ease: "linear",
//                 delay,
//               }}
//             >
//               <p className="text-lg italic leading-relaxed">“{t.feedback}”</p>
//               <p className="mt-5 font-semibold text-lg text-white">
//                 — {t.name},{" "}
//                 <span className="text-sm font-normal">{t.role}</span>
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// const Testimonials = ({ testimonials }) => {
//   return (
//     <>
//       <section className="bg-white py-16 px-4">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
//           What Our Students Say
//         </h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//           {testimonials.map((t, index) => (
//             <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
//               <p className="text-gray-700 italic">“{t.feedback}”</p>
//               <p className="mt-4 font-semibold text-gray-900">
//                 — {t.name}, {t.role}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Testimonials;
