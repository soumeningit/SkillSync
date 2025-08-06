import { FaLinkedin, FaTwitter } from "react-icons/fa";

function TeamMemberCard({ name, role, avatar, bio, social }) {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={avatar}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
      />
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-cyan-400 font-semibold mb-3">{role}</p>
      <p className="text-gray-400 text-sm mb-4">{bio}</p>
      <div className="flex justify-center space-x-4">
        <a href={social.twitter} className="text-gray-500 hover:text-cyan-400">
          <FaTwitter size={20} />
        </a>
        <a href={social.linkedin} className="text-gray-500 hover:text-cyan-400">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}

export default TeamMemberCard;
