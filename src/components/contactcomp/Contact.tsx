"use client";
import React from "react";
import Contactus from "../contactus/Contactus";
import { useCallusContext } from "../context/ContactusContext";

export const Contact = () => {
  const { contactModal } = useCallusContext();
  return <>{contactModal && <Contactus />}</>;
};
