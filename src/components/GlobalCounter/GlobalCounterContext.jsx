import { createContext, useState } from "react";

export const GlobalCounterContext = createContext(null);

/* eslint-disable react/prop-types */
export const CounterContext = ({ children }) => {
  const [currentCounter, setCurrentCounter] = useState(0);

  return (
    <GlobalCounterContext.Provider
      value={{ currentCounter, setCurrentCounter }}
    >
      {children}
    </GlobalCounterContext.Provider>
  );
};
