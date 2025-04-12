
import { CheckCircle } from "lucide-react";

const OrganizationSection = ({ data }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-16 bg-[white]"> {/*bg-[#32cf92] */}
      {/* Left - Text */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">{data.title}</h2>
        <p className="italic text-gray-600 mb-6">{data.intro}</p>
        <ul className="space-y-4 mb-6">
          {data.points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-lg">
              <CheckCircle className="text-green-500 mt-1" size={20} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-800">{data.closing}</p>
      </div>

      {/* Right - Image */}
      <div className="md:w-1/2">
        <img
          src={data.image}
          alt="organization"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>
    </section>
  );
};

export default OrganizationSection;
