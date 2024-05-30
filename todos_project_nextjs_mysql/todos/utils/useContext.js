/*
import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
import pool from "../databse/db";

// Create a context
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user data based on token from localStorage
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("/api/getUser", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
          //   const [rows] = await pool.query(
          //     "SELECT userName FROM users WHERE token = ?",
          //     [token]
          //   );
          //   console.log(rows);
          //   setUser(response.data.user);
          //   setUser(rows);
        } catch (error) {
          console.error("Failed to fetch user", error);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

*/

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user data based on token from localStorage
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // const response = await axios.get("/api/getUser", {
          //   headers: { Authorization: `Bearer ${token}` },
          // });
          // setUser(response.data.user);
          const [rows] = await pool.query(
            "SELECT userName FROM users WHERE token = ?",
            [token]
          );
          console.log(rows);
          setUser(response.data.user);
          // setUser(rows);
        } catch (error) {
          console.error("Failed to fetch user", error);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }} setLoading={true}>
      {children}
    </UserContext.Provider>
  );
};
