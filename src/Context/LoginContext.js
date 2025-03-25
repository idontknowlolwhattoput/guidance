import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext); // Hook to access state

export const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </LoginContext.Provider>
  );
};