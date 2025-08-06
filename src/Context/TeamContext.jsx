import { createContext, useState } from "react";

const TeamContext = createContext({});

function TeamContextProvider({ children }) {
  const [teamData, setTeamData] = useState({});

  return (
    <TeamContext.Provider value={{ teamData, setTeamData }}>
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;
export { TeamContextProvider };
