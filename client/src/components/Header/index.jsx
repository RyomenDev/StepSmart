import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HeaderComponent = ({ data }) => {
  const { companyName, headerOptions } = data;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-[#296949]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        {/* Company Name */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md font-[Poppins]">
          {companyName}
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-[Poppins] md:text-2xl">
          {/* {headerOptions.map((option) => (
            <Link
              key={option.key}
              to={option.path}
              className="text-lg font-semibold tracking-wide text-white hover:text-emerald-300 transition-all duration-200 ease-in-out"
            >
              {option.key}
            </Link>
          ))} */}
          {headerOptions.map((option) =>
            option.path.startsWith("#") ? (
              <a
                key={option.key}
                href={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
              >
                {option.key}
              </a>
            ) : (
              <Link
                key={option.key}
                to={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
              >
                {option.key}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden font-[Poppins]">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 text-gray-900 shadow-lg rounded-b-xl">
          <div className="px-6 py-4 space-y-3 font-medium text-lg">
            {/* {headerOptions.map((option) => (
              <Link
                key={option.key}
                to={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
              >
                {option.key}
              </Link>
            ))} */}
            {headerOptions.map((option) =>
              option.path.startsWith("#") ? (
                <a
                  key={option.key}
                  href={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
                >
                  {option.key}
                </a>
              ) : (
                <Link
                  key={option.key}
                  to={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
                >
                  {option.key}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // using lucide icons for hamburger menu

// const HeaderComponent = ({ data }) => {
//   const { companyName, headerOptions } = data;
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="w-full fixed top-0 left-0  bg-[#27ae60]/90 text-white shadow-lg z-50">
//       {/* bg-gradient-to-r from-green-500 to-emerald-600 */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Company Name */}
//         <h1 className="text-2xl font-extrabold tracking-wide">{companyName}</h1>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6">
//           {headerOptions.map((option) => (
//             <Link
//               key={option.key}
//               to={option.path}
//               className="hover:text-yellow-200 font-medium transition duration-200"
//             >
//               {option.key}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="focus:outline-none"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white text-gray-800 shadow-md">
//           <div className="px-4 py-4 space-y-2">
//             {headerOptions.map((option) => (
//               <Link
//                 key={option.key}
//                 to={option.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block px-4 py-2 rounded hover:bg-gray-100 font-medium"
//               >
//                 {option.key}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default HeaderComponent;
