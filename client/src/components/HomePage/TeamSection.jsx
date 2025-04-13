

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">Our Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We are a group of innovative, experienced, and proficient teams. You
          will love to collaborate with us.
        </p>
        <div className="mt-2 w-16 h-1 mx-auto bg-green-500 rounded-full" />
      </div>

      <div className="grid grid-cols-2 [@media(max-width:338px)]:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers?.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
