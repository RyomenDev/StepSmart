const Features = ({ featuresData }) => {
  return (
    <>
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Powerful Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Thynkr combines cutting-edge AI technology with expert guidance to
            provide a comprehensive interview preparation experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {" "}
            {/*[@media(max-width:338px)]:grid-cols-1*/}
            {featuresData?.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/90 to-transparent" />
                </div>

                <div className="flex justify-center -mt-6 z-10 relative">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

// import { FaRobot, FaUserTie, FaBookOpen, FaChartLine } from "react-icons/fa";
// import img1 from "../../assets/images/course_1.jpg";
// import img2 from "../../assets/images/course_2.jpg";
// import img3 from "../../assets/images/course_3.jpg";
// import img4 from "../../assets/images/course_4.jpg";

// const featuresData = [
//   {
//     icon: <FaRobot size={40} className="text-blue-600" />,
//     img: img1,
//     title: "AI-Powered Mock Interviews",
//     description:
//       "Practice with our AI interviewer that adapts to your responses and simulates real interview conditions.",
//   },
//   {
//     icon: <FaUserTie size={40} className="text-purple-600" />,
//     img: img2,
//     title: "Expert Mentoring",
//     description:
//       "Connect with industry professionals who provide personalized guidance and insider knowledge.",
//   },
//   {
//     icon: <FaBookOpen size={40} className="text-green-600" />,
//     img: img3,
//     title: "Interactive Courses",
//     description:
//       "Learn interview techniques through engaging, interactive courses designed by industry experts.",
//   },
//   {
//     icon: <FaChartLine size={40} className="text-yellow-500" />,
//     img: img4,
//     title: "Real-Time Feedback",
//     description:
//       "Receive instant analysis of your performance with actionable insights to improve your skills.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-4">
//       {" "}
//       {/*bg-[#55d4a3]/80*/}
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
//           Powerful Features
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
//           Thynkr combines cutting-edge AI technology with expert guidance to
//           provide a comprehensive interview preparation experience.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {featuresData.map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
//             >
//               <div className="relative h-56">
//                 <img
//                   src={feature.img}
//                   alt={feature.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/90 to-transparent" />
//               </div>

//               <div className="flex justify-center -mt-6 z-10 relative">
//                 <div className="bg-white p-3 rounded-full shadow-md">
//                   {feature.icon}
//                 </div>
//               </div>

//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
