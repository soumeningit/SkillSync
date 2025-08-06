import { createContext, useState } from "react";

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const [profileData, setProfileData] = useState({});

  function updateProfileData(payload) {
    setProfileData((prevData) => ({ ...prevData, ...payload }));
  }

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContextProvider };
export default ProfileContext;
