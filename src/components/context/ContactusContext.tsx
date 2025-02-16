"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
interface CallusContextValue {
  contactModal: boolean;
  toggleOpen: () => void;
}
const CallusContext = createContext<CallusContextValue | undefined>(undefined);
function ContactusContext({ children }: { children: React.ReactNode }) {
  const [contactModal, setContactModal] = useState(false);
  const toggleOpen = () => {
    setContactModal(!contactModal);
  };
  useEffect(() => {
    if (contactModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [contactModal]);
  // console.log(contactModal);
  return (
    <CallusContext.Provider value={{ contactModal, toggleOpen }}>
      {children}
    </CallusContext.Provider>
  );
}
const useCallusContext = (): CallusContextValue => {
  const context = useContext(CallusContext);
  if (!context) {
    throw new Error(
      "useCallusContext must be used within a ContactusContext.Provider"
    );
  }
  return context;
};
export { ContactusContext, useCallusContext };
