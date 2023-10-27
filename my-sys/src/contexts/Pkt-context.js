// src/contexts/PocketContext.js
import React, { createContext } from "react";
import { Pocket } from "@pocketbase/sdk";

const PocketContext = createContext({
  pb: null,
});

export const PocketContextProvider = ({ children }) => {
  const pb = new Pocket({
    url: "http://localhost:8090",
  });

  return (
    <PocketContext.Provider value={{ pb }}>{children}</PocketContext.Provider>
  );
};

export const usePocket = () => {
  return React.useContext(PocketContext);
};