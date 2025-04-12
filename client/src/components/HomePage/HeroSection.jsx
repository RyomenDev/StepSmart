import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ data }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${data.hero_bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <TypeAnimation
            sequence={[data.title_1, 1000, data.title_2, 1500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">{data.subtitle}</p>

        <Link
          to={data.ctaLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          {data.ctaText}
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
