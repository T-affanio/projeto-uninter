"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User) => boolean;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const logged = localStorage.getItem("loggedUser");

    if (logged) {
      setUser(JSON.parse(logged));
    }
  }, []);

  const register = (newUser: User) => {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const exists = users.find(
      (u: User) => u.email === newUser.email
    );

    if (exists) return false;

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return true;
  };

  const login = (
    email: string,
    password: string
  ) => {
    const users: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const found = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!found) return false;

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(found)
    );

    setUser(found);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);