import { createContext, useState } from "react";

const InvitationContext = createContext({});

function InvitationContextProvider({ children }) {
  const [invitationData, setInvitationData] = useState({});

  function acceptInvitation(payload) {
    setInvitationData((prevData) => ({
      ...prevData,
      ...payload,
    }));
  }

  return (
    <InvitationContext.Provider
      value={{
        invitationData,
        acceptInvitation,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

export { InvitationContextProvider };
export default InvitationContext;
