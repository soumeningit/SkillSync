import { AuthContextProvider } from "./AuthContext";
import { InvitationContextProvider } from "./InvitationContext";
import { ProfileContextProvider } from "./ProfileContext";
import { TeamContextProvider } from "./TeamContext";

function RootContextProvider({ children }) {
  return (
    <AuthContextProvider>
      <ProfileContextProvider>
        <TeamContextProvider>
          <InvitationContextProvider>{children}</InvitationContextProvider>
        </TeamContextProvider>
      </ProfileContextProvider>
    </AuthContextProvider>
  );
}

export default RootContextProvider;
