import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [userData, setUserData] = useState({});

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
