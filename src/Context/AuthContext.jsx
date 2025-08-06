import { createContext, useState } from "react";

const AuthContext = createContext();

function extractToken() {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
}

function extractUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function AuthContextProvider({ children }) {
  const [authData, setAuthData] = useState({});
  const [token, setToken] = useState(extractToken());
  const [user, setUser] = useState(extractUser());

  function addToken(newToken, user) {
    localStorage.setItem("token", JSON.stringify(newToken));
    localStorage.setItem("user", JSON.stringify(user));
    setToken(newToken);
    setUser(user);
  }
  function removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        token,
        addToken,
        removeToken,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContextProvider };
export default AuthContext;
