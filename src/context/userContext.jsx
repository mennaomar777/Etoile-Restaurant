import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../Helper/supabase-client";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  async function getUser() {
    const { data } = await supabase.auth.getSession();
    setUser(data?.session?.user || null);
  }

  useEffect(() => {
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
