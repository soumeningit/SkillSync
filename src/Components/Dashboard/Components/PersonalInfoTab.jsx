import { FiCamera } from "react-icons/fi";
import InputField from "./InputField";

function PersonalInfoTab({ data, setData }) {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setData((prev) => ({ ...prev, [name]: event.target.result }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Image Uploads */}
      <div className="relative">
        <img
          src={data.coverPhoto}
          alt="Cover"
          className="w-full h-48 object-cover rounded-lg bg-gray-700"
        />
        <label className="absolute top-2 right-2 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black/70">
          <FiCamera />
          <input
            type="file"
            name="coverPhoto"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <div className="absolute -bottom-12 left-6">
          <img
            src={data.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-800 bg-gray-700"
          />
          <label className="absolute bottom-0 right-0 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black/70">
            <FiCamera size={16} />
            <input
              type="file"
              name="avatar"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="name"
          label="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <InputField
          id="contact_no"
          label="Contact Number"
          value={data.contact_no}
          onChange={(e) => setData({ ...data, contact_no: e.target.value })}
        />
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={data.gender}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <InputField
          id="dob"
          label="Date of Birth"
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows="4"
          value={data.bio}
          onChange={(e) => setData({ ...data, bio: e.target.value })}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us a little about yourself..."
        ></textarea>
      </div>
    </div>
  );
}

export default PersonalInfoTab;
