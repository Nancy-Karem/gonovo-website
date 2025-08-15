"use client";
import { useCallusContext } from "../context/ContactusContext";
import React from "react";

export const ContactButton = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const { toggleOpen } = useCallusContext();
  return (
    <button onClick={toggleOpen} className={className}>
      {text}
    </button>
  );
};
